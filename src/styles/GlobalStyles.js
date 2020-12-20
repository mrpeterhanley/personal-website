import { createGlobalStyle } from 'styled-components';
import regular from '../fonts/OpenSans-Regular.ttf';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: OpenSans-Regular;
        src: url(${regular});
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

    body {

    }
`;

export default GlobalStyles;