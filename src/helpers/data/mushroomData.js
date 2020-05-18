const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Super Mario Mushroom',
    description: 'A very magical mushroom.',
    imgUrl: 'https://vignette.wikia.nocookie.net/nintendo/images/5/5b/Mushroom1.jpg/revision/latest?cb=20111104224030&path-prefix=en',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Agaricus bisporus',
    description: 'A very edible mushroom sold in stores world wide.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/ChampignonMushroom.jpg/220px-ChampignonMushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Amanita phalloides ',
    description: 'A very deadly mushroom in a bite size package.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Amanita_phalloides_young.jpg/220px-Amanita_phalloides_young.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom4',
    name: 'Amanita ocreata',
    description: 'A very poisonous mushroom that grows in western North America.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Amanita_ocreata_79782.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Conocybe filaris',
    description: 'A common poisonous mushroom that grows in the Pacific Northwest.',
    imgUrl: 'https://www.mykoweb.com/CAF/photos/large/Pholiotina_rugosa%28fs-02%29.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Button Mushrooms',
    description: 'These are also known as white mushrooms or baby mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Button-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Gyromitra esculenta',
    description: 'These mushrooms normally fruits in sandy soils under coniferous trees in spring and early summer.',
    imgUrl: 'https://www.first-nature.com/fungi/images/ascomycetes/gyromitra-esculenta3.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Cremini Mushrooms',
    description: 'These are like the button mushrooms, but they have a deeper flavor.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Cremini-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Portobello Mushrooms',
    description: 'These mushrooms are the final full grown stage of button mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Portobello-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Oyster Mushrooms',
    description: 'These mushrooms offer a mild and sweet flavor and make a great transition from portobellos into more adventurous types of mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Oyster-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Chanterelle Mushrooms',
    description: 'These mushrooms have a sweet and peppery flavor that goes well with eggs.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chanterelle-Mushrooms2.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Porcini Mushrooms',
    description: 'These mushrooms have a distinctive taste that some people compare to sourdough bread, with slightly creamy and nutty flavors.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Porcini-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Laetiporus Mushroom',
    description: 'This mushroom grows in clusters on the side of trees and is a beautiful orange color. Normally deep orange in the middle with a lighter orange color around the edges.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chicken-Of-The-Woods-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Black Trumpet Mushrooms',
    description: 'This mushrooms flavor is quite sought after. People describe the flavor as rich and smoky. When allowed to dry, their flavor even takes on hints of black truffle.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/black-chanterelles.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Wood Blewit Mushrooms',
    description: 'Wood blewits are considered edible, although they may cause allergic reactions in some people. Especially when eaten raw, although they can cause reactions even when cooked.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Wood-Blewit-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Morel Mushrooms',
    description: '​Morels have a nutty, earthy flavor. They have a meaty texture but they are still tender.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Morel-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Enoki Mushrooms',
    description: 'They come in large clusters of tiny mushrooms with very long stems and small caps.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/shutterstock_1013649136.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Maitake Mushrooms​',
    description: 'These mushrooms are too tough to eat once they reach any reasonable size. However, they are used for their medicinal properties',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Maitake-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Reishi Mushrooms',
    description: 'It is quite rare in the wild, but luckily it is now cultivated on hardwood logs or sawdust on a commercial scale.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Reishi-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Lion\'s Mane Mushrooms',
    description: 'Lion\'s mane grows in shaggy clumps on the side of trees and can look a bit like stalactite formations that hang inside of caves.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Lions-Mane-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

const basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const pickAMushroom = () => {
  const oneMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  basket.push(oneMushroom);
  basket.forEach((mushroom) => {
    const unfortunate = document.getElementsByClassName('alert')[0];
    if (unfortunate.classList.contains('hide') === false) {
      unfortunate.classList.add('hide');
    }
    if (mushroom.isPoisonous === true) {
      basket.pop();
      basket.splice([Math.floor(Math.random() * basket.length)], 1);
      basket.splice([Math.floor(Math.random() * basket.length)], 1);
      if (unfortunate.classList.contains('hide') === true) {
        unfortunate.classList.remove('hide');
      }
    }
    if (mushroom.isDeadly === true) {
      basket.pop();
      basket.splice(0, basket.length);
      if (unfortunate.classList.contains('hide') === true) {
        unfortunate.classList.remove('hide');
      }
    }
    if (mushroom.isMagic === true) {
      basket.pop();
      mushrooms.forEach((shroom) => {
        if (shroom.isDeadly === false && shroom.isMagic === false && shroom.isPoisonous === false) {
          basket.push(shroom);
        }
        if (unfortunate.classList.contains('hide') === false) {
          unfortunate.classList.add('hide');
        }
      });
    }
  });
};

export default { getMushrooms, getBasket, pickAMushroom };
