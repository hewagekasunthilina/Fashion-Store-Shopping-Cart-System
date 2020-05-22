import React, {Component} from 'react'

class Carousel extends Component{
    render() {
        return(

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" style={{marginBottom: "2rem", marginTop:"1rem"}}>
                {/*<ol className="carousel-indicators">*/}
                {/*    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>*/}
                {/*    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>*/}
                {/*    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>*/}
                {/*</ol>*/}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Web-Banner-5.png?alt=media&token=0dc2204e-2a96-4c7a-b717-34ddba27c4d8" className="d-block w-100" alt="..."/>
                        {/*<div className="carousel-caption d-none d-md-block">*/}
                        {/*    <h5>First slide label</h5>*/}
                        {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Fbug_Web_compressed.jpg?alt=media&token=0a7785e8-5bff-4aaa-9450-1dcfefa82ea1" className="d-block w-100" alt="..."/>
                        {/*<div className="carousel-caption d-none d-md-block">*/}
                        {/*    <h5>Second slide label</h5>*/}
                        {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                        {/*</div>*/}
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Fbug_Web_compressed.jpg?alt=media&token=0a7785e8-5bff-4aaa-9450-1dcfefa82ea1" className="d-block w-100" alt="..."/>
                        {/*<div className="carousel-caption d-none d-md-block">*/}
                        {/*    <h5>Third slide label</h5>*/}
                        {/*    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
                {/*<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">*/}
                {/*    <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                {/*    <span className="sr-only">Previous</span>*/}
                {/*</a>*/}
                {/*<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">*/}
                {/*    <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                {/*    <span className="sr-only">Next</span>*/}
                {/*</a>*/}
            </div>


            )
    }
}
export default Carousel;
