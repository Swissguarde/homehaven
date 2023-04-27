import useSelectFile from "@/hooks/useSelectFile";
import { Box, Button, Flex, Icon, Progress, Text } from "@chakra-ui/react";
import React, { useState } from "react";
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
}
type CreateListingFormProps = {};
export type Feature = {
  title: string;
};

const CreateListingForm: React.FC<CreateListingFormProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormProps>({
    propertyTitle: "",
    propertyDescription: "",
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
  });
  const { onSelectFile, selectedFile, setSelectedFile, removeSelectedFile } =
    useSelectFile();
  console.log("selectedFile", selectedFile);
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

  const [checkedList, setCheckedList] = useState(
    Array(featuresList.length).fill(false)
  );

  const handleCheckboxChange = (index: number) => {
    const newList = [...checkedList];
    newList[index] = !newList[index];
    setCheckedList(newList);
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
    setCurrentStep(currentStep + 1);
  };

  const CurrentComponent = formList[currentStep].component;
  const isLastComponent = CurrentComponent === FormF;
  const isFirstComponent = CurrentComponent === FormA;
  const progress = ((currentStep + 1) / 6) * 100;

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
        selectedFile={selectedFile}
        onSelectFile={onSelectFile}
        setSelectedFile={setSelectedFile}
        removeSelectedFile={removeSelectedFile}
        featuresList={featuresList}
        handleCheckboxChange={handleCheckboxChange}
        checkedList={checkedList}
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
          <Button variant="outline" height="36px" width="100px">
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
          <Button variant="solid" height="36px" width="120px">
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
