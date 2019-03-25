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
}

export const themes = [ syntaxHighlighterPrism, customTheme ];