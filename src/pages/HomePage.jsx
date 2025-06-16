import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel/Carousel';

export default function HomePage() {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    fetch('/my_website/featured.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const itemsWithCorrectedImageUrls = data.map(item => ({
          ...item,
          imageUrl: `/my_website/${item.imageUrl}`
        }));
        setFeaturedItems(itemsWithCorrectedImageUrls);
      })
      .catch((err) => console.error('Failed to load featured items:', err));
  }, []);

  return (
    <section>
      <h2>Mod installers and custom mods for your favorite PC games</h2>
      <Carousel items={featuredItems} />
    </section>
  );
}
