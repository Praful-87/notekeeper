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
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const boxRef = useRef(null);
  console.log(show);
  function handelAddNote() {
    setShow(false);
  }
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
          onClick={() => setShow(true)}
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

        {/*  modal */}

        <Flex
          ref={boxRef}
          direction={"column"}
          rounded="md"
          pos={"absolute"}
          top="calc(100% + 10px)"
          py="5"
          boxShadow="dark-lg"
          w="400px"
          bg={"white"}
          gap="2"
          display={show ? "absolute" : "none"}
        >
          <Input
            px="4"
            _placeholder={{
              fontSize: "14px",
            }}
            variant={"unstyled"}
            placeholder="Title"
          />
          <Divider />
          <Input
            _placeholder={{
              fontSize: "14px",
            }}
            px="4"
            variant={"unstyled"}
            placeholder="Description"
          />
          <Divider />
          <Flex align="center" px="4" justify={"end"}>
            <IconButton
              onClick={handelAddNote}
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
