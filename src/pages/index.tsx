import type { NextPage } from 'next';
import Head from 'next/head';

import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { classes } from '../styles/pages/index.st.css';

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
        <div className={classes.row}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>

        <h2>Active</h2>
      </div>
    </>
  );
};

export default Home;
