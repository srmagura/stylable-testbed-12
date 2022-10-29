import type { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "../components/Navbar";
import { classes } from "../styles/pages/index.st.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={classes.root}>
        <h1>Buttons</h1>

        <h2>Normal</h2>
        <button>Primary</button>

        <h2>Active</h2>
      </div>
    </>
  );
};

export default Home;
