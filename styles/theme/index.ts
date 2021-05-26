import { basic, main, sub, success, hint, warning, error } from './color';

const commonPart = {
  media: {
    // https://tailwindcss.com/docs/breakpoints
    // https://vuetifyjs.com/en/features/breakpoints/   // 이걸로 선택!
    // https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints

    // 기본 최소 크기를  360 으로 가정
    min: 360 as const,

    sm: 600 as const, // big large phone to medium tablet
    md: 960 as const, // large tablet ~ laptop
    lg: 1264 as const, // desktop
    xl: 1904 as const, // 4k or larger
  },
};

const lightColor = {
  basic: basic.light,
  main: main.light,
  sub: sub.light,

  success: success.light,
  hint: hint.light,
  warning: warning.light,
  error: error.light,
};


// 다크 모드 지원한다면
const darkColor: typeof lightColor = {
  basic: basic.dark,
  main: main.dark,
  sub: sub.dark,

  success: success.dark,
  hint: hint.dark,
  warning: warning.dark,
  error: error.dark,
}

const themeDict = {
  light: {
    name: 'light',
    ...commonPart,
    color: lightColor,
  },
  dark: {
    name: 'dark',
    ...commonPart,
    color: darkColor,
  },
};

export default themeDict;

export type Theme = typeof themeDict.light;