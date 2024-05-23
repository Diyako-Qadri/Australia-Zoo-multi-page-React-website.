import styles from './Sidebar.module.css';
import { allAnimals, mammals, reptiles, birds } from '../../data/data';
const Sidebar = ({ animalGroup, setDisplayMessage}) => {
  const handleAnimalClick = animal => {
    setDisplayMessage(prevMessage => (prevMessage === animal ? null : animal));
    console.log(animal);
  };

  return (
    <div className={styles.sidebarContent}>
       {!animalGroup ? <h3 className={styles.sidebarTitle}>All Animals</h3> :
      animalGroup  === mammals ? <h3 className={styles.sidebarTitle}>Mammals</h3>:
      animalGroup === birds ? <h3 className={styles.sidebarTitle}>Birds</h3>:
      <h3 className={styles.sidebarTitle}>Reptiles</h3>}
    <div className={styles.sidebarContainer}>
     
      <div className={styles.sidebarItems}>
        {!animalGroup
          ? allAnimals.map((item, index) => (
            <p onClick={() => handleAnimalClick(item)} key={index}>
                {item.species}
              </p>
            ))
            : animalGroup === mammals
            ? mammals.map((item, index) => (
              <p onClick={() => handleAnimalClick(item)} key={index}>
                {item.species}
              </p>
            ))
            : animalGroup === birds
            ? birds.map((item, index) => (
              <p onClick={() => handleAnimalClick(item)} key={index}>
                {item.species}
              </p>
            ))
            : reptiles.map((item, index) => (
              <p onClick={() => handleAnimalClick(item)} key={index}>
                {item.species}
              </p>
            ))}
      </div>
    </div></div>
  );
};


export default Sidebar;
