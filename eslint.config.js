import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import vuePrettierConfig from '@vue/eslint-config-prettier'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['dist/**', 'node_modules/**'],
  },
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  vuePrettierConfig,
  {
    name: 'app/first-pass-rules',
    rules: {
      // 데이터 이관 직후 JSON-like TS 파일 전체 포맷 변경을 피하기 위해
      // 포맷은 npm run format에서 별도 수행하고, lint는 코드 오류 검출에 집중합니다.
      'prettier/prettier': 'off',
      'vue/require-default-prop': 'off',
    },
  },
]
