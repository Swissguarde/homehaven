import { firestore, storage } from "@/firebase/clientApp";
import useSelectFile from "@/hooks/useSelectFile";
import { Box, Button, Flex, Icon, Progress, Text } from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from "next/router";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdArrowBackIosNew } from "react-icons/md";
import FormA from "./FormA";
import FormB from "./FormB";
import FormC from "./FormC";
import FormD from "./FormD";
import FormE from "./FormE";
import FormF from "./FormF";

interface FormProps {
  propertyTitle: string;
  propertyDescription: string;
  price: string;
  propertyType: string;
  propertyStatus: string;
  propertyLabel: string;
  bedrooms: string;
  bathrooms: string;
  areaSize: string;
  postFix: string;
  landArea: string;
  areaPostFix: string;
  garages: string;
  garageSize: string;
  yearBuilt: string;
  address: string;
  country: string;
  stateOrCounty: string;
  city: string;
  area: string;
  zipOrPostal: string;
  latitude: string;
  longitude: string;
}
type CreateListingFormProps = {
  user: User;
};
export type Feature = {
  title: string;
};

const CreateListingForm: React.FC<CreateListingFormProps> = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormProps>({
    propertyTitle: "",
    propertyDescription: "",
    price: "",
    propertyType: "",
    propertyStatus: "",
    propertyLabel: "",
    bedrooms: "",
    bathrooms: "",
    areaSize: "",
    postFix: "sqft",
    landArea: "",
    areaPostFix: "sqft",
    garages: "",
    garageSize: "",
    yearBuilt: "",
    address: "",
    country: "",
    stateOrCounty: "",
    city: "",
    area: "",
    zipOrPostal: "",
    latitude: "",
    longitude: "",
  });
  const {
    propertyDescription,
    propertyLabel,
    propertyTitle,
    price,
    propertyStatus,
    address,
    area,
    areaPostFix,
    areaSize,
    bathrooms,
    bedrooms,
    city,
    country,
    garageSize,
    garages,
    landArea,
    latitude,
    longitude,
    postFix,
    propertyType,
    stateOrCounty,
    yearBuilt,
    zipOrPostal,
  } = formData;
  const router = useRouter();

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const {
    onSelectFiles,
    selectedFiles,
    removeSelectedFiles,
    setSelectedFiles,
  } = useSelectFile();

  const featuresList: Feature[] = [
    { title: "Air Conditioning" },
    { title: "Laundry" },
    { title: "Wifi" },
    { title: "Refridgerator" },
    { title: "Washer" },
    { title: "Lawn" },
    { title: "Dryer" },
    { title: "Microwave" },
    { title: "Swimming Pool" },
    { title: "TV Cable" },
    { title: "Sauna" },
  ];

  const handleCheckboxChange = (title: string) => {
    if (selectedFeatures.includes(title)) {
      setSelectedFeatures((prevSelectedFeatures) =>
        prevSelectedFeatures.filter((feature) => feature !== title)
      );
    } else {
      setSelectedFeatures((prevSelectedFeatures) => [
        ...prevSelectedFeatures,
        title,
      ]);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {
      target: { name, value },
    } = e;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formList = [
    { id: 1, component: FormA },
    { id: 2, component: FormB },
    { id: 3, component: FormC },
    { id: 4, component: FormD },
    { id: 5, component: FormE },
    { id: 6, component: FormF },
  ];

  const handleNextStep = () => {
    if (disabled) {
      toast.error("Please fill in all fields", {
        position: "bottom-center",
      });
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const CurrentComponent = formList[currentStep].component;
  const isLastComponent = CurrentComponent === FormF;
  const isFirstComponent = CurrentComponent === FormA;
  const progress = ((currentStep + 1) / 5) * 100;

  const disabled = false;

  const handleSubmit = async () => {
    const newListingForm = {
      ...formData,
      features: selectedFeatures,
      creatorId: user.uid,
      creatorDisplayName: user.email!.split("@")[0],
      createdAt: serverTimestamp(),
    };
    setLoading(true);
    try {
      const listingDocRef = await addDoc(
        collection(firestore, "listings"),
        newListingForm
      );
      if (selectedFiles && selectedFiles.length > 0) {
        const imageUrls: string[] = [];
        for (let i = 0; i < selectedFiles.length; i++) {
          const imageRef = ref(
            storage,
            `/listings/${listingDocRef.id}/image${i}`
          );
          await uploadString(imageRef, selectedFiles[i], "data_url");
          const downloadURL = await getDownloadURL(imageRef);
          imageUrls.push(downloadURL);
        }
        await updateDoc(listingDocRef, {
          imageURLs: imageUrls,
        });
      }
    } catch (error: any) {
      console.log("handleSubmitError", error.message);
    }
    setLoading(false);
  };

  return (
    <Box
      mt={{ base: 24, md: 32 }}
      paddingX={{ base: "20px", md: "50px" }}
      pb="100px"
    >
      <Flex justify="center" mb={4}>
        <Progress color="#004274" size="sm" value={progress} width="100%" />
      </Flex>
      <Flex
        align="center"
        justify="space-between"
        bg="white"
        padding="20px"
        rounded="14px"
      >
        <Text fontSize={{ lg: "14pt" }} fontWeight={600}>
          Create A Listing
        </Text>
        <Button variant="outline" height="36px">
          Save as Draft
        </Button>
      </Flex>

      <CurrentComponent
        handleChange={handleChange}
        formData={formData}
        selectedFiles={selectedFiles}
        onSelectFiles={onSelectFiles}
        setSelectedFiles={setSelectedFiles}
        removeSelectedFiles={removeSelectedFiles}
        selectedFeatures={selectedFeatures}
        featuresList={featuresList}
        handleCheckboxChange={handleCheckboxChange}
      />

      <Flex
        position="fixed"
        align="center"
        justify="space-between"
        bottom="0"
        left="0"
        paddingX={{ base: "20px", md: "50px" }}
        paddingY={5}
        width="100%"
        bg="gray.100"
        height="fit-content"
        borderTop="1px"
        borderTopColor="blue.100"
        zIndex={1}
      >
        {isFirstComponent ? (
          <Button
            onClick={() => router.back()}
            variant="outline"
            height="36px"
            width="100px"
          >
            Cancel
          </Button>
        ) : (
          <>
            <Button
              onClick={() => setCurrentStep(currentStep - 1)}
              variant="outline"
              height="36px"
              width="100px"
            >
              <Flex align="center" justifyContent="space-between" width="100%">
                <Icon as={MdArrowBackIosNew} />
                Back
              </Flex>
            </Button>
          </>
        )}
        {isLastComponent ? (
          <Button
            variant="solid"
            height="36px"
            width="120px"
            isLoading={loading}
            isDisabled={disabled}
            onClick={handleSubmit}
          >
            Submit Property
          </Button>
        ) : (
          <Button
            variant="solid"
            height="36px"
            width="100px"
            onClick={handleNextStep}
          >
            Next
          </Button>
        )}
      </Flex>
    </Box>
  );
};
export default CreateListingForm;
