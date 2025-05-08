#!/bin/bash

# Stop if any command fails
set -e

echo "🔄 Switching to main branch..."
git checkout main
git pull origin main

echo "✅ Committing all changes in main..."
git add .
git commit -m "Auto: Final commit before deployment" || echo "Nothing to commit"

echo "⚙️ Building project..."
npm install
npm run build

echo "📦 Copying build to temporary folder..."
rm -rf /tmp/deploy-temp
mkdir /tmp/deploy-temp
cp -r dist/* /tmp/deploy-temp

echo "🌿 Switching to master..."
git checkout master

echo "🧹 Cleaning master branch..."
git rm -rf . > /dev/null 2>&1 || true
rm -rf *

echo "📁 Copying build files to master..."
cp -r /tmp/deploy-temp/* .

echo "🚀 Committing and pushing to master..."
git add .
git commit -m "Deploy: production build"
git push origin master --force

echo "🔁 Returning to main branch..."
git checkout main

echo "✅ Deployment complete and back on main!"
