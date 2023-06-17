import { Stack, Flex, Heading, Image, Icon, Box, Text } from "@chakra-ui/react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import flowerPattern from "../../assets/design.svg";
import flower3 from "../../assets/flower3.png";
import "./order_of_program.scss";

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
				<Flex direction="column">
					<Flex
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
						<Text fontSize={"lg"} fontStyle={"italic"}>
							8: 30am
						</Text>
						<Text fontSize={"lg"}>Prayer</Text>
					</Flex>
					<Flex
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
						<Text fontSize={"lg"} fontStyle={"italic"}>
							8: 30am
						</Text>
						<Text fontSize={"lg"}>Something something something</Text>
					</Flex>
					<Flex
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
						<Text fontSize={"lg"} fontStyle={"italic"}>
							8: 30am
						</Text>
						<Text fontSize={"lg"}>Prayer</Text>
					</Flex>
					<Flex
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
						<Text fontSize={"lg"} fontStyle={"italic"}>
							8: 30am
						</Text>
						<Text fontSize={"lg"}>Prayer</Text>
					</Flex>
					<Flex
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
						<Text fontSize={"lg"} fontStyle={"italic"}>
							8: 30am
						</Text>
						<Text fontSize={"lg"}>Prayer</Text>
					</Flex>
					<Flex
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
						<Text fontSize={"lg"} fontStyle={"italic"}>
							8: 30am
						</Text>
						<Text fontSize={"lg"}>Prayer</Text>
					</Flex>
					<Flex
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
						<Text fontSize={"lg"} fontStyle={"italic"}>
							8: 30am
						</Text>
						<Text fontSize={"lg"}>Prayer</Text>
					</Flex>
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
				<Flex direction="column" px={4} w={"80%"}>
					<Text fontSize={"lg"} textAlign={"center"} px={6}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus amet sapiente. Laudantium eveniet aut pariatur
						quas autem maxime tempore odio, quam omnis possimus, aperiam neque accusantium hic expedita ullam.
					</Text>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default OrderOfProgram;
