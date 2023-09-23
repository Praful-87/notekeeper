import { useEffect, useRef, useState } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import Note from "./components/Note";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
function App() {
  const [show, setShow] = useState(true);
  const boxRef = useRef(null);

  function handelClickOutside(e) {
    if (!boxRef.current.contains(e.target)) console.log("click outside");
    else console.log("cliked inside");
  }
  useEffect(() => {
    return () => {
      document.removeEventListener("click", handelClickOutside);
    };
  }, []);
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
      <Center pos="relative" ref={boxRef} onClick={handelClickOutside}>
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

        {/* showable box */}

        <Flex
          direction={"column"}
          gap="2"
          rounded="md"
          pos={"absolute"}
          top="calc(100% + 10px)"
          p="4"
          boxShadow="dark-lg"
          w="400px"
          bg={"white"}
          display={show ? "absolute" : "none"}
        >
          <Input variant="unstyled" placeholder="Title" />
          <Divider />
          <Input variant="unstyled" placeholder="Description" />
          <Divider />
          <Flex justify={"end"}>
            <IconButton
              size="sm"
              variant="outline"
              colorScheme="black"
              aria-label="Send email"
              icon={<AddIcon />}
              rounded="3px"
            />
          </Flex>
        </Flex>
      </Center>
      <SimpleGrid border="1px" maxW="1200px" m={"auto"} mt="5">
        <GridItem>
          <Note />
        </GridItem>
      </SimpleGrid>
    </>
  );
}

export default App;
