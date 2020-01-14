import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <h1>Hello, template-nextjs-pwa!!</h1>
      <p>This is a sample page</p>
    </>
  );
};

export default IndexPage;
