import { createGlobalStyle, DefaultTheme } from "styled-components";

export const LIGHT_THEME: DefaultTheme = {
	background: "#fff",
	primary: "#000",
};

export const DARK_THEME: DefaultTheme = {
	...LIGHT_THEME,
	background: "#111",
	primary: "#fff",
};

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.primary};
        font-family: "Roboto";
    }
`;
