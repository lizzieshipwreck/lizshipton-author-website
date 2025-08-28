import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './dropdown.module.css'

const menuItems = [
    {name: 'Artificial Magic', mobileName: 'Magic', link: '/artificial-magic'},
    {name: 'The Thalassic Series', mobileName: 'Thalassic', link: '/thalassic-series'},
    {name: 'Tales of Mischief & F*ckery', mobileName: 'Mischief', link: '/tales-of-mischief'}
]

const Dropdown = ({windowWidth}) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
        <>
        <div className={styles.navLinkItem}>
          <a onClick={handleOpen} className={styles.navLinkText}>Series</a>
        </div>
        {open ? (
          <ul className={styles.menu}>
            {
                menuItems.map((item) => {
                    return (
                        <li className={styles.menuItem}>
                            <Link to={item.link} id={item.name} className={styles.itemText}>
                               {!!windowWidth && windowWidth > 750 ? item.name : item.mobileName}
                            </Link>
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