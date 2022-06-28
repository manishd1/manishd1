import React from "react";
import logo from "./logo192.png";
import {
  Box,
  ChakraProvider,
  Button,
  VStack,
  Heading,
  theme,
} from "@chakra-ui/react";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";

const App = () => {
  const BuyCrypto = () => {
    new RampInstantSDK({
      hostAppName: "DFSMAFIA",
      hostLogoUrl: logo,
      swapAsset: "BSC_BNB",
      userAddress: "0x163C29CFe94655F93d9E606b8DF709074f4f366f",
    })
      .on("*", (event) => console.log('EeventLog',event))
      .show();
  };

  return (
    <ChakraProvider theme={theme}>
      <Box padding={6} align="center" backgroundColor="" height="100vh">
        <VStack spacing={10}>
          {/* <ColorModeSwitcher align="center" alignContent="right" /> */}
          <Heading
            maxW="100%"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
          >
            Ramp Integration with React Js
          </Heading>
          <Button colorScheme="green" onClick={BuyCrypto}>
            Buy Crypto
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;
