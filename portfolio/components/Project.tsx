import React from 'react';
import {Card, CardFooter, Image, Button, Link} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

interface HeaderProps {
  project_name: string;
  image_path: string;
  description: string;
  technologies: string[];
  github_link: string;
}

function Project({ project_name, image_path, description, technologies, github_link }: HeaderProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div>
        <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
      style={{ width: "500px", height: "315px" }}
    >
      <button onClick={onOpen}>
        <Image
            alt="Woman listing to music"
            className="object-cover"
            height={200}
            src={image_path}
            isZoomed
        />
      </button>
      
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{project_name}</p>
        <Button isIconOnly className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            <Link href={github_link} target='_blank'>
                <img src="github_w.svg" width='40rem' />
            </Link>
        </Button>
      </CardFooter>
    </Card>

    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{project_name}</ModalHeader>
              <ModalBody>
              <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src={image_path}
                />
                <p> 
                  {description}
                </p>
              </ModalBody>
              <ModalFooter>
                <p>TECH: </p>
                {technologies.map((item, index) => (
                    <p key={index}>{item};</p>))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
    
    
  );
}

export default Project;