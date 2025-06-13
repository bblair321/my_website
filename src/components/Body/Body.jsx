import styles from './Body.module.css';
import Card from '../Card/Card';

const cardsData = [
  {
    title: 'Escape From Tarkov',
    description: 'Contains client side mods mainly intended to be used along side my hosted server.',
    imageUrl: '/my_website/Escape_from_Tarkov.jpg',
  },
  {
    title: 'Valheim',
    description: 'Contains mods, that are all mainly client side.',
    imageUrl: '/my_website/valheim.jpeg',
  },
  {
    title: 'Schedule 1',
    description: 'A collection of mods that enhance gameplay.',
    imageUrl: '/my_website/schedule_1.jpeg',
  },
];

function Body() {
  return (
    <main className={styles.body}>
      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}

export default Body;
