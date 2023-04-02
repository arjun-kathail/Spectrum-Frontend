/* eslint-disable react/prop-types */
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import styles from './styles.module.css';
import Tooltip from '@mui/material/Tooltip';

function TeamCard(props) {
    return (
        <div className={styles.wrapper}>
            <div href="" className={styles.card}>
                <img
                    src={props.image}
                    className={styles.card__image}
                    alt={props.name}
                />
                <div className={styles.card__overlay}>
                    <div className={styles.card__header}>
                        <svg
                            className={styles.card__arc}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path />
                        </svg>
                        <img
                            className={styles.card__thumb}
                            src={props.image}
                            alt="Display Image circle"
                        />
                        <div className={styles.card__header__text}>
                            <h3 className={styles.card__title}>{props.name}</h3>
                        </div>
                    </div>
                    {/* <div className={styles.card__tagline}>{props.committee}</div> */}
                    <div className={styles.icons}>
                        {props.insta !== 'NA' && (
                            <a href={props.insta} target="_blank" rel="noreferrer">
                                <InstagramIcon className={styles.fab} />
                            </a>
                        )}
                        {props.linkedin !== 'NA' && (
                            <a href={props.linkedin} target="_blank" rel="noreferrer">
                                <LinkedInIcon className={styles.fab} />
                            </a>
                        )}
                        {props.github !== 'NA' && (
                            <a href={props.github} target="_blank" rel="noreferrer">
                                <GitHubIcon className={styles.fab} />
                            </a>
                        )}
                        {props.email !== 'NA' && (
                            <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">
                                <Tooltip title={props.email}>
                                    <EmailIcon className={styles.fab} />
                                </Tooltip>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;