import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/profile-pic (1).png";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About US</Text>
          <Text
            fontSize={"sm"}
            textAlign={["center", "left"]}
            letterSpacing={"widest"}
            lineHeight={"6"}
          >
            we are the best crypto site in india, we provide
            <br /> latest information about all crypto currency.
          </Text>
        </VStack>
        <VStack>
          <Avatar
            boxSize={"28"}
            mt={["4", "0"]}
            name="Maaviz Gorekar"
            src={bg}
          />
          <Text textTransform={"capitalize"} fontFamily={"Bebas Neue"}>
            The founder
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
