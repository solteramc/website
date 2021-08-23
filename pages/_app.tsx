import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { DARK_THEME, GlobalStyle } from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={DARK_THEME}>
			<GlobalStyle />
			<Component {...pageProps}></Component>
		</ThemeProvider>
	);
}
