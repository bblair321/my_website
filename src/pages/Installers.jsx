import Card from '../components/Card/Card'
import styles from './Installers.module.css'

export default function Installers() {
  return (
    <section>
      <h2>Current Installers</h2>
      <ul className={styles.cardList}>
        <li>
          <Card 
          title="Escape From Tarkov"
          description="A collection of client side mods required for my server."
          imageUrl="Escape_from_Tarkov.png"
          />
        </li>
        <li>
          <Card 
          title="Valheim"
          description="A collection of client side mods."
          imageUrl="valheim.jpeg"
          />
        </li>
        <li>
          <Card 
          title="Schedule 1"
          description="A collection of client side mods."
          imageUrl="schedule_1.jpeg"
          />
        </li>
      </ul>
    </section>
  );
}
