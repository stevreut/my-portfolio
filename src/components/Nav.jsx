// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

// TODO
// TODO : About Me, Portfolio, Contact, and Resume - required links per assignment README
// TODO

export default function Nav() {
    // The Navbar component will render each of the Link elements in the links prop
    return (
        <header>
            <img src="/nazarlik.svg" width="75px" height="75px"></img>
            <h1>Steve Reuterskiold</h1>
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav-link text-light" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light" to="/contact">
                    Contact Me
                </Link>,
                <Link key={4} className="nav-link text-light" to="/resume">
                    Resum&eacute;
                </Link>,
            ]}
        />
        </header>
    );
}
