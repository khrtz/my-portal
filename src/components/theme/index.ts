import { createMuiTheme } from '@material-ui/core/styles';
// 使ったツール
// https://react-theming.github.io/create-mui-theme/
// https://material.io/tools/color/#!/?view.left=0&view.right=1&primary.color=59626b&secondary.color=709ad1

// theme.jsonはバックアップ。色が必要になったらここから追加する。

const palette = {
  "primary": {
    "main": "#5069a0",
    "light": "rgb(122, 129, 136)",
    "dark": "rgb(62, 68, 74)",
    "contrastText": "#fff"
  },
  "secondary": {
    "main": "#709ad1",
    "light": "rgb(140, 174, 218)",
    "dark": "rgb(78, 107, 146)",
    "contrastText": "rgba(0, 0, 0, 0.87)"
  },
  "text": {
    "primary": "rgba(0, 0, 0, 0.87)",
    "secondary": "rgba(0, 0, 0, 0.54)",
    "disabled": "rgba(0, 0, 0, 0.38)",
    "hint": "rgba(0, 0, 0, 0.38)"
  },
  "divider": "rgba(0, 0, 0, 0.12)",
  "card": {
    "backgroundColor": 'red'
  }
};

export const khrtzTheme = createMuiTheme({palette});