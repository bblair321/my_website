import React from 'react';
import styles from './Valheim.module.css'

export default function ValheimPage() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Valheim Mod Installer</h2>
      <div className={styles.imageContainer}>
        <img 
          src="/my_website/valheim.jpeg" 
          alt="Valheim" 
          width={297} 
          height={170}
          className={styles.gameImage}
        />
      </div>
      <p className={styles.description}>
        A lightweight installer for installing mods in Valheim.
      </p>
      <ul className={styles.featureList}>
        <li className={styles.featureItem}>Automatic mod configuration</li>
        <li className={styles.featureItem}>Compatible with latest version</li>
      </ul>
      <button className={styles.downloadButton}>Download Installer</button>
    </section>
  );
}