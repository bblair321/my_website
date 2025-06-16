import Card from '../components/Card/Card';
import styles from './Installers.module.css';

export default function Installers() {
  const installers = [
    {
      id: 1,
      title: "Escape From Tarkov",
      description: "A collection of client side mods required for my server.",
      imageUrl: "Escape_from_Tarkov.png"
    },
    {
      id: 2,
      title: "Valheim",
      description: "A collection of client side mods.",
      imageUrl: "valheim.jpeg"
    },
    {
      id: 3,
      title: "Schedule 1",
      description: "A collection of client side mods.",
      imageUrl: "schedule_1.jpeg"
    }
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Installers</h1>
      <div className={styles.installersGrid}>
        {installers.map(installer => (
          <Card 
            key={installer.id}
            title={installer.title}
            description={installer.description}
            imageUrl={installer.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
