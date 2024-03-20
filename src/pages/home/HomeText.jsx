import { motion } from 'framer-motion';
import YoussefMokhtarCV from '../../assets/YoussefCV.pdf';
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
            transition={{delay:1, duration:1}}
        >
            Full-Stack MERN Developer
        </motion.h1>
        <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.7, duration:1}}
        >
            Hello, I'm Youssef Mokhtar, a Full-Stack MERN Developer dedicated to building innovative and seamless web applications.
        </motion.p>
        <motion.div 
            className='button-wrapper'
            initial={{ y: '-100vh' }}
            animate={{ y: 0, transition: { delay:2.5, type: "spring", stiffness: 100, damping: 12 }}}
        >
            <motion.button onClick={download}>
                Download Resume
            </motion.button>
        </motion.div>

    </div>);
}
 
export default HomeText;