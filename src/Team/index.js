/* eslint-disable react/prop-types */
import { React } from 'react';
import GradientBackground from '../Components/GradientBackground';
import TeamCard from '../Components/TeamCard';
import Footer from '../Components/Footer';
import team from '../assets/team.json';
import styles from './styles.module.css';

function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../assets/team', false, /\.jpg/));

function Team() {
    console.log(images);
    return (
        <div className={styles.wrapper}>
            <GradientBackground>
                <div className={styles.scrollbox}>
                    {Object.keys(team).map((key, ind) => (
                        <div key={ind} className={styles.committeeWrapper} style={key == 'Conveners' ? { paddingTop: '23vh' } : {}}>
                            <div key={ind} className={styles.committee}> {key} </div>
                            <div className={styles.members} key={ind}>
                                {team[key].map((member, i) => (
                                    <TeamCard
                                        image={images[member.image]}
                                        key={i}
                                        name={member.name}
                                        insta={member.instagram}
                                        linkedin={member.linkedin}
                                        email={member.email}
                                        github="NA"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                    <Footer />
                </div>
            </GradientBackground>
        </div>
    );
}

export default Team;