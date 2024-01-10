import React from 'react'
import {Image, Card, Input, Textarea, Button} from '@nextui-org/react'

function ContactForm() {
  return (
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
        <Image isBlurred  src="email.svg" style={{marginRight: '1rem', minWidth: '300px', maxWidth: '300px'}}/>
        <Card style={{maxWidth: '50vw', minWidth: '425px'}} >
            <div style={{margin: '1rem'}}>
                <div style={{marginBottom: '0.5rem'}}>
                    <Input type="email" label="Email" />
                </div>
                <div style={{marginBottom: '0.5rem'}}>
                    <Input type="name" label="Name" />
                </div>
                <div>
                    <Textarea type='text' label='Message'></Textarea>
                </div>
                <Button style={{borderRadius: '25px', background: 'linear-gradient(to right, grey, #8cbeb6e7)', width: '100%'}}>Send</Button>
            </div>
        </Card>
    </div>
  )
}

export default ContactForm