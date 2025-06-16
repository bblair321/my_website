import { useRef } from 'react';
import Card from '../Card/Card';
import styles from './Carousel.module.css';

function Carousel({ title, items }) {
  const scrollContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>{title}</h2>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContent} ref={scrollContainerRef}>
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
            />
          ))}
        </div>

        <button
          onClick={() => scroll(-300)}
          className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
          aria-label="Scroll left"
        >
          &#10094;
        </button>
        <button
          onClick={() => scroll(300)}
          className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
          aria-label="Scroll right"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Carousel;