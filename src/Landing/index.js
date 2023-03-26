/* eslint-disable react/prop-types */
import { React, useState, useContext } from 'react';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import GradientBackground from '../Components/GradientBackground';
import ParticlesBackground from '../Components/ParticlesBackground';
import SpectrumWhite from '../assets/logos/spectrum_white.png';
import ApcLogo from '../assets/logos/apc_logo_white.png';
import PecLogo from '../assets/logos/pec_logo_since_1921.png';
import PainterIllustration from '../assets/Illustrations/4.svg';
import MonsterIllustration from '../assets/Illustrations/5.svg';
import EventRegisterForm from '../Components/EventRegister';
import date from 'date-and-time';
import 'react-toastify/dist/ReactToastify.css';
import userContext from '../Context/userContext';
import styles from './styles.module.css';

function Landing() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user] = useContext(userContext);

  const getDaysLeft = () => {
    const eventDate = date.parse('29 04 2023 03:30:00 AM', 'DD MM YYYY hh:mm:ss A', true);
    const now = new Date();
    const days = Math.floor(date.subtract(eventDate, now).toDays());
    const hours = Math.floor(date.subtract(eventDate, now).toHours());
    if (days > 0) return days + ' days to go';
    else if (days === 0 && hours > 0) return hours + ' hours to go';
    else return 'Event is live';
  }

  return (
    <div className={styles.wrapper}>
      <GradientBackground>
        <ParticlesBackground />
        <div className={styles.content}>
          <div className={styles.logos}>
            <img alt='apc logo' src={ApcLogo} />
            <div className={styles.logoSeperation}></div>
            <img alt='pec logo' src={PecLogo} />
          </div>
          {/* <div className={styles.presentedBy}>PRESENTS</div> */}
          <img alt='spectrum logo' src={SpectrumWhite} className={styles.spectrumLogo} />
          <div className={styles.banner}><div className={styles.eventDates}>29 - 30 April, 2023</div><div className={styles.daysLeft}>{getDaysLeft()}</div></div>
          <Button
            variant='contained'
            sx={{
              color: '#fff',
              background: '#A420D0',
              '&:hover': { background: '#A420D0' },
              display: 'block',
              margin: 'auto',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
            onClick={() => {
              if (user) setIsFormOpen(true);
              else toast('You must login first');
            }}
          >
            Register Now
          </Button>
          <style>
            {`
            .Toastify__toast-body {
              paddingTop: 0;
              paddingBottom: 0;
            }
          `}
          </style>
          <ToastContainer theme='dark' position='bottom-right' />
          {isFormOpen && (
            <EventRegisterForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
          )}
          <div className={styles.aboutUs}>
            <div className={styles.aboutUsQuote}>
              {
                '“To be an artist is to believe in life, to lose and find ourselves at the same time.”'
              }
            </div>
            <div className={styles.aboutUsSpectrum}>
              {
                'A 2 day event in collaboration with Tricity’s biggest art houses and premier institutions in India, will be the first event of its kind in the region with a total prize pool of ₹75K'
              }
            </div>
            <div className={styles.illustrations}>
              <img alt='painter' src={PainterIllustration} />
              <img alt='painter' src={MonsterIllustration} />
            </div>
            <div className={styles.aboutUsTitle}>About Us</div>
            <div className={styles.aboutUsContent}>
              {
                'Bringing to you the flagship event of Art club of Punjab Engineering College, Chandigarh, by the efforts of passionate artists and creative students of Art and Photography club. Continuously providing a platform for students of all years in the college to share their creativity, knowledge, and passion, we now aim to create a platform for the people interested and proficient in Art and painting to showcase their talent. Thus, PRESENTING SPECTRUM!'
              }
            </div>
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}

export default Landing;
