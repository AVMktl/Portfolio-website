import React from 'react'
import "./footer.css";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const Footer = () => {
  return (
    <section id='footer'>
      <a href="#" className='footer__logo'>LAKSHYA GUPTA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/lakshya-gupta-a37620220/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/AVMktlhttps://github.com/AVMktl" target='_blank'><BsGithub/></a>
      <a href="https://www.facebook.com/profile.php?id=100069147683989" target='_blank'><FaFacebookSquare /></a>
      <a href="mailto:lakshyaguptaavm@gmail.com" target='_blank'><FiMail /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lakshya Gupa. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Footer
