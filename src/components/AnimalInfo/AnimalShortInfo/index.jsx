import { getImageURL } from '../../../utils/function';
import styles from '../AnimalInfo.module.css';
import ReadMoreBtn from '../../ReadMoreBtn';

const AnimalShortInfo = ({
  name,
  group,
  image,
  food,
  description,
  readMore,
  setReadMore,
  lifespan,
  length,
  weight,
  found,
}) => {
  return (
    <div className={styles.animalInfoContainer}>
      {!readMore ? (
        <>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.ImageAndFactsContainer}>
            <img
              className={styles.animalImage}
              src={getImageURL(image)}
              alt={name}
            />
            <div className={styles.animalFact}>
              <p>
                Group: <a href={`/${group.toLowerCase()}`}>{group}</a>
              </p>
              <p>Food: {food}</p>
            </div>
          </div>
          <div className={styles.animalDescription}>
            <p>{description.slice(0, 200)}...</p>
          </div>
          <div className={styles.buttonContainer}>
            <ReadMoreBtn updateFunction={setReadMore} />
          </div>
        </>
      ) : (
        <div className={styles.animalInfoContainer}>
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.ImageAndFactsContainer}>
            <img
              className={styles.animalImage}
              src={getImageURL(image)}
              alt={name}
            />
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
          <div className={styles.buttonContainer}>
            {' '}
            <button
              onClick={() => setReadMore(false)}
              className={styles.readLessBtn}
            >
              Read Less
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalShortInfo;
