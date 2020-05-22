import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="inner-footer">
                    <div className="footer-items">
                        <h1>Look @ Me</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci aliquid amet, animi consectetur corporis culpa, cupiditate eaque id,
                            illum itaque nihil non quisquam quod saepe suscipit temporibus vel velit voluptatem?
                        </p>
                    </div>

                    <div className="footer-items">
                        <h2>Quick Links</h2>
                        <div className="border">
                        </div>
                        <ul>
                            <a href="">
                                <li>Items</li>
                            </a>
                            <a href="">
                                <li>New Arrivals</li>
                            </a>
                            <a href="">
                                <li>Sales</li>
                            </a>
                            <a href="">
                                <li>Summer Designs</li>
                            </a>
                        </ul>
                    </div>

                    <div className="footer-items">
                        <h2>Categories</h2>
                        <div className="border">
                        </div>
                        <ul>
                            <a href="">
                                <li>Party Wear</li>
                            </a>
                            <a href="">
                                <li>Shorts</li>
                            </a>
                            <a href="">
                                <li>T-Shirts</li>
                            </a>
                            <a href="">
                                <li>Sarees</li>
                            </a>
                        </ul>
                    </div>

                    <div className="footer-items">
                        <h2>Contact </h2>
                        <div className="border">
                        </div>
                        <ul>
                            <li><i className="fa fa-map-marker"></i>New Kandy Road, Malabe</li>
                            <li><i className="fa fa-phone"></i>034 2243456</li>
                            <li><i className="fa fa-envelope"></i>Support@gmail.com</li>
                        </ul>
                        <div className="social-media">
                            <a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href=""><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    Copyright @copy; Look @ Me 2020. All rights reserved.
                </div>
            </div>


        )
    }

}

export default Footer;
