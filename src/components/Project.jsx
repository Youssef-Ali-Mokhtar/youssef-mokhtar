import Classes from './Project.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import expensesFile from '../assets/expenses.xlsx';
import fileDownload from "js-file-download";
import Axios from "axios";

const Project = ({className, image, description, title, github, demo, index}) => {

    const isReversed = (index%2 === 1)?Classes['reverse']:"";
    const download = (e) => {
        e.preventDefault();
        Axios({
          url: expensesFile,
          method: "GET",
          responseType: "blob",
        }).then((res) => {
          fileDownload(res.data, "expenses.xlsx");
        });
      };

    return ( <motion.div 
            className={Classes['project']+" "+Classes[className]+" "+isReversed}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:1}}}
        >
        <div className={Classes['project-image-holder']}>
            <Link to={demo} target='_blank'>
                <img className={Classes['project-image']} src={image} alt={className}/>
            </Link>
        </div>
        <div className={Classes['project-text']}>
            <h1 className={Classes['project-title']}>{title}</h1>
            <p className={Classes['project-description']}>
                {description}
            </p>
            {
                title==='Wassal'&&
                <p className={Classes['project-description']}>
                    Input examples: 1695345, 1696755, 1697868
                </p>
            }
            {
                title==='Expenses Analysis'&&
                <button onClick={download} className={Classes['test-file']}>
                    Test File
                </button>
            }
            <div className={Classes['links-container']}>
                <Link to={github} target="_blank" className={Classes['link-item']}>
                    <span style={{color:'white', margin:'5px'}}>Code</span> 
                    <BsGithub className={Classes['link-icon']}/>
                </Link>
                <Link to={demo} target="_blank" className={Classes['link-item']}>
                    <span style={{color:'white', margin:'5px'}}>Demo</span> 
                    <HiOutlineArrowTopRightOnSquare className={Classes['link-icon']}/>
                </Link>
            </div>
        </div>
    </motion.div> );
}
 
export default Project;