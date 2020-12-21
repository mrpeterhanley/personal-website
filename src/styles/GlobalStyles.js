import { createGlobalStyle } from 'styled-components';
import regular from '../fonts/OpenSans-Regular.ttf';
import semibold from '../fonts/OpenSans-SemiBold.ttf';
import italic from '../fonts/OpenSans-LightItalic.ttf';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: OpenSans-Regular;
        src: url(${regular});
    }

    @font-face {
        font-family: OpenSans-SemiBold;
        src: url(${semibold});
    }

    @font-face {
        font-family: OpenSans-Italic;
        src: url(${italic});
    }

    :root {
        --blue: rgb(136, 200, 255);
        --black: rgb(21, 16, 25);
        --border-radius: 0.2rem;
    }

    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    html {
        font-family: OpenSans-Regular, Arial, Helvetica, sans-serif;
        color: white;
    }

    .strong {
        font-family: OpenSans-SemiBold;
    }

    .italic {
        font-family: OpenSans-Italic;
    }
`;

export default GlobalStyles;