import React from 'react';
import styles from './Schedule.module.css'

export default function SchedulePage() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Schedule 1 Lightweight Installer</h2>
      <div className={styles.imageContainer}>
        <img 
          src="/my_website/schedule_1.jpeg" 
          alt="Schedule 1" 
          width={297} 
          height={170}
          className={styles.gameImage}
        />
      </div>
      <p className={styles.description}>
        Designed for casual players who want a streamlined mod experience with minimal setup.
      </p>
      <ul className={styles.featureList}>
        <li className={styles.featureItem}>Automatic mod configuration</li>
        <li className={styles.featureItem}>Compatible with latest version</li>
      </ul>
      <button className={styles.downloadButton}>Download Installer</button>
    </section>
  );
}