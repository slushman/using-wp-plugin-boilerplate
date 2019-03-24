import { syntaxHighlighterPrism } from 'mdx-deck/themes';

const customTheme = {
  colors: {
    background: '#03649C',
    codeBackground: '#F2F6F7',
    text: '#F2F6F7',
  },
  a: {
    color: '#F2F6F7',
  },
  pre: {
    fontSize: '0.4em !important',
  },
  // Customize your presentation theme here.
  //'radialGradient(#1b558c, #022b4e)'
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
}

export const themes = [ syntaxHighlighterPrism, customTheme ];