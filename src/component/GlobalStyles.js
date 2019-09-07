import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyleHtml = createGlobalStyle`
html{
    font-size:62.5%;
    font-weight:300;
    font-family: 'Open Sans', 'Roboto Mono', sans-serif;
}

#root{
  height:100%;
}

*,
*::before,
*::after{
    box-sizing:inherit;
    margin:0;
    padding:0;
}

body{
  box-sizing:border-box;
  height:400rem;
  
}`;

export const Container = () => {
  return (
    <React.Fragment>
      <GlobalStyleHtml />
    </React.Fragment>
  );
};
