import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import TEAL from '@material-ui/core/colors/teal';

const linkColor = TEAL[700];

const theme = {
  title: 'Pradeep',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  blockMarginBottom: 0.8,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700']
    },
    {
      name: 'Roboto',
      styles: ['400', '400i', '700', '700i']
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  bodyColor: 'black',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3': {
      lineHeight: 1.1
    },
    a: {
      color: 'teal',
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      color: options.bodyColor
    },
    // Blockquote styles.
    blockquote: {
      ...scale(1 / 5),
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
      color: gray(35),
      paddingLeft: rhythm(10 / 16),
      fontStyle: 'italic',
      marginLeft: 0,
      marginRight: 0
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontStyle: 'normal',
      fontWeight: options.bodyWeight
    },
    'blockquote cite:before': {
      content: '"— "'
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
        paddingLeft: rhythm(9 / 16),
        fontStyle: 'italic',
        marginLeft: rhythm(-3 / 4),
        marginRight: 0
      }
    }
  })
};

export default theme;
