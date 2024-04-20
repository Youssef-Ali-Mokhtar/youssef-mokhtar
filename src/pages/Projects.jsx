import carthub from '../assets/carthub.png';
import karkade from '../assets/karkade.PNG';
import expenses from '../assets/expenses.PNG';
import wassal from '../assets/wassal.PNG';
import neingag from '../assets/neingag.png';
import alster from '../assets/alster.png';
import Project from '../components/Project';
import { motion } from 'framer-motion';

const projects = [
    {
        title:'Carthub',
        image:neingag, 
        className:'carthub',
        description:'Neingag is an online platform and social media website, which allows its users to share user-generated content and also can collaborate by commenting on questions that have been asked by other users.',
        githubLink:'https://github.com/Youssef-Ali-Mokhtar/cart-hub/tree/master',
        demoLink:'https://youssef-ali-mokhtar.github.io/cart-hub'
    },
    {
        title:'Carthub',
        image:carthub, 
        className:'carthub',
        description:'Carthub is an e-commerce online marketplace for a wide range of products. Discover a diverse selection and shop conveniently for all your needs.',
        githubLink:'https://github.com/Youssef-Ali-Mokhtar/cart-hub/tree/master',
        demoLink:'https://youssef-ali-mokhtar.github.io/cart-hub'
    },
    {
        title:'Karkade', 
        image:karkade,
        className:'karkade', 
        description:'Karkade is a social question-and-answer platform where you can share your thoughts, ask questions, and spark discussions on a wide range of topics.',
        githubLink:'https://github.com/Youssef-Ali-Mokhtar/karkade/tree/master',
        demoLink:'https://youssef-ali-mokhtar.github.io/karkade'
    },
    {
        title:'Wassal', 
        image:wassal, 
        className:'wassal', 
        description:'Wassal is a shipping website where you can easily monitor the progress of your packages and shipments with convenience and peace of mind.',
        githubLink:'https://github.com/Youssef-Ali-Mokhtar/wassal/tree/master',
        demoLink:'https://youssef-ali-mokhtar.github.io/wassal'
    }
];

const Projects = () => {
    return ( <div id="Projects" className="page" style={{flexDirection:'column', margin:'150px 0'}}>
        <motion.h1 
            className='skills-title'
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:1}}}
        >
                Projects
        </motion.h1>
        <div className='projects-container'>
            {
                projects.map((item, index)=>(
                    <Project
                        key={item.title}
                        className={item.className} 
                        image={item.image} 
                        description={item.description} 
                        title={item.title}
                        github={item.githubLink}
                        demo={item.demoLink}
                        index={index}
                    />
                ))
            }
        </div>
    </div> );
}

export default Projects;