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
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
        isDisabled={spesification ? false : true}
      >
        Spesifikasi
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size={size}>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>Spesifikasi</ModalHeader>
          <ModalCloseButton />

          <ModalBody my={6}>
            {spesification.map((item, key) => (
              <List key={key}>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} color="green.600" />
                  {item}
                </ListItem>
                <Divider my={4} />
              </List>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Tutup</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalItem;
