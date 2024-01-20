"use client";
import { Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import FormModal from './component/formModal';

const Wow = () => {
  return (
    <Center minH="100vh" color="black" bgColor="green.400" w="100vw" p={8}>
			<VStack maxW="768px">
				<Heading >Wow</Heading>
				<Text>We've prepared some goodies for you. <br/> Select one of the options below and have funfilled stay</Text>
				<Card variant="filled">
					<CardHeader>
						<Heading size='md'>Random Airtime Voucher</Heading>
					</CardHeader>
					<CardBody>
						<Text>The voucher is dispersed randomly as airtime to your provided phone number</Text>
					</CardBody>
					<CardFooter>
						<Button variant="solid" ml="auto">Open</Button>
					</CardFooter>
				</Card>
				<FormModal />
			</VStack>
    </Center>
  )
}

export default Wow