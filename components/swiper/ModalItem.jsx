import React from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";

const ModalItem = ({ spesification }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button
        variant="outline"
        colorScheme="black"
        onClick={() => handleSizeClick("xl")}
      >
        Spesifikasi
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size={size}>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>Spesifikasi</ModalHeader>
          <ModalCloseButton />

          <ModalBody my={6}>Test</ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Tutup</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalItem;
