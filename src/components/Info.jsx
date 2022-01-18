import { MdEmail } from 'react-icons/md';
import profilePic from '../images/zdjecie.svg'
export default function Info ()  {

    return(
        <div className="info-container">
            <img src={profilePic} alt="person's photo" className="info-img"/>
            <h1 className="info-name">Laura Smith</h1>
            <h3 className="info-position">Frontend Developer</h3>
            <p className="info-website">laurasmith.website</p>
            <div className="info-button"><a href="#" className="info-link"><MdEmail className="email-icon"/> Email</a></div>   
        </div>
    )
}