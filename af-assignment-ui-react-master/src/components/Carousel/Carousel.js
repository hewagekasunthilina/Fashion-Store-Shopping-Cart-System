import React, {Component} from 'react'


class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner" style={{marginBottom: "8px"}}>
                    <div className="carousel-item active">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Web-Banner-5.png?alt=media&token=0dc2204e-2a96-4c7a-b717-34ddba27c4d8"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Fbug_Web_compressed.jpg?alt=media&token=0a7785e8-5bff-4aaa-9450-1dcfefa82ea1"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/fashion-store-1da9a.appspot.com/o/Web-Banner-5.png?alt=media&token=0dc2204e-2a96-4c7a-b717-34ddba27c4d8"
                            className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;
