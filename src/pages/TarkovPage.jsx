import React from 'react';
import styles from './Tarkov.module.css'

export default function TarkovPage() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Escape From Tarkov Installer</h2>
      <div className={styles.imageContainer}>
        <img 
          src="/my_website/Escape_from_Tarkov.png" 
          alt="Tarkov" 
          width={297} 
          height={170}
          className={styles.gameImage}
        />
      </div>
      <p className={styles.description}>
        This installer includes all the required client-side mods to join our Escape From Tarkov server.
      </p>
      <ul className={styles.featureList}>
        <li className={styles.featureItem}>Automatic mod configuration</li>
        <li className={styles.featureItem}>Compatible with latest server version</li>
      </ul>
      <a
        href="https://github.com/bblair321/MPTModInstaller/releases/latest"

        className={styles.downloadButton}
        download
      >
        Download Installer
      </a>
    </section>
  );
}