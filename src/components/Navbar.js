// using bootstrap for the navbar, making it a component so it can be used on other pages
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <HashLink to={"/#about"} class="navlink">About</HashLink>
                    </li>
                    <li class="nav-item">
                        <HashLink to={"/#contact"} class="navlink">Contact</HashLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle navlink" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Projects
                        </a>
                        <ul class="dropdown-menu">
                            <li class="projthumbnail"><Link to={"/Web-Projects"} class="navlink">Web Development</Link></li>
                            <li class="projthumbnail"><Link to={"/Unity-Projects"} class="navlink">Unity Development</Link></li>
                            <li class="projthumbnail"><Link to={"/DirectX11-Projects"} class="navlink">DirectX11 Develpoment</Link></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}
