const template = document.createElement("template");
    template.innerHTML = `
    <style>
        #navbar {
            background-color: #e4588a;
            position: fixed;
            top: 0;
            width: 100%;
            left: 0;
            color: white;
            font-size: 1.5em;
        }
        #navbar ul{
            font-family: 'Montserrat', sans-serif;
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        #navbar li a:hover {
            background-color: #B6466E;
        }
        #navbar li {
            display: inline;
        }
        #navbar li a, .dropbtn {
            color: white;
            text-align: center;
            padding: 20px 20px;
            text-decoration: none;
            float: right;
        }


  
        .dropdown {display: block; overflow: hidden;}

        .dropdown-content {display: none; z-index: 1;}

        //.dropdown-content a {text-decoration: none; display: block; text-align: left;}

        .dropdown:hover .dropdown-content {display: block;}


    </style>
    <nav id="navbar">
        <ul>
            <li><a href="#contact-info">Contact</a></li>
            <li><a href="#waiut">What Am I Up To?</a></li>
            <li><a href="#about">About</a></li>
            <li class="dropdown">
                <a href="#projects" class="dropbtn">Projects</a>
                <div class="dropdown-content">
                    <a href="web.html">Web Projects</a>
                    <a href="game.html">Game Projects</a>
                </div>
            </li>
        </ul>
    </nav>
    `;

//navbar class
class Navbar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-navbar', Navbar);

export {Navbar};