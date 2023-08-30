import * as React from 'react'
import { useEffect, useState } from 'react'
import Nav from './nav';
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as styles from './header.module.css'

const Header = ({siteName, pageName}) => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const checkWindowWidth = () => {
        if (typeof window !== undefined) {
        const width = window.innerWidth;
        setWindowWidth(width);
        window.addEventListener('resize', checkWindowWidth);
        }
    }

    const setHamburgerMenuState = () => {
        if (windowWidth > 0 ){
            const shouldStartOpen = windowWidth > 500
            setIsHamburgerOpen(shouldStartOpen)
        }
    }

    useEffect(() => {
        checkWindowWidth();
        setHamburgerMenuState();
        return () => window.removeEventListener('resize', checkWindowWidth)
    }, [windowWidth]);

    return (
        <div className={styles.container} id={styles.stickyParallaxHeader}>
            <title>{siteName} | {pageName}</title>
            <Link to="/">
                {!!windowWidth && windowWidth > 500 ? (
                    <StaticImage
                        alt="Liz Shipton logo with compass"
                        src="../images/logo transparent.png"
                        placeholder="blurred"
                        quality={100}
                        width={350}
                        className={styles.logo}
                    />
                ) : (
                    !isHamburgerOpen ? (
                    <StaticImage
                        alt="Liz Shipton logo with compass"
                        src="../images/logo transparent.png"
                        placeholder="blurred"
                        quality={100}
                        width={250}
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