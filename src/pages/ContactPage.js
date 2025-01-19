import { Download } from "../components/Download"

export function ContactPage() {
    return (
        <div id="contact">
            <h1>Contact Me!</h1>
            <ul id="contact-info">
                <li><a href="https://www.linkedin.com/in/jabrecia-washington/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="mailto:jabwashi2@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
                <li><a href="https://github.com/jabwashi2" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><Download /></li>
            </ul>
        </div>
    )
}