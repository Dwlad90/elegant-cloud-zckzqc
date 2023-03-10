import React from "react";
import Head from "next/head";
import ClientStyles from "../components/ClientStyles/ClientStyles";
import ServerStyles from "../components/ServerStyles/ServerStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ClientStyles />
        <br />
        <ServerStyles />
      </main>
    </>
  );
}
