import { Stack, Flex, Heading, Image, Icon, Box, Text } from "@chakra-ui/react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import flowerPattern from "../../assets/design.svg";
import flower3 from "../../assets/flower3.png";
import "./order_of_program.scss";
import programmes from "./programmes";

const OrderOfProgram = () => {
    return (
        <Stack p={8} position="relative" id="program">
            <Stack zIndex={10}>
                <Flex direction="column" gap={3} align="center" p={8}>
                    <Box bg="#ffffff" borderRadius={"50%"} w="55px" h="55px" display="flex" justifyContent={"center"} alignItems={"center"}>
                        <Icon as={BsBookmarkHeartFill} w={8} h={8} color={"brand.300"} />
                    </Box>
                    <Flex direction={"column"} gap={2} pt={4} align={"center"}>
                        <Heading as="h2" fontSize={"5xl"} textAlign={"center"}>
                            Order of Programme
                        </Heading>
                        <Image src={flowerPattern.src} w="200px" />
                    </Flex>
                </Flex>
                <Flex direction="column" gap={4}>
                    {programmes.map((programme, index) => (
                        <Flex
                            key={index}
                            className="program_list"
                            position="relative"
                            borderLeft={1}
                            borderLeftColor={"brand.100"}
                            borderLeftStyle={"solid"}
                            direction={"column"}
                            gap={3}
                            px={8}
                            py={2}
                        >
                            <Text fontSize={"lg"}>{programme}</Text>
                        </Flex>
                    ))}
                </Flex>
            </Stack>
            <Image src={flower3.src} position={"absolute"} right={0} top="40%" />
            <Stack gap={12} borderTop={1} borderStyle={"solid"} borderTopColor={"#F8EEE0"} alignItems={"center"} zIndex={10}>
                <Flex direction={"column"} gap={2} pt={4} align={"center"}>
                    <Heading as="h2" fontSize={"5xl"} textAlign={"center"}>
                        Special Thanks
                    </Heading>
                    <Image src={flowerPattern.src} w="200px" />
                </Flex>
                <Flex direction="column" px={4} w={"80%"} align="center" gap="0.825rem" textAlign={"center"}>
                    <Text fontSize={"lg"}>TO OUR FAMILY AND FRIENDS</Text>
                    <Text fontSize={"lg"}>IT MEANS THE WORLD TO HAVE YOU HERE</Text>
                    <Heading fontSize={"5xl"} fontWeight={"500"}>
                        THANK YOU
                    </Heading>
                    <Text fontSize={"lg"}>FOR THE SUPPORT, ENCOURAGEMENT, AND</Text>
                    <Heading fontSize={"4xl"}>LOVE & LAUGHTER</Heading>
                    <Text fontSize={"lg"}>YOU HAVE CONTRIBUTED TO OUR LIVES</Text>
                    <Text>YOU ARE OUR TEACHERS, PARTNERS IN CRIME, GUIDES</Text>
                    <Text fontFamily="love_light" fontSize={{ base: "4xl", md: "6xl" }}>
                        and favorite people in the world
                    </Text>
                    <Text textAlign={"center"} fontSize={"lg"}>
                        WE HOPE THAT YOU ENJOY TODAY'S CELEBRATION AND THOSE WE'LL SHARE FOR YEARS TO COME.
                    </Text>
                </Flex>
            </Stack>
        </Stack>
    );
};

export default OrderOfProgram;
