import { Stack, Flex, Heading, Image, Text, Box, Button } from "@chakra-ui/react";
import flowerPattern from "../../assets/design.svg";

const Gifts = () => {
	return (
		<Stack p={6} gap={4}>
			<Flex direction="column" gap={3} align="center" p={8}>
				<Flex direction={"column"} gap={2} pt={4} align={"center"}>
					<Heading as="h2" fontSize={"5xl"} textAlign={"center"}>
						Gifts
					</Heading>
					<Image src={flowerPattern.src} w="200px" />
				</Flex>
				<Text fontSize="lg" textAlign="center" p={4}>
					Hey, you made it to the last section! We've got some side perks for you.
				</Text>
			</Flex>
			<Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center" gap={6}>
				<Flex
					bg={"brand.100"}
					direction={"column"}
					gap={6}
					align={"center"}
					w={{ base: "80%", md: "40%", lg: "400px" }}
					h="350px"
					p={6}
					justify="center"
					borderRadius={"20px"}
				>
					<Flex direction={"column"} align={"center"} gap={1}>
						<Heading as={"h3"}>Airtime</Heading>
						<Box h={"2px"} w="50px" bgColor={"#2d3a4a"} />
					</Flex>
					<Text textAlign="center">Click the button below to get random airtime</Text>
					<Button
						transition="0.2s all ease-in-out"
						border={1}
						borderStyle={"solid"}
						borderColor={"#2d3a4a"}
						borderRadius={"10px"}
						p={4}
						bg="transparent"
						_hover={{
							bg: "#2d3a4a",
							color: "whiteAlpha.900",
						}}
					>
						Random Airtime
					</Button>
				</Flex>
				<Flex
					bg={"brand.100"}
					direction={"column"}
					gap={6}
					align={"center"}
					w={{ base: "80%", md: "40%", lg: "400px" }}
					h="350px"
					p={6}
					justify="center"
					borderRadius={"20px"}
				>
					<Flex direction={"column"} align={"center"} gap={3}>
						<Heading as={"h3"}>eSpray</Heading>
						<Box h={"2px"} w="50px" bgColor={"#2d3a4a"} />
					</Flex>
					<Text textAlign={"center"}>Spray the lovely couple</Text>
					<Button
						transition="0.2s all ease-in-out"
						border={1}
						borderStyle={"solid"}
						borderColor={"#2d3a4a"}
						borderRadius={"10px"}
						bg="transparent"
						p={4}
						_hover={{
							bg: "#2d3a4a",
							color: "whiteAlpha.900",
						}}
					>
						Spray
					</Button>
				</Flex>
			</Flex>
		</Stack>
	);
};

export default Gifts;
