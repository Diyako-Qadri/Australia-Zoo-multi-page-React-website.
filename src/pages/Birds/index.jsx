import Hero from '../../components/Hero';
// import styles from './Birds.module.css'
import { birds } from '../../data/data';

const Birds = () => {
    return (
        <div>
           <Hero
           isHomePage={false} animalGroup={birds} backgroundImage={"birdsBackground.jpg"} pageTitle={"Birds"} subTitle={"Step into the vibrant world of Australian birds. Meet the majestic Cockatoo, the elusive Cassowary, and the iconic Kookaburra. Explore their habitats, behaviors, and unique characteristics."}/>

        </div>
    )
};

export default Birds
