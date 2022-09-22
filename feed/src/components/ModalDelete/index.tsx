import {
	Button,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useToast,
} from '@chakra-ui/react';
import { api } from '../../services/api';

interface IModalDelete {
	loadPosts: () => void;
	handleCloseDeleteModal: () => void;
	id: string;
}

export const DeleteModal = (props: IModalDelete) => {
	const toast = useToast();

	const handleDeletePost = () => {
		api
			.delete(`/posts/${props.id}`)
			.then((res) => {
				props.loadPosts();
				props.handleCloseDeleteModal();
				toast({
					title: 'Post Excluído com sucesso',
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
					bgColor='red.400'
					roundedTop='md'>
					Excluir Publicação
				</ModalHeader>
				<hr />
				<ModalBody>
					<Text>
						Tem certeza que deseja <strong>Excluir</strong> a publicação? Não
						poderá desfazer essa ação depois.
					</Text>
				</ModalBody>
				<ModalFooter justifyContent={'space-between'}>
					<Button onClick={props.handleCloseDeleteModal} bgColor='blue.300'>
						Cancelar
					</Button>
					<Button bgColor='red.400' onClick={handleDeletePost}>
						Excluir
					</Button>
				</ModalFooter>
			</ModalContent>
		</>
	);
};
