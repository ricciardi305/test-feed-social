import {
  Avatar,
  Button,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import autor_avatar from "../../assets/avatar_default.png";
import feedLogo from "../../assets/feed.svg";
import { DotsThreeOutline, Trash, FileText } from "phosphor-react";
import { ModalUpdate } from "../ModalUpdate";
import { useState } from "react";
import { DeleteModal } from "../ModalDelete";

interface PostCardProps {
  name: string;
  createdAt: string;
  postType: string;
  postContent: string;
  postImage: string;
  id: number;
  loadPosts: () => void;
}

export function PostCard(props: PostCardProps) {
  let [isSmallerThan375px, isSmallerThan430px, isSmallerThan768px] =
    useMediaQuery([
      "(max-width: 375px)",
      "(max-width: 425px)",
      "(max-width: 768px)",
    ]);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const newDate = new Date(props.createdAt);

  const formatterDate = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  });

  const formatterTime = Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
  });

  return (
    <>
      <VStack
        w={"full"}
        maxW={"768px"}
        mb={4}
        className="postCard"
        pl="20px"
        pr={"10px"}
        py="8px"
        bgColor="#E8E8E8"
        borderRadius={"8px"}
        boxShadow="lg"
        id={String(props.id)}
      >
        {/* Cabeçalho do post com infos do autor e data de publi */}

        <HStack w="full" mx={4} justify={"space-between"}>
          <HStack>
            <Avatar src={autor_avatar} size="sm" />

            {/* Nome do autor e data de publi */}

            <VStack alignItems={"flex-start"}>
              <Text mb="-8px" fontWeight={"bold"}>
                {props.name}
              </Text>

              <Text fontSize={11} position={"relative"}>
                {`Publicado em ${formatterDate.format(
                  newDate
                )} às ${formatterTime.format(newDate)}`}
              </Text>
            </VStack>
          </HStack>
          {/* DropDown do menu de opções para editar e deletar posts */}
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<DotsThreeOutline />}
              variant="outline"
              h={6}
              _hover={{ transform: "scale(1.1)", borderColor: "#29325D" }}
            />
            <MenuList
              p="1"
              minWidth="150px"
              border="1px"
              borderColor={"#8191C7"}
              boxShadow="lg"
            >
              <MenuItem
                icon={<Trash size={20} weight="light" color="#8191C7" />}
                color="#8191C7"
                border="1px"
                borderColor={"#8191C7"}
                rounded="md"
                mb="4px"
                onClick={onOpen}
              >
                Editar
              </MenuItem>
              <MenuItem
                icon={<FileText size={20} weight="light" color="#8191C7" />}
                color="#8191C7"
                border="1px"
                borderColor={"#8191C7"}
                rounded="md"
                onClick={handleOpenDeleteModal}
              >
                Deletar
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        {/* Corpo do text começando com o tipo de publicação */}
        <HStack
          h={10}
          justify="flex-start"
          w="full"
          position={"relative"}
          top="-10px"
        >
          <Image src={feedLogo} boxSize="4" />

          <Text fontWeight={"bold"}>{props.postType}</Text>
        </HStack>
        {/* Conteúdo da publicação */}
        <Text
          width={"full"}
          textAlign={"left"}
          position={"relative"}
          top="-16px"
          pl={-2}
          color="blackAlpha.900"
        >
          {/* Caso o texto tenha mais de 500 caracteres, será mostrado
							apenas os 500 primeiros caracteres */}
          {show ? props.postContent : props.postContent.substring(0, 500)}
        </Text>
        {/* Botão para mostrar e esconder o texto, só aparece quando o texto tem
					mais de 500 caracteres de comprimento */}
        {props.postContent.length > 500 ? (
          <Button
            onClick={() => setShow(!show)}
            alignSelf="flex-start"
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            pl="0"
            bottom="32px"
          >
            {show ? "Leia Menos" : "Leia Mais..."}
          </Button>
        ) : null}

        {/* Imagem do poste (opcional). todas as imagens estão disponível ao público
					em http://localhost:3000/path-da-imagem.extensão-da-imagem */}
        {props.postImage ? (
          <Image
            src={`http://localhost:3001/${props.postImage}`}
            boxSize="auto"
          />
        ) : null}

        <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
          <ModalUpdate
            loadPosts={props.loadPosts}
            onClose={onClose}
            id={String(props.id)}
            name={props.name}
            postType={props.postType}
            postContent={props.postContent}
          />
        </Modal>
        <Modal isOpen={openDeleteModal} onClose={handleCloseDeleteModal}>
          <DeleteModal
            loadPosts={props.loadPosts}
            handleCloseDeleteModal={handleCloseDeleteModal}
            id={String(props.id)}
          />
        </Modal>
      </VStack>
      <br />
    </>
  );
}
