
import styles from './ReadMoreBtn.module.css'

const ReadMoreBtn = ({updateFunction}) => {

    const clickhandler = () => {
        updateFunction(prevState => !prevState);
        console.log(updateFunction)
    }
    return (
        <div>
          <button onClick={clickhandler} className={styles.readMoreBtn}>Read More</button>
        </div>
    )
};

export default ReadMoreBtn
