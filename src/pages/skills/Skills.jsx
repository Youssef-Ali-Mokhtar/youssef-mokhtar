import { motion, AnimatePresence } from 'framer-motion';
import Frontend from './Frontend';
import ProblemSolving from './ProblemSolving';
import { Route, Routes, NavLink, useLocation } from "react-router-dom";

const Skills = () => {

    const location = useLocation();
    
    return ( <div id="Skills" className="page">
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:1.5}}}
            className='skills-content'
        >

            <div className='skills-text-wrapper'>
                <h1 className='skills-title'>Skills</h1>
                <p className='skills-text'>
                    As a skilled front-end developer with experience in 
                    <span style={{color:'rgb(229, 76, 33)'}}> HTML</span>, <span style={{color:'rgb(47, 116, 192)'}}>CSS</span>, 
                    <span style={{color:'rgb(247, 223, 30)'}}> JavaScript</span>, <span style={{color:'rgb(0, 216, 255)'}}>TypeScript</span>, 
                    and <span style={{color:'rgb(26, 115, 186)'}}> React</span>. 
                    I specialize in crafting engaging and user-friendly interfaces 
                    that enhance the overall user experience. Beyond front-end development, 
                    I'm also passionate about <span>problem-solving</span> and have a solid understanding
                    of <span>data structures</span> and <span>algorithms</span> to tackle complex challenges.
                </p>
            </div> 

            <div className='nav-skills'>
                <NavLink to='/' className={({isActive})=>isActive?'active':''}>Front-end</NavLink>
                <NavLink to='/problem-solving' className={({isActive})=>isActive?'active':''}>Problem Solving</NavLink>
            </div>

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.key}>
                    <Route exact path="/" element={<Frontend/>}/>
                    <Route path="/problem-solving" element={<ProblemSolving />}/>
                </Routes>
            </AnimatePresence>

        </motion.div>
    </div>);
}

export default Skills;