import { React, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import EventDes1 from './images/eventdes1.png';
import EventDes2 from './images/eventdes2.png';
import styles from './styles.module.css';

function EventDetail() {
  const [round1Active, setRound1Active] = useState(true);
  const [round2Active, setRound2Active] = useState(false);
  const [round3Active, setRound3Active] = useState(false);
  const [descriptionModalOpen, setdescriptionModalOpen] = useState(false);
  const [moreDetailsView, setmoreDetailsView] = useState(false);

  const handleOpen = () => {
    setdescriptionModalOpen(true);
  };
  const handleClose = () => {
    setdescriptionModalOpen(false);
    setmoreDetailsView(false);
  };

  const clickRound1 = () => {
    setRound1Active(true);
    setRound2Active(false);
    setRound3Active(false);
    setmoreDetailsView(false);
  };

  const clickRound2 = () => {
    setRound2Active(true);
    setRound1Active(false);
    setRound3Active(false);
    setmoreDetailsView(false);
  };

  const clickRound3 = () => {
    setRound3Active(true);
    setRound1Active(false);
    setRound2Active(false);
    setmoreDetailsView(false);
  };

  const clickMoreDetails = () => {
    setmoreDetailsView(true);
    handleOpen();
  };

    return (
    
        <div className={styles.Banner}>
            <div className='row'>
                <p className={styles.BannerHeadingText}>EVENT DETAILS</p>
                <div className={'col-12 col-md-6 col-lg-8 mt-4'} style={{display: "flex", alignItems: "center"}}>
                    <div className={styles.DescriptionSection}>
                    <div className={styles.RoundsNavsContainer}>
                        <Modal  
                            size="xl"
                            aria-labelledby="contained-modal-title-vcenter"
                            className={styles.EventDetailModal}
                            centered  
                            show={descriptionModalOpen} onHide={handleClose}> 
                            {
                            round1Active && !moreDetailsView ?
                            <p className={styles.ModalEventDescription} >
                                The purpose of the online screening round is to evaluate the quality and suitability of the artwork and to determine which candidates will advance to the next round of the competition. 
                                <br/>
                                <br/>
                                This process is in <b>online mode</b> at <a href="www.spectrumapc.live" style={{color: "white"}}>www.spectrumapc.live</a>. 
                                <br/>
                                <br/>
                                <b>Submission requirements:</b> Candidates are required to submit 2 - 3 artworks in JPEG or PNG file. 
                                <br/>
                                <br/>
                                <b>Submission deadline:</b> 16th April, 2023 
                                <br/>
                                <br/>
                                <b>Original work:</b> Candidates must attest that their submitted artwork is original and created by them. 
                                Plagiarism or use of other people&rsquo;s work is prohibited. 
                                <br/>
                                <br/>
                                <b>Judging criteria:</b> The artwork will be evaluated based on specific judging criteria, such as artistic skill, creativity, originality, and adherence to the theme of the competition. 
                                <br/>
                                <br/>
                                <b>Ownership of artwork:</b> The candidate retains the ownership of the artwork submitted but may grant the competition the right to display the artwork on their website or social media platforms. 
                                <br/>
                                <br/>
                                Note: Candidates should carefully review the submission requirements and judging criteria provided before submitting their artwork to ensure that they meet all the rules.
                            </p>
                            :
                            <></>
                            }
                            {
                            round2Active && !moreDetailsView ?
                            <p className={styles.ModalEventDescription}>
                                The shortlisted candidates will take part in round 2(offline mode, to be conducted on campus) with acrylic paints and the theme for the same will be told a week prior. 
                                <br/>
                                <br/>
                                The second round will be held on <b>29th April</b>. In the second round participants will be provided 5 hours(including breaks and refreshments) to complete their artwork.
                                <br/>
                                <br/>
                                <b>Accommodation</b> will be provided to the participants who are not the residents of Tricity (Chandigarh, Mohali, Panchkula & Zirakpur). Every participant needs to carry their college identity card for entry. 
                                <br/>
                                <br/>
                                <b>Duration :</b> 5 hours
                                <br/>
                                <br/>
                                <b>Team size :</b> Individual 
                                <br/>
                                <br/>
                                <b>Medium :</b> Acrylics ( bring material of your own choice, if wanted )
                                <br/>
                                <br/>
                                <b>Material provided :</b>
                                <ul>
                                    <li>A2 sheet  (200gsm or more)</li>
                                    <li>Essential Art kit (stationary, brushes and paints)</li>
                                    <li>Theme : Theme would be disclosed a week prior to the competition.</li>
                                </ul>
                                <br/>
                                <b>Judging criteria :</b>
                                <ul>
                                    <li>Originality 15%</li>
                                    <li>Creativity 15%</li>
                                    <li>Painting skills 25%</li>
                                    <li>Neatness and Appearance 20%</li>
                                    <li>Closeness to selected theme 25%</li>
                                </ul>										
                                Note: Participants can bring their own material if they want to (only for this round).
                                <br/>
                                <br/>
                                <b>Schedule:</b>
                                <br />
                                <br />
                                <img src={EventDes1} />
                            </p> : 
                            <></>
                            }
                            {
                            round3Active && !moreDetailsView ?
                            <p className={styles.ModalEventDescription}>
                                The candidates will then be screened for round 3 which will be conducted (offline mode, to be conducted on campus) using acrylic paints on canvas and the theme for the same will be told on the spot.
                                <br/>The third round will be held on <b>30th April</b>. In the third round participants will be provided 6 hours (including breaks and refreshments), to complete their artwork. 
                                <br />
                                <br />
                                <b>Duration :</b> 6 hours
                                <br />
                                <br />
                                <b>Team size :</b> Individual 
                                <br />
                                <br />
                                <b>Medium :</b> Acrylics 
                                <br />
                                <br />
                                <b>Material provided :</b>
                                <ul>
                                    <li>2.5 ft.× 3ft. Canvas</li>  
                                    <li>Essential Art kit(stationary, brushes and paints)</li>  
                                    <li>Theme: Theme would be given on the spot</li>
                                </ul>
                                <br />
                                <b>Judging criteria :</b>
                                <ul>
                                    <li>Originality and Creativity 25%</li>  
                                    <li>Painting skills 30%</li>  
                                    <li>Neatness and Appearance 15%</li>
                                    <li>Incorporation of theme  30%</li>
                                </ul>	
                                The third round will be the final round and marks of both the rounds in total will be considered for the declaration of winners.
                                <br/>
                                <br/>
                                <b>Schedule:</b>
                                <br />
                                <br />
                                <img src={EventDes2} />
                            </p> :
                            <></>
                            }
                            {
                                moreDetailsView ? 
                                <p className={styles.ModalEventDescription}>
                                    <b>RULES</b>
                                    <br/>
                                    <br/>
                                    Welcome to Spectrum! Before we get started, let&rsquo;s go over some rules and guidelines to ensure a fair and enjoyable competition for everyone involved.
                                    <br/>
                                    <br/>
                                    <b>Eligibility</b>: The competition is open to all participants from the ages of 17-25 years. 
                                    <br/>
                                    <br/>
                                    <b>Medium</b>: The competition follows acrylic colors as the major medium for painting. Alternatively, participants have the option to choose their own medium for round 2. Only acrylic paints will be provided, other mediums can be arranged by the participants on their own. 
                                    <br/>
                                    <br/>
                                    <b>Original work</b>: All paintings must be original works created by the participant. No reproductions or copies of other artists&rsquo; work are allowed.
                                    <br/>
                                    <br/>
                                    <b>Submission</b>: All paintings must be submitted by the specified deadline for all rounds. Late entries will not be accepted.
                                    <br/>
                                    <br/>
                                    <b>Judging</b>: A panel of judges will evaluate the paintings based on creativity, originality, technique, and adherence to the theme. The judges&rsquo; decisions are final.
                                    <br/>
                                    <br/>
                                    <b>Prizes</b>: Prizes will be awarded to the top 3 entries. Three consolation prizes will also be awarded. 
                                    <br/>
                                    <br/>
                                    <b>Ownership and use of paintings</b>: All paintings submitted to the competition become the property of the competition organizers.
                                    <br/>
                                    <br/>
                                    <b>Payments</b>: Payments should be made online through the website (Only for shortlisted students/Further details will be provided). Participating in the first round will be free of cost. Participants will be required to pay the minimal registration fees of  ₹450/- (inclusive of all taxes) after getting shortlisted for the second round. The cost of required materials, refreshments, participation certificate, and accommodation (exclusively for participants outside Tricity and Zirakpur) will be covered in the registration fee itself.
                                    <br/>
                                    <br/>
                                    <b>Timeline and Rounds of the Event</b>: The event will be conducted in three different rounds. 
                                    <br/>The <b>first round</b> will consider online entries and will be a shortlisting round. 
                                    The shortlisted candidates will take part in <b>second round</b> (offline mode, to be conducted on campus) with acrylic paints and the theme for the same will be told a week prior. 
                                    The candidates will then be screened for <b>third round</b> which will be conducted (offline mode, to be conducted on campus) using acrylic paints on canvas and the theme for the same will be told on the spot.
                                    The third round will be the final round and marks of both the rounds in total will be considered for the declaration of winners.
                                    <br/>The second and third round will be held on 29th and 30th April. In the second and third rounds participants will be provided 5 and 6 hours respectively (including any breaks for refreshments), to complete their artwork. 
                                    <br/><br/>Accommodation will be provided to the participants who are not the residents of Tricity (Chandigarh, Mohali, Panchkula & Zirakpur). Every participant needs to carry their college identity card for entry. 
                                    The participants will be provided with the required materials by the organizing team itself.
                                    <br/>
                                    <br/>
                                    <b>Judgement Criteria</b>: The participants will be judged on the following aspects and weightage:
                                    Creativity & Originality - 20%
                                    Quality – Composition, Elements, Colors - 30%
                                    Clarity of Theme - 15%
                                    Message or Aim of the Artwork - 15%
                                    Overall Artistic Impression - 20%
                                    <br/><br/>
                                    <b>Prize Distribution</b>: Prize distribution ceremony will be held at the end of the second day of the competition, that is after finishing the third round. <b>First prize will be 11000 rupees , second will be 8000 rupees and third prize will be 5000 rupees.Three consolation prizes worth 2000 rupees each will also be awarded</b>. Certificates will be provided to all participants (reaching at least Round 2). However the sponsors and the organizing team hold complete power to change the amounts of each prize and the total number of prizes to be distributed.
                                    <br/><br/>
                                    <b>Code of conduct</b>: All participants are expected to conduct themselves in a professional and respectful manner. Any inappropriate behavior or language may result in disqualification from the competition. The organizing team and judges hold full power to nullify any entries or ban any participants in case of any form of misbehavior, argumentative debates, or any act deemed inappropriate to maintain the decorum of the event.
                                    <br/>We hope you have a wonderful time participating in the painting competition and wish you the best of luck!
                                </p> : 
                                <></>
                            }
                        </Modal>
                        <div className={styles.RoundsNavs} onClick={() => clickRound1()}>
                            <span >
                                <p className={round1Active ? styles.RoundsNavsNameActive : styles.RoundsNavsName}>ROUND-1</p>
                            </span>
                        </div>
                        <div className={styles.RoundsNavs} onClick={() => clickRound2()}>
                            <span ><p className={round2Active ? styles.RoundsNavsNameActive : styles.RoundsNavsName}>ROUND-2</p></span>
                        </div>
                        <div className={styles.RoundsNavs} onClick={() => clickRound3()}>
                            <span ><p className={round3Active ? styles.RoundsNavsNameActive : styles.RoundsNavsName}>ROUND-3</p></span>
                        </div>
                    </div>
                    {
                        round1Active ?
                        <div className={styles.EventDescriptionContainer}>
                        <p className={styles.EventDetailDescription}>
                            To participate in Spectrum, interested individuals need to <b>upload their existing artwork on the website provided</b>. The submitted artworks will then be evaluated by a panel of judges who will review and assess the quality, creativity, and originality of each piece. Based on the judges&apos; evaluations, the <b>top 100 artists will be selected</b> and invited to the next round, which is scheduled to take place offline on Day 1 of offline event.
                        </p>
                        <p onClick={handleOpen} className={styles.ViewMore}>Read more..</p>
                        </div> :
                        <></>
                    }
                    {
                        round2Active ?
                        <div className={styles.EventDescriptionContainer}>
                        <p className={styles.EventDetailDescription}>
                            In this round, the artists will be required to <b>create their paintings on a sheet of paper</b>, with a <b>pre-decided theme</b> to guide their creative process. The theme will be carefully selected to challenge the artists&apos; skills and inspire their creativity. The judges will carefully evaluate each painting, considering factors such as composition, technique, color scheme, and overall impact, before selecting the best paintings to proceed to the final round. The final round of the Spectrum competition will take place on the next day, where the selected paintings will be displayed for all to see.
                        </p>
                        <h5 onClick={handleOpen} className={styles.ViewMore}>Read more..</h5>
                        </div> :
                        <></>
                    }
                    {
                        round3Active ?
                        <div className={styles.EventDescriptionContainer}>
                        <p className={styles.EventDetailDescription}>
                            In this round, contestants must demonstrate their ability to quickly and effectively translate a given topic onto <b>canvas</b>. The participants only have a limited amount of time to complete their work, with judges closely observing their every brushstroke. The marks of both rounds will be summed up for finalizing the prizes for the whole event. 
                        </p>
                        <h5 onClick={handleOpen} className={styles.ViewMore}>Read more..</h5>
                        </div> :
                        <></>
                    }
                    <Button
                        variant='contained'
                        disableRipple={true}
                        sx={{
                            color: '#fff',
                            background: '#F9A826',
                            '&:hover': { background: '#F9A826', border: '', color: '#fff' },
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: "pointer",
                            marginTop: 5
                        }}
                        onClick={clickMoreDetails}
                    >
                        More Rules
                    </Button>
                    </div>
                </div>
                    <div className='col-12 col-md-6 col-lg-4 mt-4'>
                        <img className={styles.EventImage1} src={Image2}/>
                        <img className={styles.EventImage2} src={Image1}/>
                        <img className={styles.EventImage3} src={Image3}/>
                    </div>
            </div>
        </div>
    );
}

export default EventDetail;
