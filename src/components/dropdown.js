import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './dropdown.module.css'

const menuItems = [
    {name: 'Dot Slash Magic', mobileName: 'Magic', link: '/artificial-magic'},
    {name: 'Mother & Slaughter', mobileName: 'Slaughter', link: '/mother-and-slaughter'},
    {name: 'The Thalassic Series', mobileName: 'Thalassic', link: '/thalassic-series'},
    {name: 'Tales of Mischief & Fuckery', mobileName: 'Mischief', link: '/tales-of-mischief'}
]

const Dropdown = ({windowWidth}) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
        <>
        <div className={styles.navLinkItem}>
          <a onClick={handleOpen} className={styles.navLinkText}>Books</a>
        </div>
        {open ? (
          <ul className={styles.menu}>
            {
                menuItems.map((item) => {
                    return (
                        <li className={styles.menuItem}>
                            <a href={item.link} id={item.name} className={styles.itemText} target='_blank' rel="noopener">
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