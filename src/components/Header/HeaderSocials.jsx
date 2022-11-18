import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
        <a href="https://youtube.com"><BsYoutube/></a>

    </div>
  )
}

export default HeaderSocials;