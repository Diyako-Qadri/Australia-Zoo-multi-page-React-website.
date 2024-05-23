import Hero from '../../components/Hero';
import { reptiles } from '../../data/data';

import styles from './Reptiles.module.css'

const Reptiles = () => {
    return (
        <div>
          <Hero
          isHomePage={false}
          animalGroup={reptiles} pageTitle={"Reptiles"} backgroundImage={"reptilesBackground.jpg"} subTitle={"Discover the intriguing world of reptiles. Encounter the graceful Hawksbill turtle, the formidable Perentie lizard, and the mesmerizing Frillneck lizard. Learn about their habitats, adaptations, and survival strategies."}/>

        </div>
    )
};

export default Reptiles
