import { motion } from 'framer-motion';
import { getImageURL } from '../../utils/function';
import styles from './Hero.module.css';
import Sidebar from '../Sidebar';
import AnimalInfo from '../AnimalInfo';
import { useState, useEffect } from 'react';
import AnimalShortInfo from '../AnimalInfo/AnimalShortInfo';

const Hero = ({
  backgroundImage,
  pageTitle,
  subTitle,
  animalGroup,
  isHomePage,
}) => {
  const [displayMessage, setDisplayMessage] = useState(null);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    setReadMore(false);
  }, [displayMessage]);

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(#00000075, #0000004d), url(${getImageURL(
          backgroundImage
        )})`,
      }}
    >
      <Sidebar
        setDisplayMessage={setDisplayMessage}
        animalGroup={animalGroup}
      />
      <div className={styles.mainContent}>
        <div className={styles.headlineContainer}>
          {!displayMessage ? (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 150 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2 },
                }}
                viewport={{ once: true }}
              >
                The{' '}
                <motion.span
                  initial={{ opacity: 0, transition: { delay: 2 } }}
                  whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
                  viewport={{ once: true }}
                  className={styles.heroTextColor}
                >
                  {pageTitle}
                </motion.span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -150 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1.2 },
                }}
                viewport={{ once: true }}
                className={styles.welcomeMessageHome}
              >
                {subTitle}
              </motion.div>
            </>
          ) : isHomePage ? (
            <AnimalShortInfo
              name={displayMessage.species}
              description={displayMessage.description}
              image={displayMessage.image}
              food={displayMessage.food}
              group={displayMessage.group}
              readMore={readMore}
              setReadMore={setReadMore}
              lifespan={displayMessage.lifespan}
              length={displayMessage.length}
              weight={displayMessage.weight}
              found={displayMessage.found}
            />
          ) : (
            <AnimalInfo
              name={displayMessage.species}
              description={displayMessage.description}
              image={displayMessage.image}
              lifespan={displayMessage.lifespan}
              group={displayMessage.group}
              food={displayMessage.food}
              length={displayMessage.length}
              weight={displayMessage.weight}
              found={displayMessage.found}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
