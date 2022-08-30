import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BookCover from '../components/index/book-cover';
import * as styles from './index.module.css'

const scourge_one = "Marlin Paz and her girlfriend Gnamma Farr arrive in the harbor city of Brume after twenty-five days on the Salt, and are forbidden to come ashore."
const scourge_two = "Meanwhile, Axioma Nation, CEO of the world's leading corporation, receives an urgent message from a colleague overseas that makes the climate crisis the least of her concerns."
const scourge_three = "And Heron Howsley must reckon with her family's legacy and her own demons while facing down tornados and discovering that her love for her hometown runs deeper than she knew."

const salt_one = "When Bird drinks, she blips. And lately, she's been blipping a lot."
const salt_two = "Bird Howsley and Sargo Paz are struggling to find their identities in a world where biochips are ubiquitous but habitable space is at a premium."
const salt_three = "When their search for answers takes a dangerous turn, find themselves in the crosshairs of a dangerous criminal organization that wants them dead."
const salt_four = "Forced to sail into the Salt, they battle the dangers of an unpredictable ocean, and discover pirates, an underground plot, and their true feelings for each other."

const IndexPage = () => {

    // const [windowWidth, setWindowWidth] = useState(0);

    // useEffect(() => {
    //     checkWindowWidth();
    //     return () => window.removeEventListener('resize', checkWindowWidth)
    // });

    // const checkWindowWidth = () => {
    //     if (typeof window !== undefined) {
    //     const width = window.innerWidth;
    //     setWindowWidth(width);
    //     window.addEventListener('resize', checkWindowWidth);
    //     }
    // }

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <div className={styles.block}>
          <div className={styles.stack}>
              <BookCover
                src={"scourge_cover_nashville_small"}
                description={[scourge_one, scourge_two, scourge_three]}
                link={"/free-novella"}
                styles={{descriptionBlock: styles.descriptionBlockScourge}}
              />
              <Link to="/free-novella">
                <button className={styles.buttonScourge}>DOWNLOAD FREE</button>
              </Link>
            </div>
            <div className={styles.stack}>
              <BookCover
                src={"salt_cover_nashville_small"}
                description={[salt_one, salt_two, salt_three, salt_four]}
                link={"/newsletter"}
                styles={{descriptionBlock: styles.descriptionBlockSalt}}
              />
              <Link to="/newsletter">
                <button className={styles.buttonSalt}>COMING SOON</button>
              </Link>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default IndexPage