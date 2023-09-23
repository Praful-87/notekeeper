import { useState } from "react";
import "./App.css";
import {
  Divider,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  HStack,
  Box,
  Image,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";
import Note from "./components/Note";
import { SearchIcon } from "@chakra-ui/icons";
function App() {
  return (
    <>
      <HStack p="4">
        <Flex align="center">
          <Image src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
          <Text>NoteKeeper</Text>
        </Flex>
        <InputGroup maxW="500px" ml={["20px", "40px", "300px"]}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search for note..." />
        </InputGroup>
      </HStack>
      <Divider />
      <Center pos="relative">
        <Center
          mt="4"
          rounded="md"
          w="400px"
          border="1px"
          borderColor={"gray.300"}
          h="40px"
          fontSize="16px"
        >
          Add Note
        </Center>
        <Box pos={"absolute"} top="calc(100% + 10px)" shadow={"xl"} p="4">
          <Input variant="unstyled" placeholder="Title" />
          <Input variant="unstyled" placeholder="Title" mt="4" />
        </Box>
      </Center>
      <SimpleGrid>
        <GridItem>
          <Note />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default App;
