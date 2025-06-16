import styles from './Card.module.css';
import React from 'react';

function Card({ title, description, imageUrl }) {
  return (
    <div className={styles.card}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title || 'Featured item'}
          className={styles.cardImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x200/CCCCCC/333333?text=Image+Missing`;
          }}
        />
      ) : (
        <div className={styles.cardImagePlaceholder}>
          <span className={styles.noImageText}>No Image</span>
        </div>
      )}
      <div className={styles.cardInfo}>
        {title && (
          <h3 className={styles.cardTitle}>{title}</h3>
        )}
        {description && (
          <p className={styles.cardDescription}>{description}</p>
        )}
      </div>
    </div>
  );
}

export default Card;