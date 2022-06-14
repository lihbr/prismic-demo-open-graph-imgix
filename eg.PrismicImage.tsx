import { useSinglePrismicDocument, PrismicImage } from '@prismicio/react';

const App = () => {
  const [ home ] = useSinglePrismicDocument('home');

  return home
    ? <PrismicImage field={home.data.image} imgixParams={{ sat: 100 }} />
    : null;
};

export default App;