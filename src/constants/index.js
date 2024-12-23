import howMuch from '../../public/how-much.webp';
import randomPokemonGenerator from '../../public/random-pokemon-generator.webp';
import urbanWear from '../../public/urban-wear.webp';

const tags = [
  {
    id: 0,
    text: 'HTML',
    color: 'bg-tag-html-900 text-tag-html-200',
  },
  {
    id: 1,
    text: 'CSS',
    color: 'bg-tag-css-900 text-tag-css-200',
  },
  {
    id: 2,
    text: 'JavaScript',
    color: 'bg-tag-javascript-900 text-tag-javascript-200',
  },
  {
    id: 3,
    text: 'TypeScript',
    color: 'bg-tag-typescript-900 text-tag-typescript-200',
  },
  {
    id: 4,
    text: 'React',
    color: 'bg-tag-react-900 text-tag-react-200',
  },
  {
    id: 5,
    text: 'Tailwind CSS',
    color: 'bg-tag-tailwind-900 text-tag-tailwind-200',
  },
];

const projects = [
  {
    id: 0,
    name: 'howmuch',
    description: 'An app to track expenses and divide them among friends.',
    image: howMuch,
  },
  {
    id: 1,
    name: 'Urban Wear',
    description: 'Clothing e-commerce built with React.',
    image: urbanWear,
  },
  {
    id: 2,
    name: 'Random Pokémon Generator',
    description: 'Dynamic website that shows the user a random Pokémon with its info.',
    image: randomPokemonGenerator,
  },
];
