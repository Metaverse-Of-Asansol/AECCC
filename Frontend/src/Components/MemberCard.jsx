import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import DefaultImg from '../Assets/members/member.png';
import './styles/MemberCard.css';

const MemberCard = ({ member }) => {
  const { img, name, linkedin, github } = member;
  return (
    <div className='member-card'>
      <div className='card-img-container'>
        <img src={img ? img : DefaultImg} alt='profile' className='card-img' />
      </div>
      <h3 className='card-name'>{name}</h3>
      {(linkedin || github) && (
        <div className='card-links'>
          {linkedin && (
            <a
              href={linkedin}
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
          )}
          {github && (
            <a
              href={github}
              className='card-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default MemberCard;
