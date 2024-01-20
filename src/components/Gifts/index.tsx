"use client"
import { Stack, Flex, Heading, Image, Text, Box, Button, useDisclosure } from "@chakra-ui/react";
import flowerPattern from "../../assets/design.svg";
import FormModal from "@components/formModal";
import { Goodies } from "@prisma/client";
import { useEffect, useState } from "react";

const Gifts = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [goodies, setGoodies] = useState<Goodies[]>([]);
	const [selectedGoodie, setSelectedGoodie] = useState<Goodies | null>(null);

	useEffect(() => {
		const getGoodies = async () => {
			const goodiesPackets: {data: Goodies[]} = await fetch("/api/goodies").then((res) => res.json());
			console.log({ goodiesPackets, 'goodiesPackets.data': goodiesPackets.data });
			setGoodies([...goodiesPackets.data]);
		};
		getGoodies();
	}, [])
	
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
				{
					goodies.map((goodie) => (
						<Flex
							key={goodie.id}
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
								<Heading as={"h3"}>Airtime for {goodie.quantity}</Heading>
								<Box h={"2px"} w="50px" bgColor={"#2d3a4a"} />
							</Flex>
							<Text textAlign="center"> Random Aitime for {goodie.quantity} people </Text>
							<br />
							<Text textAlign="center">Click the button below to get yours</Text>
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
								onClick={() => {
									setSelectedGoodie(goodie);
									onOpen()
								}}
							>
								Random Airtime
							</Button>
						</Flex>
					))
				}
			</Flex>
			{
				selectedGoodie && (
					<FormModal {...{ isOpen, onClose, selectedGoodie }} />
				)
			}
		</Stack>
	);
};

export default Gifts;
