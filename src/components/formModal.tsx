"use client";
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, FormControl, FormLabel, Input, Stack, FormHelperText, FormErrorMessage } from "@chakra-ui/react"
import { zodResolver } from '@hookform/resolvers/zod';
import { Goodies } from "@prisma/client";
import { useForm } from 'react-hook-form';
import { z } from 'zod'

const airtimeFormSchema = z.object({
	name: z.string().min(3, 'Name must contain at least 3 characters').max(30, 'Name must contain at most 30 characters').regex(/^[a-zA-Z]+$/, { message: 'Name must be letters only' }),
	phone: z.string().min(10, 'Phone number must contain at least 10 characters').max(11, 'Phone number must contain at most 11 characters').regex(/^[0-9]+$/, { message: 'Phone number must be numbers only' })
}).required()

interface IFormModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedGoodie: Goodies;
}

const removePhoneLeadingZero = (phone: string) => {
	if (phone.startsWith('0')) {
		return phone.substring(1)
	}
	return phone
}

type AirtimeForm = z.infer<typeof airtimeFormSchema>

const FormModal = ({ isOpen, onClose, selectedGoodie }: IFormModalProps) => {
	
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AirtimeForm>({
    resolver: zodResolver(airtimeFormSchema)
  });

  const onSubmit = async (data: AirtimeForm) => {
	const response = await fetch(`/api/goodies/${selectedGoodie.id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			...data,
			phoneNumber: `+234${removePhoneLeadingZero(data.phone)}`
		})
	}).then(res => res.json()).catch(err => console.log(err))
	console.log({response, data})
  }

	return (
		<Drawer placement="bottom" onClose={onClose} isOpen={isOpen} >
			<DrawerOverlay />
			<DrawerContent  h="60vh" borderRadius="10px 10px 0 0">
				<DrawerHeader borderBottomWidth='1px'>Receiving Phone Number</DrawerHeader>
				<DrawerBody>
				<Stack spacing="24px" as="form" h="100%" pb={8} onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={!!errors.name?.message} >
						<FormLabel>Name</FormLabel>
						<Input min={3} max={30} {...register('name')} />
						<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={!!errors.phone?.message} >
						<FormLabel>Phone</FormLabel>
						<Input min={10} max={11} placeholder="07031234567" {...register('phone')} />
						<FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
						<FormHelperText color="grey" fontSize="xs">Be sure this is the correct phone number you want the airtime to be sent to.</FormHelperText>
					</FormControl>
					<Button mt="auto !important" type="submit" colorScheme="green">Submit</Button>
				</Stack>
				</DrawerBody>
			</DrawerContent>
		</Drawer> 
	)
}

export default FormModal