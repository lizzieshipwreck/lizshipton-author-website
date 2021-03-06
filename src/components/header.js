import * as React from 'react'
import { useEffect, useState } from 'react'
import Nav from './nav';
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const Header = ({siteName, pageName}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    useEffect(() => {
        checkWindowWidth();
        return () => window.removeEventListener('resize', checkWindowWidth)
    });

    const checkWindowWidth = () => {
        if (typeof window !== undefined) {
        const width = window.innerWidth;
        setWindowWidth(width);
        window.addEventListener('resize', checkWindowWidth);
        }
    }

    return (
        <div className={styles.container}>
            <title>{siteName} | {pageName}</title>
            <Link to="/">
                {!!windowWidth && windowWidth > 500 ? (
                    <StaticImage
                        alt="Liz Shipton logo with compass"
                        src="../images/liz_shipton_logo.png"
                        placeholder="blurred"
                        quality={100}
                        width={500}
                        className={styles.logo}
                    />
                ) : (
                    !isHamburgerOpen ? (
                        <StaticImage
                            alt="Liz Shipton compass"
                            src="../images/compass_logo.png"
                            placeholder="blurred"
                            quality={100}
                            width={50}
                            className={styles.logo}
                        />
                    ) : null
                )
                }
            </Link>
            <Nav
                windowWidth={windowWidth}
                isHamburgerOpen={isHamburgerOpen}
                setIsHamburgerOpen={setIsHamburgerOpen}
            />
        </div>

    )
}

export default Header;