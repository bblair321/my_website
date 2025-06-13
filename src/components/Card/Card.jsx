import styles from './Card.module.css';

function Card({ title, description, imageUrl }) {
  return (
    <div className={styles.card}>
      {imageUrl && (
        <img src={imageUrl} alt={title} className={styles.cardImage} />
      )}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default Card;
