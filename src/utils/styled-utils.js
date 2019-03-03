// style-utils.js
import { css } from 'styled-components';

export const media = {
  mobileAndBelow: (...args) => css`
    @media (max-width: 600px) { 
      ${css(...args)} 
    }
  `,

  tabletAndAbove: (...args) => css`
    @media (min-width: 600px) { 
      ${css(...args)} 
    }
  `,

  landscapeTabletAndAbove: (...args) => css`
    @media (min-width: 768px) { 
      ${css(...args)} 
    }
  `,

  desktopAndAbove: (...args) => css`
    @media (min-width: 992px) { 
      ${css(...args)} 
    }
  `
};
