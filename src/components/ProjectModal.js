import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

// come back for usage later on
export default function ProjectModal({ isOpen, onOpenChange, item }) {
  return (
    <Modal
      isOpen={isOpen}
      placement={"top"}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      size="2xl"
      backdrop={"blur"}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {item.title}
            </ModalHeader>
            <ModalBody>
              <div>
                <h2>Project description</h2>
                <p>{item.longDescription}</p>
                <div>
                  <h2>core technologies</h2>
                  <div>
                    {item.modal.technologies.map((val) => {
                      <>
                        {console.log(val)}
                        <p>{val.name}</p>
                        <p>{val.log}</p>
                      </>;
                    })}
                  </div>
                </div>
                <h2>Demo</h2>
                <div>Demo Video</div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
