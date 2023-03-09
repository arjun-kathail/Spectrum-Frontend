import { React } from 'react';
import GradientBackground from '../Components/GradientBackground';
import ParticlesBackground from '../Components/ParticlesBackground';
import SpectrumWhite from '../assets/logos/spectrum_white.png';
import styles from './styles.module.css';

function Landing() {
    return (
        <div className={styles.wrapper}>
            <GradientBackground>
                <ParticlesBackground />
                <div className={styles.content}>
                    <div className={styles.page1}><img alt="spectrum logo" src={SpectrumWhite} className={styles.spectrumLogo} /></div>
                </div>
            </GradientBackground>
        </div>
    );
}

export default Landing;