import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Feature } from "./CreateListingForm";

type FormDProps = {
  featuresList: Feature[];
  handleCheckboxChange: (index: number) => void;
  checkedList: string[];
};

const FormD: React.FC<FormDProps> = ({
  featuresList,
  checkedList,
  handleCheckboxChange,
}) => {
  // const featuresList = [
  //   { title: "Air Conditioning" },
  //   { title: "Laundry" },
  //   { title: "Wifi" },
  //   { title: "Refridgerator" },
  //   { title: "Washer" },
  //   { title: "Lawn" },
  //   { title: "Dryer" },
  //   { title: "Microwave" },
  //   { title: "Swimming Pool" },
  //   { title: "TV Cable" },
  //   { title: "Sauna" },
  // ];
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
              isChecked={Boolean(checkedList[i])}
              onChange={() => handleCheckboxChange(i)}
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
