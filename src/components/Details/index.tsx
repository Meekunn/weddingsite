import { Stack, Flex, Heading, Image, Icon, Box, Text, Button } from "@chakra-ui/react";
import flowerPattern from "../../assets/design.svg";
import { BsCalendarHeart } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import AddToCalendar from "react-add-to-calendar";

const Details = () => {
	return (
		<Stack id="dates" bg={"brand.100"} p={6} gap={6}>
			<Flex direction="column" gap={3} align="center" p={8}>
				<Flex direction={"column"} gap={2} pt={4} align={"center"}>
					<Heading as="h2" fontSize={"5xl"} textAlign={"center"}>
						Save The Date
					</Heading>
					<Image src={flowerPattern.src} w="200px" />
				</Flex>
			</Flex>
			<Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center" gap={6}>
				<Flex
					bg={"whiteAlpha.900"}
					direction={"column"}
					gap={6}
					align={"center"}
					w={{ base: "80%", md: "40%", lg: "400px" }}
					h="350px"
					p={6}
					justify="center"
					borderRadius={"20px"}
				>
					<Icon
						as={BsCalendarHeart}
						color={"#D7C69D"}
						w={8}
						h={8} //color="#D7C69D"
					/>
					<Flex direction={"column"} align={"center"} gap={3}>
						<Heading as={"h3"}>When</Heading>
						<Box h={"2px"} w="50px" bgColor={"brand.100"} />
					</Flex>
					<Text>July 1, 2023</Text>
					<Text>SATURDAY</Text>
				</Flex>
				<Flex
					bg={"whiteAlpha.900"}
					direction={"column"}
					gap={6}
					align={"center"}
					w={{ base: "80%", md: "40%", lg: "400px" }}
					h="350px"
					p={6}
					justify="center"
					borderRadius={"20px"}
				>
					<Icon as={MdLocationOn} color={"#D7C69D"} w={8} h={8} />
					<Flex direction={"column"} align={"center"} gap={3}>
						<Heading as={"h3"}>Where</Heading>
						<Box h={"2px"} w="50px" bgColor={"brand.100"} />
					</Flex>
					<Text>Hall of Wedding</Text>
					<Text textAlign={"center"}>Amazing Place, Oda Road, Akure</Text>
				</Flex>
			</Flex>
		</Stack>
	);
};

export default Details;
