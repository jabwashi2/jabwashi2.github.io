//import { CAlert } from '@coreui/react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export function ImageCarousel(images){
    // this component will make an image carousel using whatever images are passed in.

    return(
        <CCarousel controls indicators>
            {images.images.map((object) => <CCarouselItem> <CImage className="d-block w-100" src={object.image} alt={object.text}/></CCarouselItem>)}
        </CCarousel>
    )
}