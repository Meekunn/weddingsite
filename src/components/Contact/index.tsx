import { Stack, Flex, Heading, Text, Image, Icon, Link, Box } from "@chakra-ui/react";
import flowerPattern from "../../assets/design.svg";
import { HiPhone } from "react-icons/hi";

const Contact = () => {
	return (
		<Stack id="contact" p={6} pb={12}>
			<Flex direction="column" gap={3} align="center" p={8}>
				<Flex direction={"column"} gap={2} pt={4} align={"center"}>
					<Heading as="h2" fontSize={"5xl"} textAlign={"center"}>
						For More Information
					</Heading>
					<Image src={flowerPattern.src} w="200px" />
				</Flex>
				<Text fontSize="lg" textAlign="center" p={4}>
					Having loving family and friends in our lives is the best gift of all. To make reservations or get more information,
					please contact Event Coordinator:
				</Text>
			</Flex>
			<Flex gap={6} flexWrap="wrap" justify="center">
				<Link
					href="tel:09060547815"
					display="flex"
					flexDirection={"row"}
					textDecoration={"none !important"}
					alignItems="center"
					gap={4}
				>
					<Box p={3} bg={"brand.100"} borderRadius={"50%"} display="flex" alignItems="center">
						<Icon as={HiPhone} w={6} h={6} color="#2d3a4a" />
					</Box>
					<Text>
						<span style={{ fontWeight: "700" }}>Femi Charles:</span> +234 906 054 7815
					</Text>
				</Link>
			</Flex>
		</Stack>
	);
};

export default Contact;
