import {
	Button,
	FormControl,
	FormErrorMessage,
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
import { SyntheticEvent, useState } from 'react';
import { Image } from 'phosphor-react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// interface IPostData {
// 	name: string;
// 	post_type: string;
// 	post_content: string;
// 	post_image: FileList;
// }

export function ModalPost() {
	const [hiddenFileUploader, setHiddenFileUploader] = useState(true);
	const [selectedFile, setSelectedFile] = useState<File>();

	// Função para esconder o input file
	const handleFileUploader = () => {
		setHiddenFileUploader(!hiddenFileUploader);
	};

	// Aumenta a área do input conforme a quantidade de linhas escritas
	const onChangeTextareaHandler = (e: SyntheticEvent) => {
		const target = e.target as HTMLElement;
		target.style.height = '30px';
		target.style.height = `${target.scrollHeight}px`;
	};

	// esquema do yup
	const schema = yup.object().shape({
		name: yup.string().required('Campo Obrigatório'),
		post_type: yup.string().required('Campo Obrigatório'),
		post_content: yup.string().required('Campo Obrigatório'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const handlePostCreatioForm = (postData: any) => {
		console.log(postData);
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

					<form>

						<FormControl mb={4} isInvalid={!!errors.name}>

							<Input placeholder='Nome do Autor' {...register('name')} />

							{errors.name ? (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							) : null}

						</FormControl>
						
						
						<FormControl mb={4} isInvalid={!!errors.post_type}>
							<Select
								placeholder='Selecione a categoria'
								color='#76859A'
								{...register('post_type')}>
								<option value='Post'>Post</option>
								<option value='Artigo'>Artigo</option>
								<option value='Grupo'>Grupo</option>
							</Select>
							{errors.post_type ? (
								<FormErrorMessage>Type is required</FormErrorMessage>
							) : null}
						</FormControl>
						
						<FormControl mb={4} isInvalid={!!errors.post_content}>
							<Textarea
								placeholder='Escrever publicação'
								height={'5em'}
								resize={'none'}
								overflow='hidden'
								{...register('post_content')}
								onChange={onChangeTextareaHandler}
							/>
							{errors.post_content ? (
								<FormErrorMessage>Content is required</FormErrorMessage>
							) : null}
						</FormControl>
						
						<FormControl>
							<Input
								{...register('post_image')}
								type={'file'}
								width='full'
								pt='4px'
								hidden={hiddenFileUploader}
								onChange={(e) => setSelectedFile(e.target.files[0])}
							/>
						</FormControl>
					</form>
				</ModalBody>
				
				<ModalFooter mb={6} justifyContent='space-around'>
					
					<Button
						leftIcon={<Image size={'1.2rem'} weight='fill' />}
						height={'30px'}
						fontSize='14px'
						rounded={'20px'}
						bgColor='#6B80BE'
						color='#E9ECF5'
						_hover={{ transform: 'scale(0.9)' }}
						onClick={handleFileUploader}>
						IMAGEM
					</Button>
					
					<Button
						type='submit'
						height={'30px'}
						fontSize='14px'
						rounded={'20px'}
						bgColor='#6B80BE'
						color='#E9ECF5'
						ml={4}
						onClick={handleSubmit(handlePostCreatioForm)}
						_hover={{ transform: 'scale(0.9)' }}>
						PUBLICAR
					</Button>
				</ModalFooter>
			</ModalContent>
		</>
	);
}
