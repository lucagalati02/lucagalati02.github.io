import Header from '@/components/header'
import DefaultLayout from '@/layouts/default'
import React from 'react'
import ContactForm from '@/components/ContactForm'

function Contact() {
  return (
    <DefaultLayout>
			<Header title='Contact' subtitle="Let's start a conversation!"/>
      <div style={{
                backgroundColor: 'rgba(0, 255, 0, 0.0)', 
                border: '0px dashed green', 
                height: '85%', 
                width: '100%', 
                margin: '1rem 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem'
            }} className="flex-col lg:flex-row">
              <ContactForm />
            </div>
		</DefaultLayout>
  )
}

export default Contact