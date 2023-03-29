import css from "styled-jsx/css";

export default css.global`
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
    --space-mic: 1rem;
    --space-small: 2rem;
    --space-med: 3rem;
    --space-big: 5rem;
    --container-width: 1000px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: var(--main-light);
    color: var(--main-dark);
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Inter,
      Roboto, Arial, Ubuntu, sans-serif;
    font-weight: 300;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
  }

  a {
    color: var(--main-dark);
    text-decoration: none;
  }

  main {
    width: var(--container-width);
  }
  #__next {
    max-width: var(--container-width);
    width: 100%;
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: 16px;
    font-weight: 300;
  }
  h2 {
    color: var(--main-gray);
  }
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: var(--space-small);
  }

  @media all and (max-width: 1024px) and (orientation: portrait) {
    :root {
      --container-width: 100%;
    }
  }
  @media all and (max-width: 960px) and (orientation: landscape) {
    html {
      font-size: 100%;
    }
    :root {
      --container-width: 100vw;
    }
  }
`;
