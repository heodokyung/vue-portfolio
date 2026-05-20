#!/usr/bin/env bash
set -euo pipefail

rm -f vite.config.js jsconfig.json src/main.js src/router/index.js
rm -rf src/stores src/components/icons
rm -f src/assets/base.css src/assets/main.css src/assets/logo.svg
rm -f src/components/HelloWorld.vue src/components/TheWelcome.vue src/components/WelcomeItem.vue

# 1차 점검에서 발견한 미사용/민감 가능 자산 정리 후보입니다.
# 실제 프로젝트 데이터에서 참조하지 않는 파일만 제거합니다.
rm -f 'public/assets/portfolio/thumb_img_project/h_w.tt'
rm -f 'public/assets/portfolio/thumb_img_project/#Uc81c#Ubaa9-#Uc5c6#Uc74c-2.png'

echo 'Vue starter/duplicate files and unused assets cleaned.'
