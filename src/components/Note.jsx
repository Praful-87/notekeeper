import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import React, { memo } from "react";

const Note = () => {
  return (
    <Box
      maxW="250px"
      maxH="150px"
      border="1px"
      borderColor={"gray.300"}
      rounded="md"
      py="2"
    >
      <Heading mt="4" mx="2" size="sm">
        note.title
      </Heading>
      <Divider my="4" />
      <Text mx="2"> note.desc</Text>
    </Box>
  );
};

export default memo(Note);
