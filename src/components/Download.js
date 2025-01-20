import Pdf from '../Jabrecia_Washington_Resume.pdf'

export function Download(){
    return(
        <a href={Pdf} target='_blank' rel="noreferrer">Resume</a>
    );
};