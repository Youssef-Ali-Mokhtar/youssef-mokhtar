import { motion } from 'framer-motion';
import YoussefMokhtarCV from '../../assets/YoussefMokhtarCV.pdf';
import fileDownload from "js-file-download";
import Axios from "axios";

const HomeText = () => {
    const download = (e) => {
        e.preventDefault();
        Axios({
          url: YoussefMokhtarCV,
          method: "GET",
          responseType: "blob",
        }).then((res) => {
          fileDownload(res.data, "YoussefMokhtarCV.pdf");
        });
      };
    return (<div className="home-text">
        <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5, duration:1}}
        >
            Front-End React Developer
        </motion.h1>
        <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:2.2, duration:1}}
        >
            Hi, I'm Youssef Mokhtar, a Front-end React Developer with a passion for crafting responsive web experiences.
        </motion.p>
        <motion.div 
            className='button-wrapper'
            initial={{ y: '-100vh' }}
            animate={{ y: 0, transition: { delay:3, type: "spring", stiffness: 100, damping: 12 }}}
        >
            <motion.button onClick={download}>
                Download Resume
            </motion.button>
        </motion.div>

    </div>);
}
 
export default HomeText;