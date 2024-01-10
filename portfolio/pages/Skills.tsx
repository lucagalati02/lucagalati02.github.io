import Header from '@/components/header'
import DefaultLayout from '@/layouts/default'
import React from 'react'
import SkillsPanel from '@/components/skillsPanel'
import { Tooltip, Button } from '@nextui-org/react'

function Skills() {
  return (
    <DefaultLayout>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Header title='Skills' subtitle=''/>
        <div style={{marginRight:'0.5rem', marginLeft: '0.5rem'}}></div>
        <Tooltip placement='bottom' content="Java, Python, C, HTML, CSS, Javascript, Typescript, MATLAB, SQL, Shell Scripts, Latex, Git, Microsoft Azure, Flask, React.JS, Node.JS, Express.JS, Next.JS, Power BI, Figma">
          <Button isIconOnly>☰</Button>
        </Tooltip>
      </div>
      <div style={{
                backgroundColor: 'rgba(0, 255, 0, 0.0)', 
                border: '0px dashed green', 
                height: '80%',
                width: '100%',
                margin: '1rem 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem'
            }} className="flex-col lg:flex-row">
                <SkillsPanel />
            </div>
		</DefaultLayout>
  )
}

export default Skills