import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/lakshya-gupta-a37620220/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/AVMktl" target='_blank'><BsGithub/></a>
      <a href="https://www.facebook.com/profile.php?id=100069147683989" target='_blank'><FaFacebookSquare /></a>
      <a href="mailto:lakshyaguptaavm@gmail.com" target='_blank'><FiMail /></a>
    </div>
  )
}

export default HeaderSocials
