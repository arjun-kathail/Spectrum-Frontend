/* eslint-disable react/prop-types */
import { React, useState, useEffect, useContext } from 'react';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import GradientBackground from '../Components/GradientBackground';
import ParticlesBackground from '../Components/ParticlesBackground';
import SpectrumWhite from '../assets/logos/spectrum_white.png';
import ApcLogo from '../assets/logos/apc_logo_white.png';
import PecLogo from '../assets/logos/pec_logo_since_1921.png';
import EventRegisterForm from '../Components/EventRegister';
import date from 'date-and-time';
import 'react-toastify/dist/ReactToastify.css';
import userContext from '../Context/userContext';
import axios from 'axios';
import styles from './styles.module.css';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SpectrumBrochure from '../assets/brochure.pdf';
import Footer from '../Components/Footer';
import EventDetail from '../Components/EventDetail';
import PrizesImage from '../assets/prizes.png';
import EventsImage from '../assets/events.png';
import DeliverablesImage from '../assets/deliverables.png';

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
      <style>
        {`
            .Toastify__toast-body {
              paddingTop: 0;
              paddingBottom: 0;
            }
          `}
      </style>
      <ToastContainer theme='dark' position='bottom-right' autoClose={2000} />
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
          <p
            style={{
              textAlign: 'center',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              fontWeight: '400',
            }}
          >
            The stroke of a creative mind
          </p>
          <div className={styles.banner}>
            <div className={styles.eventDates}>29 - 30 April, 2023</div>
            <div className={styles.daysLeft}>{getDaysLeft()}</div>
          </div>
          <div className={styles.buttons}>
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
                fontSize: '1.1rem',
                fontWeight: '600',
                border: '3px solid #F9A826',
                cursor: user?.user_rounds?.registered_round_one ? 'default !important' : 'pointer',
              }}
              onClick={() => {
                if (user) {
                  if (!user?.user_rounds?.registered_round_one) setIsFormOpen(true);
                } else toast.error('You must login first');
              }}
            >
              {user?.user_rounds?.registered_round_one ? <div>&nbsp;&nbsp;Registered&nbsp;&nbsp;&nbsp;</div> : <div>Register Now</div>}
            </Button>
            <a
              style={{ textDecoration: 'none' }}
              href={SpectrumBrochure}
              download='Spectrum Brochure'
              target='_blank'
              rel='noreferrer'
            >
              <Button
                variant='contained'
                disableRipple={user?.user_rounds?.registered_round_one}
                sx={{
                  color: '#fff',
                  background: 'rgba(255, 255, 255, 0)',
                  '&:hover': { background: '#F9A826', border: '', color: '#fff' },
                  display: 'block',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: '3px solid #F9A826',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Brochure&nbsp;&nbsp;&nbsp;
                  <DownloadRoundedIcon />
                </div>
              </Button>
            </a>
          </div>
          {user && isFormOpen && (
            <EventRegisterForm
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
              email={user.email}
              setFormData={setFormData}
            />
          )}
          <div id='event' className={styles.aboutUs}>
            <div className={styles.SpectrumBanner}>
              <img
                className={styles.BannerImage}
                src={EventsImage}
              />
              <div className={styles.BannerTextContainer}>
                <p className={styles.BannerHeadingText}>SPECTRUM</p>
                <p className={styles.BannerText}>
                  The Spectrum art competition has{' '}
                  <span className={styles.BannerTextBold}>three rounds</span>. In the{' '}
                  <span className={styles.BannerTextBold}>first round</span>, artists must upload
                  existing artwork to the competition website. A panel of judges will evaluate each
                  submission based on quality, creativity, and originality, and select the top 100
                  artists to move on to the second round. In the{' '}
                  <span className={styles.BannerTextBold}>second round</span>, artists must create a
                  painting on a sheet of paper using a pre-decided theme to guide their process. The
                  judges will evaluate each painting based on composition, technique, color scheme,
                  and overall impact, and select the best paintings to move on to the final round.
                  In the <span className={styles.BannerTextBold}>third and final round</span>,
                  contestants must quickly create a painting based on a given topic while judges
                  closely observe their work.
                </p>
              </div>
            </div>
            <div className={styles.PrizesBanner}>
              <div className={styles.BannerTextContainer}>
                <p className={styles.BannerHeadingText}>PRIZES</p>
                <p className={styles.BannerText}>
                  The marks from all three rounds will be added up to determine the winners of the
                  competition. The Prize distribution ceremony will be held at the end of the third
                  round.{' '}
                  <span className={styles.BannerTextBold}>
                    The total prize pool of the competition is rupees 50000 (30000 + goodies)
                  </span>
                  . First prize awarded will be 11000 rupees , second prize will be 8000 rupees and
                  third prize will be 5000 rupees. Three consolation prizes worth 2000 rupees each
                  will also be awarded.<br></br>
                  Certificates will be provided to all participants (those reaching atleast Round
                  2).
                </p>
              </div>
              <img
                className={styles.BannerImage}
                src={PrizesImage}
              />
            </div>
            <div className={styles.SpectrumBanner}>
              <img
                className={styles.DeliverablesBannerImage}
                src={DeliverablesImage}
              />
              <div className={styles.BannerTextContainer}>
                <p className={styles.BannerHeadingText}>WHAT WE PROVIDE?</p>
                <p className={styles.BannerText}>
                  The article outlines the provisions of the painting competition, including a canvas, art kit, brushes, paints, palettes, and other materials.
                  The article also highlights the hospitality end arrangements, including refreshments, water bottles, and hostel meals for participants
                  from outside the Tricity, and the documentation for all participants. All the participants will be provided with all the material, stay, food and refreshments from our end.
                </p>
              </div>
            </div>
            <EventDetail />
            <Footer />
          </div>
        </div>
      </GradientBackground>
    </div>
  );
}

export default Landing;
