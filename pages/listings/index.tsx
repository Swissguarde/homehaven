import React from "react";
import { Listing } from "@/atoms/listingsAtom";
import RHS from "@/components/Featured/RHS";
import Listings from "@/components/Listings/Listings";
import Seo from "@/components/Seo/Seo";
import { firestore } from "@/firebase/clientApp";
import PropertyPage from "@/Layout/PropertyPage";
import { collection, getDocs } from "firebase/firestore";
import safeJsonStringify from "safe-json-stringify";

type ListingPageProps = {
  listingsData: Listing[];
};

const ListingPage: React.FC<ListingPageProps> = ({ listingsData }) => {
  return (
    <>
      <Seo
        title="Listings"
        description="Find your haven with HomeHaven - your one-stop real estate solution."
      />

      <PropertyPage>
        <>
          <Listings listingsData={listingsData} />
        </>
        <>
          <>
            <RHS />
          </>
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
