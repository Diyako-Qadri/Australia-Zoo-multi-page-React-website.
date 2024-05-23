import { NavLink, Outlet } from 'react-router-dom';
import { getImageURL } from '../../utils/function';
import styles from './Layout.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../../components/Footer/index.jsx';


const Layout = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const toggleBurger = () => {
    setOpenBurger();
  };
  const handeClick = () => {
    setOpenBurger(!openBurger);
  };
  const closeBurger = () => {
    setTimeout(toggleBurger, 500);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbar}>
          <NavLink className={styles.navLogo} to="/">
            <img className={styles.headerImage} src={getImageURL('pngwingMap.png')} alt="" />
          </NavLink>
          <div className={styles.navItem}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="mammals">Mammals</NavLink>
            <NavLink to="Birds">Birds</NavLink>
            <NavLink to="Reptiles">Reptiles</NavLink>
          </div>

          <div className={styles.hamburger}>
            <label className={styles.hamburgerMenu}>
              <input
                checked={openBurger}
                onClick={handeClick}
                type="checkbox"
              />
            </label>
          </div>
          <aside
            className={`${styles.sidebar} ${
              openBurger ? styles.showBurger : ''
            }`}
          >
            <nav>
              <motion.div
                className={styles.burgerNav}
                initial={{
                  opacity: 0,
                  y: 150,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                }}
                viewport={{ once: false }}
              >
                <motion.div
                  className={styles.navItemBurger}
                  initial={{
                    opacity: 0,
                    x: -80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  <NavLink onClick={closeBurger} to="/">
                    Home
                  </NavLink>
                </motion.div>
                <motion.div
                  className={styles.navItemBurger}
                  initial={{
                    opacity: 0,
                    x: -80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  <NavLink onClick={closeBurger} to="Mammals">
                    Mammals
                  </NavLink>
                </motion.div>

                <motion.div
                  className={styles.navItemBurger}
                  initial={{
                    opacity: 0,
                    x: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  <NavLink onClick={closeBurger} to="Birds">
                    Birds
                  </NavLink>
                </motion.div>

                <motion.div
                  className={styles.navItemBurger}
                  initial={{
                    opacity: 0,
                    x: -80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  <NavLink onClick={closeBurger} to="Reptiles">
                    Reptiles
                  </NavLink>
                </motion.div>
              </motion.div>
            </nav>
          </aside>
        </div>
      </nav>
      
      <Outlet />
     <Footer/>
    </>
  );
};

export default Layout;
