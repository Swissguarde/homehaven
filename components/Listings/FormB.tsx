import React, { useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import { MdCancel } from "react-icons/md";

type FormBProps = {
  selectedFile: string[];
  setSelectedFile: (value: string[]) => void;
  removeSelectedFile: (index: number) => void;
  onSelectFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormB: React.FC<FormBProps> = ({
  onSelectFile,
  selectedFile,
  setSelectedFile,
  removeSelectedFile,
}) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Flex
        flexDirection="column"
        bg="white"
        my={10}
        padding="20px"
        rounded="14px"
      >
        <Box>
          <Box pb={4}>
            <Text fontSize={{ lg: "12pt" }}>Media</Text>
          </Box>
          <Divider />

          {selectedFile && (
            <Flex
              alignItems="center"
              justify="center"
              gap={3}
              mt={3}
              flexWrap="wrap"
            >
              {selectedFile.map((file, i) => (
                <Box key={i} position="relative">
                  <Image
                    src={file}
                    boxSize="150px"
                    objectFit="cover"
                    rounded="4px"
                  />
                  <Icon
                    as={MdCancel}
                    position="absolute"
                    top="2"
                    right="2"
                    zIndex={50}
                    color="white"
                    fontSize="18pt"
                    cursor="pointer"
                    onClick={() => removeSelectedFile(i)}
                  />
                </Box>
              ))}
            </Flex>
          )}

          <Box mt={10}>
            <Text>
              Drag and drop the images to customize the image gallery order.
            </Text>

            <Box
              mt={8}
              bg="gray.200"
              border="4px"
              borderColor="gray.400"
              borderStyle="dashed"
              height={{ base: "250px", lg: "350px" }}
              width="100%"
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justify="center"
                height="100%"
                paddingX="20px"
              >
                <Icon fontSize="50pt" as={BiImageAdd} color="gray.500" />
                <Text
                  textAlign="center"
                  fontWeight={700}
                  fontSize={{ base: "9pt", md: "12pt" }}
                  mb={4}
                >
                  Drag and drop the gallery images here
                </Text>
                <Button
                  variant="solid"
                  height="34px"
                  width={{ base: "70px", md: "110px" }}
                  mr={2}
                  padding="5px"
                  onClick={() => selectedFileRef.current?.click()}
                >
                  Upload
                </Button>
              </Flex>
            </Box>
          </Box>

          <input
            type="file"
            hidden
            max="6"
            multiple
            ref={selectedFileRef}
            onChange={onSelectFile}
          />
        </Box>
      </Flex>
    </>
  );
};
export default FormB;
