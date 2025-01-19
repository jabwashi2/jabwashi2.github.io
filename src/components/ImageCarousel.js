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
        // <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        //     <div class="carousel-inner">
        //         <div class="carousel-item active">
        //             <img class="d-block w-100" src="./images/my_gamer_pfp.png" alt="First slide"/>
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="./images/mc_logo.png" alt="Second slide"/>
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="./images.flower_guy1.jpg" alt="Third slide"/>
        //         </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>
    )
}