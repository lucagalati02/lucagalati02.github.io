import DefaultLayout from "@/layouts/default";
import Header from "@/components/header";
import {Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

function Education() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <DefaultLayout>
			<Header title='Education' subtitle=''/>
      <div style={{
                backgroundColor: 'rgba(0, 255, 0, 0.0)', 
                border: '0px dashed green', 
                height: '90%', 
                width: '100%', 
                margin: '1rem 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem'
            }} className="flex-col lg:flex-row">
              <Image isBlurred  src="queens.png" style={{marginRight: '1rem', minWidth: '450px', maxWidth: '450px'}}/>
              <div>
                  <div className="text-center gap-4">
                      <p style={{marginBottom: '1rem'}} className="font-semibold text-2xl">Queen's University</p>
                      <p style={{marginBottom: '1rem'}} className="font-semibold text-2xl">Kingston, Ontario</p>
                      <p style={{marginBottom: '1rem'}} className="font-semibold text-2xl">BS in Computer Science</p>
                      <p style={{marginBottom: '1rem'}} className="font-semibold text-2xl">Expected Graduation: 2025</p>
                  </div>
                  <Button onPress={onOpen} style={{borderRadius: '25px', background: 'linear-gradient(to right, grey, #8cbeb6e7)', width: '100%'}}>Relevant Courses</Button>
                  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1 font-extrabold text-2xl">Relevant Courses</ModalHeader>
                          <ModalBody>
                            <div className="text-lg font-medium text-center">
                              <p>Algorithms</p>
                              <br />
                              <p>UI/UX Design</p>
                              <br />
                              <p>Data Structures</p>
                              <br />
                              <p>Operating Systems</p>
                              <br />
                              <p>Discrete Mathematics</p>
                              <br />
                              <p>Software Architecture</p>
                              <br />
                              <p>Computer Architecture</p>
                              <br />
                              <p>System Level Programming</p>
                              <br />
                              <p>Software Quality Assurance</p>
                              <br />
                              <p>Logic for Computing Science</p>
                              <br />
                              <p>Database Management Systems</p>
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
              </div>
            </div>
		</DefaultLayout>
  )
}

export default Education