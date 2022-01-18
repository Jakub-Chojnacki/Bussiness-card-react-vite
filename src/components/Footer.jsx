import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

export default function Footer ()  {

    return(
        <div className="footer-container">
             <FaTwitterSquare/>
            <AiFillFacebook/>
            <FaInstagramSquare/>
            <FaLinkedin/>
            <FaGithubSquare/>
            
        </div>
    )
}