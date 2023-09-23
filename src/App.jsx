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
  const Title = useRef(null);
  const Desc = useRef(null);
  const boxRef = useRef(null);
  console.table(data);
  function handelAddNote() {
    setShow(false);
    let newNote = {
      title: Title.current.value,
      desc: Desc.current.value,
    };
    setData([...data, newNote]);
    Title.current.value = "";
    Desc.current.value = "";
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

        <Box
          ref={boxRef}
          rounded="md"
          pos={"absolute"}
          top="calc(100% + 10px)"
          py="5"
          boxShadow="dark-lg"
          w="400px"
          bg={"white"}
          display={show ? "absolute" : "none"}
        >
          <Input
            fontSize={"12px"}
            my="1"
            ref={Title}
            px="4"
            _placeholder={{
              fontSize: "14px",
            }}
            variant={"unstyled"}
            placeholder="Title"
          />
          <Divider my="1" />
          <Input
            fontSize={"12px"}
            my="1"
            ref={Desc}
            _placeholder={{
              fontSize: "14px",
            }}
            px="4"
            variant={"unstyled"}
            placeholder="Description"
          />
          <Divider my="1" />
          <Flex align="center" px="4" my="1" justify={"end"}>
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
        </Box>
      </Center>
      <SimpleGrid maxW="1000px" m={"auto"} mt="5" gap="4" columns={AuthenticatorAttestationResponse}>
        {data.length > 0 &&
          data.map((note, id) => {
            return <Note key={id} note={note} />;
          })}
      </SimpleGrid>
    </>
  );
}

export default App;
