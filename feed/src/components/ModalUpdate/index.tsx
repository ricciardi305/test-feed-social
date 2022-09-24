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
	useToast,
} from '@chakra-ui/react';
import { SyntheticEvent, useState } from 'react';
import { Image } from 'phosphor-react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';

interface UpdateModalProps {
	loadPosts: () => void;
	onClose: () => void;
	id: string;
	name: string;
	postType: string;
	postContent: string;
}

export function ModalUpdate(props: UpdateModalProps) {
	const [hiddenFileUploader, setHiddenFileUploader] = useState(true);
	const [selectedFile, setSelectedFile] = useState<File>();
	const toast = useToast();

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
		postType: yup.string().required('Campo Obrigatório'),
		postContent: yup.string().required('Campo Obrigatório'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const handlePostUpdateForm = (postData: any) => {
		api
			.put(`/posts/${props.id}`, postData)
			.then((res) => {
				props.loadPosts();
				props.onClose();
				toast({
					title: 'Post Criado com Sucesso',
					status: 'success',
					duration: 3000,
					isClosable: true,
					variant: 'left-accent',
					position: 'top-right',
				});
			})
			.catch((err) => {
				console.log(err);
				toast({
					title: 'Ops! Algo deu errado, tente novamente.',
					status: 'error',
					duration: 2000,
					isClosable: true,
					variant: 'left-accent',
					position: 'top-right',
				});
			});
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
					Editar Post
				</ModalHeader>

				<hr />

				<ModalCloseButton />

				<ModalBody fontFamily={'Lato, sans serif'}>
					<form>
						<FormControl mb={4} isInvalid={!!errors.name}>
							<Input
								placeholder='Nome do Autor'
								{...register('name')}
								defaultValue={props.name}
							/>

							{errors.name ? (
								<FormErrorMessage>Email is required.</FormErrorMessage>
							) : null}
						</FormControl>

						<FormControl mb={4} isInvalid={!!errors.postType}>
							<Select
								placeholder='Selecione a categoria'
								color='#76859A'
								{...register('postType')}
								defaultValue={props.postType}>
								<option value='Post'>Post</option>
								<option value='Artigo'>Artigo</option>
								<option value='Grupo'>Grupo</option>
							</Select>
							{errors.postType ? (
								<FormErrorMessage>Type is required</FormErrorMessage>
							) : null}
						</FormControl>

						<FormControl mb={4} isInvalid={!!errors.postContent}>
							<Textarea
								placeholder='Escrever publicação'
								height={'5em'}
								resize={'none'}
								overflow='hidden'
								{...register('postContent')}
								onChange={onChangeTextareaHandler}
								defaultValue={props.postContent}
							/>
							{errors.postContent ? (
								<FormErrorMessage>Content is required</FormErrorMessage>
							) : null}
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
						onClick={handleFileUploader}
						disabled>
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
						onClick={handleSubmit(handlePostUpdateForm)}
						_hover={{ transform: 'scale(0.9)' }}>
						Salvar Mudança
					</Button>
				</ModalFooter>
			</ModalContent>
		</>
	);
}
