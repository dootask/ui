#!/bin/bash

# DooTask UI 发布脚本
# 使用方法: ./scripts/release.sh [patch|minor|major]

set -e

# 检查参数
if [ $# -eq 0 ]; then
    echo "请指定版本类型: patch, minor, 或 major"
    echo "使用方法: ./scripts/release.sh [patch|minor|major]"
    exit 1
fi

VERSION_TYPE=$1

if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
    echo "错误: 版本类型必须是 patch, minor, 或 major"
    exit 1
fi

echo "🚀 开始发布 $VERSION_TYPE 版本..."

# 检查工作目录是否干净
if ! git diff-index --quiet HEAD --; then
    echo "❌ 错误: 工作目录不干净，请先提交所有更改"
    exit 1
fi

# 确保在 main 分支
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ 错误: 请在 main 分支进行发布"
    exit 1
fi

# 拉取最新代码
echo "📥 拉取最新代码..."
git pull origin main

# 安装依赖
echo "📦 安装依赖..."
npm ci

# 运行测试
echo "🧪 运行测试..."
npm run test

# 运行代码检查
echo "🔍 运行代码检查..."
npm run lint

# 运行类型检查
echo "📝 运行类型检查..."
npm run type-check

# 构建项目
echo "🏗️ 构建项目..."
npm run build

# 构建 Storybook
echo "📚 构建 Storybook..."
npm run build-storybook

# 更新版本号
echo "🔖 更新版本号..."
npm version $VERSION_TYPE --no-git-tag-version

# 获取新版本号
NEW_VERSION=$(node -p "require('./package.json').version")
echo "✅ 新版本: v$NEW_VERSION"

# 更新 CHANGELOG.md
echo "📝 更新 CHANGELOG.md..."
CURRENT_DATE=$(date +"%Y-%m-%d")
sed -i.bak "s/## \[Unreleased\]/## [Unreleased]\n\n## [$NEW_VERSION] - $CURRENT_DATE/" CHANGELOG.md
rm CHANGELOG.md.bak

# 提交更改
echo "💾 提交更改..."
git add .
git commit -m "chore: release v$NEW_VERSION"

# 创建标签
echo "🏷️ 创建标签..."
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"

# 推送到远程仓库
echo "📤 推送到远程仓库..."
git push origin main
git push origin "v$NEW_VERSION"

# 发布到 npm
echo "📦 发布到 npm..."
npm publish --access public

echo "🎉 发布完成！"
echo "📝 版本: v$NEW_VERSION"
echo "🔗 GitHub: https://github.com/dootask/ui/releases/tag/v$NEW_VERSION"
echo "📦 npm: https://www.npmjs.com/package/@dootask/ui"

echo ""
echo "🔄 后续步骤:"
echo "1. 在 GitHub 上创建 Release 说明"
echo "2. 更新项目文档"
echo "3. 通知团队和社区" 