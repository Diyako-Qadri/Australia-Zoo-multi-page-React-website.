import styles from './Footer.module.css'
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={styles.footer}>
          <div className={styles.icons}>
         <a href='#' target='_blank'><RiTwitterXFill /></a> 
          <a href='#' target='_blank'><FaInstagram /></a>
          <a href='#' target='_blank'><FaFacebook /></a>
          </div>
         <div>
          <p>&copy; 2024 Diyako</p>
         </div>
        </div>
    )
};

export default Footer
