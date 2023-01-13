import css from "styled-jsx/css";

export default css.global`
  @font-face {
    font-family: "GaretWebHeavy";
    src: url("/fonts/font.woff2") format("woff2"),
      url("/fonts/font.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Manrope-Regular";
    src: url("/fonts/Manrope-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Manrope-Medium";
    src: url("/fonts/Manrope-Medium.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: "Manrope-Bold";
    src: url("/fonts/Manrope-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  :root {
    --primary-color: #2f2121;
    --main-light: #fff;
    --main-dark: #000;
    --main-gray: #7f7f82;
    --main-f-f: "Manrope-Regular";
    --title-fs: calc(var(--index) * 15);
    --space-mic: 1rem;
    --space-small: 2rem;
    --space-med: 5rem;
    --space-big: 15vh;
    --index: calc(1vh+1vw);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: var(--main-dark);
    color: var(--main-light);
    font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif,
      sans-serif;
  }

  body {
    font-size: 2.3rem;

    background-size: cover;
    font-weight: 400;
  }

  h1 {
    text-transform: uppercase;
    font-size: var(--title-fs);
    height: fit-content;
    font-weight: 600;
    line-height: 1;
  }
  h2 {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--main-gray);
  }
  h3 {
    font-weight: 600;
    font-size: var(--mainFS);
  }
  .container {
    width: 100%;
    display: grid;
    grid-column: 1/13;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: var(--space-small);
  }

  @media all and (max-width: 1024px) {
    :root {
      --title-fs: calc(var(--index) * 10);
    }
    .container {
      width: 100%;
      display: grid;
      grid-column: 1/13;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 0;
    }
  }
  @media all and (max-width: 1024px) and (orientation: portrait) {
    :root {
      --title-fs: calc(var(--index) * 8);
    }
  }
  @media all and (max-width: 600px) {
    :root {
      --title-fs: 10vw;
    }
  }
  @media all and (max-width: 1400px) and (orientation: landscape) {
    :root {
      --title-fs: calc(var(--index) * 15);
    }
  }
`;
