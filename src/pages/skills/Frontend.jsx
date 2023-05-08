import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTypescript } from "react-icons/si";
import {motion} from 'framer-motion';

const techStack = [
    {skill:SiReact, color:'rgb(26, 115, 186)'},
    {skill:SiTypescript, color:'rgb(0, 216, 255)'},
    {skill:SiJavascript, color:'rgb(247, 223, 30)'},
    {skill:SiCss3, color:'rgb(47, 116, 192)'},
    {skill:SiHtml5, color:'rgb(229, 76, 33)'},
]


const containerVariants = {
    
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    },
    exit:{
        
        transition: {
          opacity: 0,
          staggerChildren: 0.2,
          staggerDirection: 1
        }
    }
  };
  
  const childVariants = {

    hidden: {
        opacity: 0,
        x: -100
      },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },

    exit:{
        opacity: 0,
        x: 100,
        transition: {
          duration: 0.5
        }
    }

  };


const Frontend = () => {
    return ( 
            <motion.div 
                className='tech-stack-wrapper'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
            {
                techStack.map(element=>
                    <motion.div 
                        key={element.skill} 
                        className='tech-box'
                        variants={childVariants}
                        whileHover={{rotate:90, scale:1.1,transition:{duration:0.3}}}
                        >
                        <element.skill style={{color:element.color}} className='skills-icon' />
                    </motion.div>
                )
            }
        </motion.div>
    );
}
 
export default Frontend;