#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "🚀 Pushing Global Arbitrage & NRI Wealth Navigator to GitHub..."
git push -u origin main
git push -u origin main:gh-pages

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Push successful!"
  echo "🌐 Your repository is live at: https://github.com/saltymother/global-arbitrage-nri"
  echo "📄 GitHub Pages will be live shortly at: https://saltymother.github.io/global-arbitrage-nri/"
else
  echo ""
  echo "❌ Push failed. Please check repository permissions."
fi
