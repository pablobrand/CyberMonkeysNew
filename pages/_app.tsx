import type { AppProps } from "next/app";

import "../styles/global.css";
import "../styles/VideoSlider.css";
import '../styles/Pagination.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
