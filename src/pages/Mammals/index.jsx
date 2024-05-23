import Hero from '../../components/Hero';
import { mammals } from '../../data/data';

const Mammals = () => {
  return (
    <div>
      <Hero
      isHomePage={false}
        animalGroup={mammals}
        pageTitle={'Mammals'}
        backgroundImage={'mammalsBackground.jpg'}
        subTitle={
          'Embark on an adventure through the fascinating realm of Australian mammals. Encounter the spiky Echidna, the feisty Tasmanian Devil, and the adorable Quokka. Explore their habitats, behaviors, and role in the ecosystem.'
        }
      />
    </div>
  );
};

export default Mammals;
