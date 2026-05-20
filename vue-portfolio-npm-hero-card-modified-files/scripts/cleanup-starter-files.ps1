# Vue starter/duplicate config cleanup script
# Run from the project root in PowerShell.
$paths = @(
  'vite.config.js',
  'jsconfig.json',
  'src/main.js',
  'src/router/index.js',
  'src/stores',
  'src/assets/base.css',
  'src/assets/main.css',
  'src/assets/logo.svg',
  'src/components/HelloWorld.vue',
  'src/components/TheWelcome.vue',
  'src/components/WelcomeItem.vue',
  'src/components/icons',
  'public/assets/portfolio/thumb_img_project/h_w.tt',
  'public/assets/portfolio/thumb_img_project/#Uc81c#Ubaa9-#Uc5c6#Uc74c-2.png'
)

foreach ($path in $paths) {
  if (Test-Path $path) {
    Remove-Item $path -Recurse -Force
    Write-Host "removed: $path"
  }
}
