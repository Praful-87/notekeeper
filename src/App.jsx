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
} from "@chakra-ui/react";
import Note from "./components/Note";
import { SearchIcon } from "@chakra-ui/icons";
function App() {
  return (
    <>
      <HStack p="4">
        <Box>
          <Image src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" />
        </Box>
        <InputGroup maxW="500px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search for note..." />
        </InputGroup>
      </HStack>
      <Divider />
      <SimpleGrid>
        <GridItem>
          <Note />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default App;
