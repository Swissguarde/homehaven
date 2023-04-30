import { Box, Checkbox, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Feature } from "./CreateListingForm";

type FormDProps = {
  featuresList: Feature[];
  selectedFeatures: string[];
  handleCheckboxChange: (title: string) => void;
};

const FormD: React.FC<FormDProps> = ({
  handleCheckboxChange,
  featuresList,
  selectedFeatures,
}) => {
  return (
    <Box bg="white" my={10} padding="20px" rounded="14px" boxShadow="md">
      <Box pb={4}>
        <Text fontSize={{ lg: "12pt" }}>Features</Text>
      </Box>
      <Divider />

      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        my={10}
      >
        {featuresList.map((features, i) => (
          <GridItem key={i}>
            <Checkbox
              isChecked={selectedFeatures.includes(features.title)}
              onChange={() => handleCheckboxChange(features.title)}
            >
              {features.title}
            </Checkbox>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
export default FormD;
