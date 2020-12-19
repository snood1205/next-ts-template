import { NextPage } from "next";
import { AppProps } from "next/app";

const _App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default _App;
