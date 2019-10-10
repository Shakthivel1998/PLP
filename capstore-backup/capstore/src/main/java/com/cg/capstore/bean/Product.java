package com.cg.capstore.bean;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

@Entity
public class Product {

	@Id
	@SequenceGenerator(name = "prod_id", sequenceName = "prod_id", initialValue = 70000, allocationSize = 1)
	@GeneratedValue(generator = "prod_id")
	private int productId;
	private String productName;
	private int categoryId;
	private double price;
	@OneToMany
	private List<Description> productDesc;

	public Product() {
		super();
	}

	public Product(int productId, String productName, int categoryId, double price, List<Description> productDesc) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.categoryId = categoryId;
		this.price = price;
		this.productDesc = productDesc;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public List<Description> getProductDesc() {
		return productDesc;
	}

	public void setProductDesc(List<Description> productDesc) {
		this.productDesc = productDesc;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", categoryId=" + categoryId
				+ ", price=" + price + ", productDesc=" + productDesc + "]";
	}
}
