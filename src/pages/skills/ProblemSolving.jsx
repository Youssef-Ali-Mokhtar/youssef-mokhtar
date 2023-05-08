import {motion} from 'framer-motion';

const techStack = [
    {skill:'Data Structures', color:'rgb(247, 223, 30)'},
    {skill:'Algorithms', color:'rgb(26, 115, 186)'},
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

const ProblemSolving = () => {
    return ( 
            <motion.div 
                className='tech-stack-wrapper'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
            {
                techStack.map(item=>
                    <motion.div 
                        key={item.skill} 
                        className='tech-box'
                        variants={childVariants}
                        whileHover={{rotate:90, scale:1.1,transition:{duration:0.3}}}
                        >
                        <div className='problem-solving-item-container'>
                              <span>{item.skill}</span>
                        </div>
                    </motion.div>
                )
            }
        </motion.div>
    );
}
 
export default ProblemSolving;