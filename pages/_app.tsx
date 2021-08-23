import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { DARK_THEME, GlobalStyle } from "../theme";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={DARK_THEME}>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<GlobalStyle />
			<Component {...pageProps}></Component>
		</ThemeProvider>
	);
}
