#!/usr/bin/env bash
set -euo pipefail

rm -f vite.config.js jsconfig.json src/main.js src/router/index.js
rm -rf src/stores src/components/icons
rm -f src/assets/base.css src/assets/main.css src/assets/logo.svg
rm -f src/components/HelloWorld.vue src/components/TheWelcome.vue src/components/WelcomeItem.vue

echo 'Vue starter/duplicate files cleaned.'
