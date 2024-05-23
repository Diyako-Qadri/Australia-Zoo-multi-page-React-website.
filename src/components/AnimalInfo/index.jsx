import { getImageURL } from "../../utils/function";
import styles from './AnimalInfo.module.css';

const AnimalInfo = ({
  name,
  lifespan,
  group,
  image,
  food,
  length,
  weight,
  found,
  description,
  setReadMore,
}) => {
  return (
    <div className={styles.animalInfoContainer}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.ImageAndFactsContainer}>
        <img className={styles.animalImage} src={getImageURL(image)} alt={name} />
        <div className={styles.animalFact}>
          <p>Lifespan: {lifespan}</p>
          <p>Group: {group}</p>
          <p>Food: {food}</p>
          <p>Length: {length}</p>
          <p>Weight: {weight}</p>
          <p>Found: {found}</p>
        </div>
      </div>
      <div className={styles.animalDescription}>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default AnimalInfo;