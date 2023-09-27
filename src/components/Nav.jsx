// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

// TODO
// TODO : About Me, Portfolio, Contact, and Resume - required links per assignment README
// TODO

export default function Nav() {
    // The Navbar component will render each of the Link elements in the links prop
    const currentPagePath = useLocation().pathname;
    const dormantPage = "nav-link text-light";
    const activePage = dormantPage + " active";

    return (
        <header>
            <img src="/nazarlik.svg" width="75px" height="75px"></img>
            <h1>Steve Reuterskiold</h1>
        <Navbar
            links={[
                <Link key={1} className={currentPagePath === "/" ? activePage : dormantPage} to="/">
                    About Me
                </Link>,
                <Link key={2} className={currentPagePath === "/portfolio" ? activePage : dormantPage} to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className={currentPagePath === "/contact" ? activePage : dormantPage} to="/contact">
                    Contact Me
                </Link>,
                <Link key={4} className={currentPagePath === "/resume" ? activePage : dormantPage} to="/resume">
                    Resum&eacute;
                </Link>,
            ]}
        />
        </header>
    );
}
