import Head from "next/head";
import React from "react";

type SeoProps = {
  title: string;
  description: string;
};

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title} - HomeHaven</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/house.png" />
    </Head>
  );
};
export default Seo;
