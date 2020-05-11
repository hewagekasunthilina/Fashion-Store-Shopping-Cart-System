import React, {Component} from "react";
import "./CategoryGrid.css";

class CategoryGrid extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="img-area">
                    <div className="single-img">
                        <img src="https://www.fashionbug.lk/wp-content/uploads/2019/10/shop-by-category-01_Fashion_Bug.jpg" alt="" id="categoryImg"/>
                        <h2 id="categoryName">Saree</h2>
                    </div>

                    <div className="single-img">
                        <img src="https://www.fashionbug.lk/wp-content/uploads/2019/10/shop-by-category-01_Fashion_Bug.jpg" alt=""id="categoryImg"/>
                        <h2 id="categoryName">Shirts</h2>
                    </div>

                    <div className="single-img">
                        <img src="https://www.fashionbug.lk/wp-content/uploads/2019/10/shop-by-category-01_Fashion_Bug.jpg" alt=""id="categoryImg"/>
                        <h2 id="categoryName">T-Shirts</h2>
                    </div>

                    <div className="single-img">
                        <img src="https://www.fashionbug.lk/wp-content/uploads/2019/10/shop-by-category-01_Fashion_Bug.jpg" alt=""id="categoryImg"/>
                        <h2 id="categoryName">Skirts</h2>
                    </div>

                    <div className="single-img">
                        <img src="https://www.fashionbug.lk/wp-content/uploads/2019/10/shop-by-category-01_Fashion_Bug.jpg" alt=""id="categoryImg"/>
                        <h2 id="categoryName">Blouse</h2>
                    </div>

                </div>
            </div>

        )
    }

}

export default CategoryGrid;
