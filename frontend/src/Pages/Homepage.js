import {
  Text,
  Box,
  Flex,
  TabList,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <>
     

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>      
      <Flex flex={1} position="relative">
      {/* Image */}
      <Image
        alt={'Login Image'}
        objectFit={'cover'}
        src={
            'https://cdn.dribbble.com/users/1003944/screenshots/15741863/06_comp_1_4x.gif?resize=450x338&vertical=center'
        }
      />

      {/* Text Overlay */}
      {/* <Flex
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="grey"
        fontSize="40px"
        fontWeight="bold"
        textAlign="center"
        
      >
        Start making your dreams come true
      </Flex> */}
    </Flex>

      <Flex p={1} flex={1} align={'center'} justify={'center'} color="grey">
         <Stack
         spacing={9} w={'full'} maxW={'md'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 1 }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Log in to your account
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
             Join our vibrant community and experience the joy of connecting with others in a positive
             and inclusive environment.
             Let's start chatting!
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
            <Box bg="white" w="110%" p={2} borderRadius="lg" borderWidth="2.5px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
            </Stack>
          </Box>
          form
        </Stack>
      </Flex>
    </Stack>
  </>
  );
}
export default Homepage;