import DefaultLayout from "@/layouts/default";
import Header from "@/components/header";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <Header title='Luca Galati' subtitle='Software Engineer'/>
            <div style={{
                backgroundColor: 'rgba(0, 255, 0, 0.0)', 
                border: '0px dashed green', 
                height: '87%', 
                width: '100%', 
                margin: '1rem 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem'
            }} className="flex-col lg:flex-row">
                <Image isBlurred  src="me.jpg" style={{marginRight: '1rem', minWidth: '450px', maxWidth: '450px'}}/>
                <Card style={{maxWidth: '50vw', minWidth: '425px'}} >
                    <div style={{margin: '1rem'}}>
                        <p>Hello! My name is Luca and I am currently interning as a Full Stack Developer and Data Analyst at Mitsubishi Aerospace, while also pursuing a degree in Computer Science at Queen's University! Set to graduate in 2025, my journey in technology reflects a deep passion for detail and a commitment to surpassing user expectations through the creation of high-quality software.</p>
                        <br />
                        <p>With each project, I prioritize the identification and implementation of the most creative and efficient solutions. Early on, I embraced the philosophy that proactivity and going the extra mile are invaluable investments for long-term success. Maintaining this mindset as the driving force behind my work enables me to consistently deliver the best products.</p>
                    </div>
                </Card>
            </div>
        </DefaultLayout>
    );
}
