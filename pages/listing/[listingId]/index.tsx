import React from "react";
import { firestore } from "@/firebase/clientApp";
import { Box } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import safeJsonStringify from "safe-json-stringify";
import { Listing } from "@/atoms/listingsAtom";
import Seo from "@/components/Seo/Seo";
import PropertyPage from "@/Layout/PropertyPage";
import SingleListing from "@/components/Listings/SingleListing";
import Request from "@/components/Listings/Request";

type ListingPageProps = {
  listingData: Listing;
};

const ListingPage: React.FC<ListingPageProps> = ({ listingData }) => {
  return (
    <>
      <Seo
        title={listingData.propertyTitle}
        description="Let HomeHaven help you find the key to your new home."
      />

      <PropertyPage>
        <>
          <SingleListing listingData={listingData} />
        </>
        <>
          <>
            <Request />
          </>
        </>
      </PropertyPage>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const listingDocRef = doc(
      firestore,
      "listings",
      context.query.listingId as string
    );
    const listingDoc = await getDoc(listingDocRef);
    return {
      props: {
        listingData: listingDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: listingDoc.id, ...listingDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getListingDetails error", error);
  }
}
export default ListingPage;
