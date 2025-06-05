import Card from './Card.jsx'

const cardsData = [
        {
            title: 'Escape From Tarkov',
            description: 'Easy install for popular mods.',
            imageUrl: '/my_website/Escape_from_Tarkov.jpg',
        },
        {
            title: 'Valheim',
            description: 'Advanced installer with customization.',
            imageUrl: '/my_website/valheim.jpeg',
        },
        {
            title: 'Schedule 1',
            description: 'Lightweight and fast installer.',
            imageUrl: '/my_website/schedule_1.jpeg',
        },
    ];
function Body() {
  return (
    <main className="body">
      <div className="cards-container">
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
