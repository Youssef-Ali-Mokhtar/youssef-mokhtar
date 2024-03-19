import carthub from '../assets/carthub.png';
import karkade from '../assets/karkade.PNG';
import expenses from '../assets/expenses.PNG';
import wassal from '../assets/wassal.PNG';
import alster from '../assets/alster.png';
import Project from '../components/Project';
import { motion } from 'framer-motion';

const projects = [
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
    },
    {
        title:'Alster (MERN)', 
        image:alster, 
        className:'carthub',
        description:'Alster is a dynamic Full-Stack MERN project that facilitates seamless product listing. With robust authentication and authorization features, users can securely manage products. (Takes about 35 seconds for the server to wake up)',
        githubLink:'https://github.com/Youssef-Ali-Mokhtar/alster/tree/master',
        demoLink:'https://youssef-ali-mokhtar.github.io/alster'
    },
    {
        title:'Expenses Analysis', 
        image:expenses, 
        className:'expenses-analysis', 
        description:'With Expenses Analysis you can gain valuable insights into your financial habits effortlessly. Simply drag and drop your Excel sheet to analyze your spending patterns',
        githubLink:'https://github.com/Youssef-Ali-Mokhtar/expenses-analysis/tree/master',
        demoLink:'https://youssef-ali-mokhtar.github.io/expenses-analysis'
    },
]
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
                projects.map((item)=>(
                    <Project
                        key={item.title}
                        className={item.className} 
                        image={item.image} 
                        description={item.description} 
                        title={item.title}
                        github={item.githubLink}
                        demo={item.demoLink}
                    />
                ))
            }
        </div>
    </div> );
}

export default Projects;