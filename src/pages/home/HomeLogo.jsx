import { motion } from 'framer-motion';
import react from '../../assets/react-2.svg';
import node2 from '../../assets/node2.svg';
const HomeLogo = () => {
    return (<motion.div
                initial={{x:'-100vw'}}
                animate={{x:0}}
                transition={{delay:0.8, type:'spring', stiffness:70}}
            >
                <motion.img
                    className='home-logo'
                    src={node2} 
                    style={{  maxWidth: '100%',
                        height: 'auto'}}
                />
            </motion.div> 
            );
}


export default HomeLogo;