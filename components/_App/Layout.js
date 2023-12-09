import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";
import Preloader from "./Preloader";
import Whatsapp from "./Whatsapp";

const Layout = ({ children }) => {
  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  return (
    <>
      <Head>
        <title>Atila Ertan Eğitim</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>

      {children}

      {loader ? <Preloader /> : null}

      <Whatsapp />

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;
