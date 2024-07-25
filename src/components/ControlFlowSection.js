// src/components/ControlFlowSection.js

import React from 'react';
import styles from '../styles/ControlFlowSection.module.css';

const ControlFlowSection = () => {
    return (
        <div className={styles.controlFlowSection}>
            <div className={styles.textContent}>
                <h2>Control the flow.</h2>
                <h3>Work faster.</h3>
                <p>
                    Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
                    Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
                </p>
                <button className={styles.startButton}>Start for free</button>
            </div>
            <div className={styles.imageContent}>
                <img src={`${process.env.PUBLIC_URL}/img/controltheflow.svg`} alt="Control the flow" />
            </div>
        </div>
    );
};

export default ControlFlowSection;
