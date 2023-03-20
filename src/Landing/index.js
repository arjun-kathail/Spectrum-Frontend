import { React, useState } from 'react';
import { Button } from '@mui/material';
import GradientBackground from '../Components/GradientBackground';
import ParticlesBackground from '../Components/ParticlesBackground';
import SpectrumWhite from '../assets/logos/spectrum_white.png';
import ApcLogo from '../assets/logos/apc_logo_white.png';
import PecLogo from '../assets/logos/pec_100_years_logo_transparent_white.png';
import PainterIllustration from '../assets/Illustrations/4.svg';
import MonsterIllustration from '../assets/Illustrations/5.svg';
import EventRegisterForm from '../Components/EventRegister';
import styles from './styles.module.css';

function Landing() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <GradientBackground>
        <ParticlesBackground />
        <div className={styles.content}>
          <img alt='spectrum logo' src={SpectrumWhite} className={styles.spectrumLogo} />
          <div className={styles.presentedBy}>PRESENTED BY</div>
          <div className={styles.logos}>
            <img alt='apc logo' src={ApcLogo} />
            <img alt='pec logo' src={PecLogo} />
          </div>
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
          <Button
            variant='outlined'
            onClick={() => {
              setIsFormOpen(true);
            }}
          >
            Open form dialog
          </Button>
          <EventRegisterForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </div>
      </GradientBackground>
    </div>
  );
}

export default Landing;
