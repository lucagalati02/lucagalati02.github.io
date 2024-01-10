import React from 'react'
import Header from '@/components/header';
import { Tooltip, Button } from '@nextui-org/react';

function SkillsPanel() {
  return (
    <div>
        <Header title='' subtitle='Languages'/>
        <div style={{width:'50vw', margin: 'auto'}} className="flex overflow-hidden space-x-16 group">
            <div className="flex space-x-20 animate-loop-scroll group-hover:paused" aria-hidden="true">
                <img loading="lazy" src="skills/java.svg" className="max-w-none w-16" alt="Image 1" />
                <img loading="lazy" src="skills/python.svg" className="max-w-none w-16" alt="Image 2" />
                <img loading="lazy" src="skills/c.svg" className="max-w-none w-16" alt="Image 3" />
                <img loading="lazy" src="skills/html.svg" className="max-w-none w-16" alt="Image 4" />
                <img loading="lazy" src="skills/css.svg" className="max-w-none w-16" alt="Image 5" />
                <img loading="lazy" src="skills/javascript.svg" className="max-w-none w-16" alt="Image 6" />
                <img loading="lazy" src="skills/typescript.svg" className="max-w-none w-16" alt="Image 7" />
                <img loading="lazy" src="skills/matlab.svg" className="max-w-none w-16" alt="Image 8" />
                <img loading="lazy" src="skills/sql.svg" className="max-w-none w-16" alt="Image 9" />
                <img loading="lazy" src="skills/bash.svg" className="max-w-none w-16" alt="Image 10" />
                <img loading="lazy" src="skills/java.svg" className="max-w-none w-16" alt="Image 1" />
                <img loading="lazy" src="skills/python.svg" className="max-w-none w-16" alt="Image 2" />
                <img loading="lazy" src="skills/c.svg" className="max-w-none w-16" alt="Image 3" />
                <img loading="lazy" src="skills/html.svg" className="max-w-none w-16" alt="Image 4" />
                <img loading="lazy" src="skills/css.svg" className="max-w-none w-16" alt="Image 5" />
                <img loading="lazy" src="skills/javascript.svg" className="max-w-none w-16" alt="Image 6" />
                <img loading="lazy" src="skills/typescript.svg" className="max-w-none w-16" alt="Image 7" />
                <img loading="lazy" src="skills/matlab.svg" className="max-w-none w-16" alt="Image 8" />
                <img loading="lazy" src="skills/sql.svg" className="max-w-none w-16" alt="Image 9" />
                <img loading="lazy" src="skills/bash.svg" className="max-w-none w-16" alt="Image 10" />
            </div>
        </div>
        <br />
        <br />
        <Header title='' subtitle='Libraries & Tools'></Header>
        <div style={{width:'50vw', margin: 'auto'}} className="flex overflow-hidden space-x-16 group">
            <div className="flex space-x-20 animate-loop-scroll-reverse group-hover:paused" aria-hidden="true">
                <img loading="lazy" src="skills/git.svg" className="max-w-none w-16" alt="Image 1" />
                <img loading="lazy" src="skills/react.svg" className="max-w-none w-16" alt="Image 2" />
                <img loading="lazy" src="skills/node.svg" className="max-w-none w-16" alt="Image 3" />
                <img loading="lazy" src="skills/express.svg" className="max-w-none w-16" alt="Image 4" />
                <img loading="lazy" src="skills/next.svg" className="max-w-none w-16" alt="Image 5" />
                <img loading="lazy" src="skills/flask.svg" className="max-w-none w-16" alt="Image 6" />
                <img loading="lazy" src="skills/figma.svg" className="max-w-none w-16" alt="Image 7" />
                <img loading="lazy" src="skills/powerbi.svg" className="max-w-none w-16" alt="Image 8" />
                <img loading="lazy" src="skills/azure.svg" className="max-w-none w-16" alt="Image 9" />
                <img loading="lazy" src="skills/git.svg" className="max-w-none w-16" alt="Image 1" />
                <img loading="lazy" src="skills/react.svg" className="max-w-none w-16" alt="Image 2" />
                <img loading="lazy" src="skills/node.svg" className="max-w-none w-16" alt="Image 3" />
                <img loading="lazy" src="skills/express.svg" className="max-w-none w-16" alt="Image 4" />
                <img loading="lazy" src="skills/next.svg" className="max-w-none w-16" alt="Image 5" />
                <img loading="lazy" src="skills/flask.svg" className="max-w-none w-16" alt="Image 6" />
                <img loading="lazy" src="skills/figma.svg" className="max-w-none w-16" alt="Image 7" />
                <img loading="lazy" src="skills/powerbi.svg" className="max-w-none w-16" alt="Image 8" />
                <img loading="lazy" src="skills/azure.svg" className="max-w-none w-16" alt="Image 9" />
            </div>
        </div>
    </div>
  );
}

export default SkillsPanel;
