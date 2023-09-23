import { useState } from "react";
import "./App.css";
import { GridItem, Input, SimpleGrid, VStack } from "@chakra-ui/react";
import Note from "./components/Note";

function App() {
  return (
    <>
      <VStack>
        <Input maxW="500px" />
      </VStack>
      <SimpleGrid>
        <GridItem>
          <Note />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default App;
