package com.shopping.shoppingbackend.Entity;

import org.springframework.data.annotation.Id;

public class Item {
    private String _id;
    private String title;
    private String category;
    private String image;
    private String body;
    private double discount;
    private double price;
    private double discountedPrice;
    private int totalItemCount;
    private double totalPrice;

    public Item(String _id, String title, String category, String image, String body, double discount, double price) {
        this._id = _id;
        this.title = title;
        this.category = category;
        this.image = image;
        this.body = body;
        this.discount = discount;
        this.price = price;
        this.discountedPrice = price;
        this.totalItemCount = 0;
        this.totalPrice = 0.0;
    }

    public Item() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getTotalItemCount() {
        return totalItemCount;
    }

    public void setTotalItemCount(int totalItemCount) {
        this.totalItemCount = totalItemCount;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public double getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(double discountedPrice) {
        this.discountedPrice = discountedPrice;
    }
}
