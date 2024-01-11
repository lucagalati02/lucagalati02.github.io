import Header from '@/components/header'
import DefaultLayout from '@/layouts/default'
import React from 'react'
import Project from '@/components/Project'

function Projects() {

  const projects = {
    'Project 1': {
      'project_name': 'FoodBank Finder @ Google Hackathon',
      'image_path': 'FBF.gif',
      'description': 'I led a team of four in the creation of a web application focusing on sustainability and social good. The project, which won the Google Hackathon, aimed to assist individuals in finding the nearest food bank tailored to their specific needs. Using HTML and CSS for front-end development and Python Flask for the back-end, we seamlessly integrated Google APIs to enhance functionality. Despite the challenging 24-hour deadline, our team successfully delivered a fully functional web application, showcasing our efficiency and innovation in addressing pressing social issues.',
      'technologies': ['Python', 'Flask', 'HTML', 'CSS', 'Google API'],
      'github_link': 'https://github.com/lucagalati02/FoodBank_Finder-Hackherthon-Winner'
    },
    'Project 2': {
      'project_name': 'QBNB',
      'image_path': 'qbnb.png',
      'description': 'I led a team in the development of an Airbnb clone, employing SCRUM methodology to ensure a streamlined development cycle. Emphasizing functionality as the top priority, I took the opportunity to focus on learning! As a result, I gained knowledge about how to effectively design/construct a backend with REST API and SQL integration, as well as the ability to incorporate quality assurance practices such as code testing in order to deliver the most gratifying experience! Not only did I learn more about web development, I also learned what it takes to be a leader in the industry!',
      'technologies': ['Python', 'Flask', 'HTML', 'CSS', 'SQL', 'Docker', ],
      'github_link': 'https://github.com/lucagalati02/QBNB'
    }
  }

  return (
    <DefaultLayout>
			<Header title='Projects' subtitle=''/>
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
              <Project 
                project_name={projects['Project 1']['project_name']} 
                image_path={projects['Project 1']['image_path']} 
                description={projects['Project 1']['description']} 
                technologies={projects['Project 1']['technologies']} 
                github_link={projects['Project 1']['github_link']}
              />
              <Project 
                project_name={projects['Project 2']['project_name']} 
                image_path={projects['Project 2']['image_path']} 
                description={projects['Project 2']['description']} 
                technologies={projects['Project 2']['technologies']} 
                github_link={projects['Project 2']['github_link']}
              />
            </div>
		</DefaultLayout>
  )
}

export default Projects