"use client";
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, FormControl, FormLabel, Input, Stack, FormHelperText } from "@chakra-ui/react"
// import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface IFormFields {
	name: string;
	phone: string;
}

interface IFormModalProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const FormModal = ({ isOpen, onClose, onOpen }: IFormModalProps) => {
	
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormFields>({
    // resolver: yupResolver(emailCheckerShema)
  });

	return (
		<>
			<Button onClick={onOpen}>
				Open Modal
			</Button>
			<Drawer placement="bottom" onClose={onClose} isOpen={isOpen} >
				<DrawerOverlay />
				<DrawerContent  h="60vh" borderRadius="10px 10px 0 0">
					<DrawerHeader borderBottomWidth='1px'>Receiving Phone Number</DrawerHeader>
					<DrawerBody>
					<Stack spacing="24px" as="form" h="100%" pb={8}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input min={3} max={30} {...register('name')} />
						</FormControl>
						<FormControl>
							<FormLabel>Phone</FormLabel>
							<Input min={10} max={11} placeholder="07031234567" {...register('phone')} />
							<FormHelperText color="grey" fontSize="xs">Be sure this is the correct phone number you want the airtime to be sent to.</FormHelperText>
						</FormControl>
						<Button mt="auto !important" type="submit" colorScheme="green">Submit</Button>
					</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default FormModal