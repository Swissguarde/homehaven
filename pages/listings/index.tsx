import { Listing } from "@/atoms/listingsAtom";
import Listings from "@/components/Listings/Listings";
import { firestore } from "@/firebase/clientApp";
import PropertyPage from "@/Layout/PropertyPage";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import safeJsonStringify from "safe-json-stringify";

type ListingPageProps = {
  listingsData: Listing[];
};

const ListingPage: React.FC<ListingPageProps> = ({ listingsData }) => {
  console.log("listingsData", listingsData);
  return (
    <>
      <Head>
        <title>Listings - HomeHaven</title>
        <meta
          name="description"
          content="Discover the perfect home with HomeHaven."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PropertyPage>
        <>
          <Listings listingsData={listingsData} />
        </>
        <>
          <div>RHS</div>
        </>
      </PropertyPage>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const listingsDoc = collection(firestore, "listings");
    const querySnapshot = await getDocs(listingsDoc);
    const listingsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      props: {
        listingsData: JSON.parse(safeJsonStringify(listingsData)),
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error);
  }
}

export default ListingPage;
