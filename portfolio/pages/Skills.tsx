import Header from '@/components/header'
import DefaultLayout from '@/layouts/default'
import React from 'react'
import SkillsPanel from '@/components/skillsPanel'

function Skills() {
  return (
    <DefaultLayout>
			<Header title='Skills' subtitle=''/>
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
                <SkillsPanel />
            </div>
		</DefaultLayout>
  )
}

export default Skills