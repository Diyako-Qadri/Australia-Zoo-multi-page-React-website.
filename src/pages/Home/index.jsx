
import styles from './Home.module.css';
import Hero from '../../components/Hero';


const Home = () => {
  return (
    <section className={styles.homePage}>
      <Hero
      isHomePage={true}
      backgroundImage={'Homepage.jpg'} pageTitle={'Australian Zoo'} subTitle={"Welcome to our Australian wildlife sanctuary! Explore the wonders of the Outback and its unique inhabitants, from mammals and birds to reptiles. We're thrilled to have you join us on this adventure through Australia's rich biodiversity. Enjoy your visit!"}/>
    </section>
  );
};

export default Home;
