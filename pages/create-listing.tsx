import CreateListingForm from "@/components/Listings/CreateListingForm";
import { auth } from "@/firebase/clientApp";
import Head from "next/head";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

type CreateListingProps = {};

const CreateListing: React.FC<CreateListingProps> = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Head>
        <title>Create Listing - HomeHaven</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user && <CreateListingForm user={user} />}
    </>
  );
};
export default CreateListing;
