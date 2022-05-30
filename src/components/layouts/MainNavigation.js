import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(props){
    return (
        <header>
        <nav>
            <ul className={classes.ul}>
                <li className={classes.li}><Link to="/" className={classes.link}>Home</Link></li>
                <li className={classes.li}><Link to="/contact" className={classes.link}>Contact</Link></li>
                <li className={classes.li}><Link to="/projects" className={classes.link}>Projects</Link></li>
                <li className={classes.li}><Link to="/about" className={classes.link}>About</Link></li>
            </ul>
            </nav>
            </header>
            )
}

export default MainNavigation;