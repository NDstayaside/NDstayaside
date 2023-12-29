import './Navbar.css';
export default function Navbar(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    Logo
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Content">Content</a>
                </li>
                <li>
                    <a href="/Credits">Credits</a>
                </li>
                <li>
                    <a href="/LogIn">Log in</a>
                </li>
            </ul>
        </nav>
    )
}