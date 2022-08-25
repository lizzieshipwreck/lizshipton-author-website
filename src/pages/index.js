import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import * as styles from './index.module.css'

const scourge_one = "Marlin Paz and her girlfriend Gnamma Farr arrive in the harbor city of Brume after twenty-five days on the Salt, and are turned away from the port. What happened since they lost contact with the land?"
const scourge_two = "Axioma Nation, CEO of the world's leading corporation, receives an urgent message from a colleague overseas that makes the climate crisis the least of her concerns."
const scourge_three = "Heron Howsley must reckon with her family's legacy and her own demons while facing down tornados and discovering that her love for her hometown runs deeper than she knew."

const salt_one = "When Bird drinks, she blips. And lately, she's been blipping a lot."
const salt_two = "Bird Howsley and Sargo Paz are struggling to find their identities in a world where biochips are ubiquitous but habitable space is at a premium."
const salt_three = "When their search for answers takes a dangerous turn, find themselves in the crosshairs of a dangerous criminal organization that wants them dead. Forced to sail into the Salt, they battle the dangers of an unpredictable ocean, and discover pirates, an underground plot, and their true feelings for each other."

const IndexPage = () => {

  return (
    <Layout pageTitle={"Home"}>
        <div className={styles.content}>
          <div className={styles.block}>
          <div className={styles.stack}>
            <Link to="/free-novella">
              <div className={styles.hover}>
                <div className={styles.descriptionBlockScourge}>
                  <p className={styles.description}>{scourge_one}</p>
                  <p className={styles.description}>{scourge_two}</p>
                  <p className={styles.description}>{scourge_three}</p>
                </div>
                <StaticImage
                  src={"../images/scourge_cover_nashville_small.jpg"}
                  placeholder="blurred"
                  quality={100}
                  height={475}
                  className={styles.bookCover}
                />
              </div>
            </Link>
              <Link to="/free-novella">
                <button className={styles.buttonScourge}>DOWNLOAD FREE</button>
              </Link>
            </div>
            <div className={styles.stack}>
            <Link to="/newsletter">
              <div className={styles.hover}>
                <div className={styles.descriptionBlockSalt}>
                  <p className={styles.description}>{salt_one}</p>
                  <p className={styles.description}>{salt_two}</p>
                  <p className={styles.description}>{salt_three}</p>
                </div>
                <StaticImage
                  src={"../images/salt_cover_nashville_small.jpg"}
                  placeholder="blurred"
                  quality={100}
                  height={475}
                  className={styles.bookCover}
                />
              </div>
            </Link>
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