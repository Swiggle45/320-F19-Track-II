import React from 'react';
import Gallery from 'react-grid-gallery';
import url1 from "./low-level-images/teethness.png";
import url2 from "./low-level-images/sans_fisher.png";
import url3 from "./low-level-images/toopowerful.png"

/* const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
 */

 let IMAGES = [
     url1,
     url2,
     url3
 ]

class ImageGallery extends React.Component{

    constructor(){
        super();
        this.state = {

        };
        this.processImages = this.processImages.bind(this)
    }

    /*
    Takes in an array of image URLs, processes it into a format which the library can use
    @input parameters: url, an array of image URLs (strings) that is to be processed
    @output parameters: images, an array of image objects that react-grid-gallery can use
    */
   processImages(url){
    let imageArr = []
    for(let i = 0; i < url.length; i++){
        imageArr.push({
            src: url[i],
            thumbnail: url[i],
            thumbnailWidth: 500,
            thumbnailHeight: 400
        });
    }
    return imageArr
   }

    render(){
        let imageArr = []
        imageArr = this.processImages(IMAGES)
        return(
            <div>
                <div className="gallery">
                    <Gallery images={imageArr}/>
                </div>
            </div>
        );
    }

}
export default ImageGallery;