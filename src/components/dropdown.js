import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './dropdown.module.css'
import * as DotSlash from '../copy/dotslash_magic'
import * as Mother from '../copy/mother-slaughter'
import * as Thalassic from '../copy/thalassic'
import * as Tales from '../copy/mischief'

const menuItems = [
    {name: 'Mother & Slaughter', mobileName: 'Slaughter', link: Mother.MOTHER_INDEX_PAGE.link},
    {name: 'Dot Slash Magic', mobileName: 'Magic', link: DotSlash.DOTSLASH_INDEX_PAGE.link},
    {name: 'The Thalassic Series', mobileName: 'Thalassic', link: Thalassic.THALASSIC_INDEX_PAGE.link},
    {name: 'Tales of Mischief & Fuckery', mobileName: 'Mischief', link: Tales.MISCHIEF_INDEX_PAGE.link}
]

const Dropdown = ({windowWidth}) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
        <>
        <div className={styles.navLinkItem}>
          <a onClick={handleOpen} className={styles.navLinkText}>books</a>
        </div>
        {open ? (
          <ul className={styles.menu}>
            {
                menuItems.map((item) => {
                    return (
                        <li className={styles.menuItem}>
                            <a href={item.link} id={item.name} className={styles.itemText}>
                               {!!windowWidth && windowWidth > 750 ? item.name : item.mobileName}
                            </a>
                        </li>
                    )
                })
            }
          </ul>
        ) : null}
      </>

    )
}

export default Dropdown;