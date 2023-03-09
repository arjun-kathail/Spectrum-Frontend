/* eslint-disable react/prop-types */
import { React } from 'react';
import styles from './styles.module.css';

function GradientBackground(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <div className={styles.gradient1}></div>
                <div className={styles.gradient2}></div>
            </div>
            {props.children}
        </div>
    );
}

export default GradientBackground;