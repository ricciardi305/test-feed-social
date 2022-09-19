import {
	Button,
	FormControl,
	Input,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Textarea,
} from '@chakra-ui/react';
import { SyntheticEvent } from 'react';
import { Image } from 'phosphor-react';

export function ModalPost() {
	const onChangeTextareaHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLElement;
		target.style.height = '30px';
		target.style.height = `${target.scrollHeight}px`;
	};

	return (
		<>
			<ModalOverlay
				backdropFilter='blur(2px)'
				bg={'blackAlpha.500'}
				fontFamily='Lato, sans serif'
			/>
			<ModalContent>
				<ModalHeader
					fontFamily={'Lato, sans serif'}
					borderLeft='4px'
					borderColor={'#6B80BE'}
					roundedTopLeft='md'>
					Criar Post
				</ModalHeader>
				<hr />
				<ModalCloseButton />
				<ModalBody fontFamily={'Lato, sans serif'}>
					<FormControl mb={4}>
						<Input placeholder='Nome do Autor' />
					</FormControl>
					<FormControl mb={4}>
						<Select placeholder='Selecione a categoria' color='#76859A'>
							<option>Post</option>
							<option>Artigo</option>
							<option>Grupo</option>
						</Select>
					</FormControl>
					<FormControl mb={-3}>
						<Textarea
							placeholder='Nome do Autor'
							height={'5em'}
							resize={'none'}
							overflow='hidden'
							onChange={onChangeTextareaHandler}
						/>
					</FormControl>
				</ModalBody>
				<ModalFooter mb={6}>
					<Button
						leftIcon={<Image size={"1.2rem"} weight="fill"/>}
						height={'30px'}
						fontSize='14px'
						rounded={'20px'}
						bgColor='#6B80BE'
						color='#E9ECF5'
						_hover={{ transform: 'scale(0.9)' }}>
						IMAGEM
					</Button>
					<Button
						height={'30px'}
						fontSize='14px'
						rounded={'20px'}
						bgColor='#6B80BE'
						color='#E9ECF5'
						ml={4}
						_hover={{ transform: 'scale(0.9)' }}>
						PUBLICAR
					</Button>
				</ModalFooter>
			</ModalContent>
		</>
	);
}
