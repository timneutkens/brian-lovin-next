import { createGlobalStyle, css } from 'styled-components';
import { h1, h2, h3, h4, h5, h6, p, list, listItem, pre, code, blockquote, img } from '~/components/Typography';
import defaultTheme from '~/components/Theme';

const GlobalMarkdownStyles = createGlobalStyle`
  h1 {
    ${h1};
    margin-top: ${defaultTheme.space[6]};
  }

  h2 {
    ${h2};
    margin-top: ${defaultTheme.space[6]};
  }

  h3 {
    ${h3};
    margin-top: ${defaultTheme.space[6]};
  }

  h4 {
    ${h4};
    margin-top: ${defaultTheme.space[6]};
  }

  h5 {
    ${h5};
    margin-top: ${defaultTheme.space[6]};
  }

  h6 {
    ${h6};
    margin-top: ${defaultTheme.space[6]};
  }

  p {
    ${p};
    margin-top: ${defaultTheme.space[3]};

    img {
      ${img};
    }
  }

  ul, ol {
    ${list};
  }

  li {
    ${listItem}
  }

  pre {
    ${pre}
  }

  code {
    ${code}
  }

  strong {
    font-weight: ${defaultTheme.fontWeights.bold};
  }

  blockquote {
    ${blockquote}
  }

  /* ghost's iframe wrapper element, used to add aspect ratio to iframes */
  .kg-embed-card {
    position: relative;
    padding-top: 56.25%;
    margin: ${defaultTheme.space[4]} 0;
    
    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

`

export default GlobalMarkdownStyles