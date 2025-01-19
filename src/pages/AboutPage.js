import dataJSON from '../content.json'

export function AboutPage() {

    let about = dataJSON.about;
    return (
        <>
        <div id="about">
            <div id="title-line">
                <img id="about-img" src={about.image} alt=""></img>
                <h1 id="about-title">{about.title}</h1>
            </div>
            <p id="about-content">{about.content}</p>
        </div>
            
        </>
    )
}