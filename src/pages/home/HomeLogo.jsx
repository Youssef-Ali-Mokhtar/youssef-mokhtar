import { motion } from 'framer-motion';
import react from '../../assets/react-2.svg';

const HomeLogo = () => {
    return (<motion.div
                initial={{x:'-100vw'}}
                animate={{x:0}}
                transition={{delay:0.8, type:'spring', stiffness:70}}
            >
                <motion.img
                    className='home-logo'
                    src={react} 
                    style={{  maxWidth: '100%',
                        height: 'auto'}}
                    animate={{ rotate: 360}}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
            </motion.div> 
            );
}


export default HomeLogo;