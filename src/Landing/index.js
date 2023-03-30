/* eslint-disable react/prop-types */
import { React, useState, useEffect, useContext } from 'react';
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
import axios from 'axios';
import styles from './styles.module.css';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SpectrumBrochure from '../assets/brochure.pdf'
// import Footer from '../Components/Footer';

function Landing() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user, setUser] = useContext(userContext);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (user?.token && formData) {
      const id = toast.loading('Registration in progress');
      axios
        .post(
          // eslint-disable-next-line no-undef
          `${process.env.REACT_APP_BACKEND_API}user/details/`,
          formData,
          {
            headers: {
              Authorization: `Token ${user.token}`,
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          setUser({ ...user, ...res.data });
          localStorage.setItem('spectrumUser', JSON.stringify({ ...user, ...res.data }));
          setFormData(null);
          toast.update(id, {
            render: 'Registration Successful',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
            closeOnClick: true,
          });
        })
        .catch((err) => {
          if (err.response.status == 401) {
            localStorage.removeItem('spectrumUser');
            setUser(undefined);
            setFormData(null);
            toast.update(id, {
              render: 'Login again',
              type: 'error',
              isLoading: false,
              autoClose: 2000,
              closeOnClick: true,
            });
          } else {
            toast.update(id, {
              render: `${Object.keys(err.response.data).reduce(function (res, v) {
                return `${res} ${err.response.data[v]}`;
              }, '')}`,
              type: 'error',
              isLoading: false,
              autoClose: 2000,
              closeOnClick: true,
            });
          }
        });
    }
  }, [formData]);

  const getDaysLeft = () => {
    const eventDate = date.parse('29 04 2023 03:30:00 AM', 'DD MM YYYY hh:mm:ss A', true);
    const now = new Date();
    const days = Math.floor(date.subtract(eventDate, now).toDays());
    const hours = Math.floor(date.subtract(eventDate, now).toHours());
    if (days > 0) return days + ' days to go';
    else if (days === 0 && hours > 0) return hours + ' hours to go';
    else return 'Event is live';
  };

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
          <div className={styles.banner}>
            <div className={styles.eventDates}>29 - 30 April, 2023</div>
            <div className={styles.daysLeft}>{getDaysLeft()}</div>
          </div>
          <Button
            variant='contained'
            disableRipple={user?.user_rounds?.registered_round_one}
            sx={{
              color: '#fff',
              background: user?.user_rounds?.registered_round_one
                ? '#F9A826'
                : 'rgba(255, 255, 255, 0)',
              '&:hover': { background: '#F9A826', border: '', color: '#fff' },
              display: 'block',
              margin: 'auto',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: user?.user_rounds?.registered_round_one ? '' : '3px solid #F9A826',
              cursor: user?.user_rounds?.registered_round_one ? 'default' : 'pointer',
            }}
            onClick={() => {
              if (user) {
                if (!user.user_rounds?.registered_round_one) setIsFormOpen(true);
              } else toast.error('You must login first');
            }}
          >
            {user?.user_rounds?.registered_round_one ? 'Registered' : 'Register Now'}
          </Button>
          <style>
            {`
            .Toastify__toast-body {
              paddingTop: 0;
              paddingBottom: 0;
            }
          `}
          </style>
          <a style={{ textDecoration: 'none' }} href={SpectrumBrochure} download="Spectrum Brochure" target='_blank' rel="noreferrer">
            <Button
              variant='contained'
              disableRipple={user?.user_rounds?.registered_round_one}
              sx={{
                color: '#fff',
                background: 'rgba(255, 255, 255, 0)',
                '&:hover': { background: '#F9A826', border: '', color: '#fff' },
                display: 'block',
                margin: 'auto',
                marginTop: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: '3px solid #F9A826',
                cursor: 'pointer',
              }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                Brochure&nbsp;&nbsp;&nbsp;
                <DownloadRoundedIcon/>
              </div>
            </Button>
          </a>
          <ToastContainer theme='dark' position='bottom-right' autoClose={2000} />
          {user && isFormOpen && (
            <EventRegisterForm
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
              email={user.email}
              setFormData={setFormData}
            />
          )}
          <div className={styles.aboutUs}>
            <div className={styles.Banner}>
              <img className={styles.BannerImage} src="https://www.cognizance.org.in/Images/Client/event%20image.png"/>
              <div className={styles.BannerTextContainer}>
                <p className={styles.BannerHeadingText}>SPECTRUM</p>
                <p className={styles.BannerText}>The Spectrum art competition has three rounds. In the first round, artists must upload existing artwork to the 
                competition website. A panel of judges will evaluate each submission based on quality, creativity, and originality, 
                and select the top 100 artists to move on to the second round. In the second round, artists must create a painting on
                a sheet of paper using a pre-decided theme to guide their process. The judges will evaluate each painting based on 
                composition, technique, color scheme, and overall impact, and select the best paintings to move on to the final round.
                  In the third and final round, contestants must quickly create a painting based on a given topic while judges closely 
                  observe their work. The marks from all three rounds will be added up to determine the winners of the competition.
                </p>
              </div>
            </div>
            <div className={styles.Banner}>
              <div className={styles.BannerTextContainer}>
                <p className={styles.BannerHeadingText}>PRIZES</p>
                <p className={styles.BannerText}>Prize Distribution: Prize distribution ceremony will be held at the end of the 
                second offline day of the competition, that is after finishing the third round. First prize will be 11000 rupees , second 
                will be 8000 rupees and third prize will be 5000 rupees. We will also give away three consolation prizes worth 2000 rupees. 
                Certificates will be provided to all participants (reaching atleaast Round 2)
                </p>
              </div>
              <img className={styles.BannerImage} src="https://www.cognizance.org.in/Images/Client/event%20image.png"/>
            </div>
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
