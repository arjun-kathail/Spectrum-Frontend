/* eslint-disable */
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import styles from './styles.module.css';

const Footer = (props) => {
  return (
    <div id='footer' className={styles.container}>
      <div>
        <p className={styles.heading}>Connect with us on:</p>
        <div className={styles.iconContainer}>
          <a
            className={styles.icon}
            href='https://www.facebook.com/apc.pec'
            target='_blank'
            rel='noreferrer'
          >
            <FacebookIcon />
          </a>
          <a
            className={styles.icon}
            href='https://www.linkedin.com/company/art-photography-club/about/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            className={styles.icon}
            href='https://www.instagram.com/spectrum_apc/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon />
          </a>
          <a
            className={styles.icon}
            href='mailto:spectrum.apcpec@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <EmailIcon />
          </a>
        </div>
        <p className={styles.text}>©Spectrum. All rights reserved.</p>
      </div>
      <div>
        <p className={styles.heading}>Contact details:</p>
        <p className={styles.Contacttext}>Sarthak Chauhan - 8580665318</p>
        <p className={styles.Contacttext}>Muskan Singh - 9530704884</p>
        <p className={styles.Contacttext}>Ashlesha - 8837509462</p>
      </div>
    </div>
  );
};

export default Footer;
