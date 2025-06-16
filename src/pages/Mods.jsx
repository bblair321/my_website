import React from 'react';
import styles from './Mods.module.css';

export default function ModsPage() {
  const mods = [
    {
      id: 1,
      title: "Fivem Location Display",
      description: "A simple Fivem mod that displays your current location in the game world. Useful for navigation and roleplay.",
      image: "location_mod.png",
      category: "visual",
      version: "v1.0.0",
      downloadUrl: "https://github.com/bblair321/fivem-streetnames/archive/refs/tags/1.0.0.zip"
    },
    {
      id: 2,
      title: "Police Radio UI for FiveM",
      description: "A sleek, futuristic police radio user interface for FiveM servers integrated with PMA-Voice and FivePD. This resource lets on-duty FivePD officers join and leave voice radio channels through an easy-to-use UI, toggleable with F3, complete with radio talking animations and sound effects",
      image: "fivepdradio.jpg",
      category: "gameplay",
      version: "v1.0.0",
      downloadUrl: "https://github.com/bblair321/fivepd-police-radio/archive/refs/heads/master.zip"
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mods Collection</h1>

      <div className={styles.modsGrid}>
        {mods.map((mod) => (
          <div key={mod.id} className={styles.modCard} data-category={mod.category}>
            <div className={styles.modImageContainer}>
              <img
                src={mod.image}
                alt={mod.title}
                className={styles.modImage}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Nb2QgSW1hZ2U8L3RleHQ+PC9zdmc+';
                }}
              />
            </div>

            <h3 className={styles.modTitle}>{mod.title}</h3>
            <p className={styles.modDescription}>{mod.description}</p>

            <div className={styles.modMeta}>
              <span className={styles.modCategory}>
                {mod.category}
              </span>
              <span className={styles.modVersion}>
                {mod.version}
              </span>
            </div>

            <a
              href={mod.downloadUrl}
              download
              className={styles.downloadButton}
            >
              Download Mod
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
