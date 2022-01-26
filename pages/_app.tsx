import type { AppProps } from "next/app";
import "@/styles/VideoSlider.css";

import "@/styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
