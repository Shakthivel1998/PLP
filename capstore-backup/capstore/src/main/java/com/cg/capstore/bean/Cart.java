package com.cg.capstore.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
@Entity
public class Cart {

	@Id
	@SequenceGenerator(name = "cart_id", sequenceName = "cart_id", initialValue = 1000, allocationSize = 1)
	@GeneratedValue(generator = "cart_id")
	private int cartId;
	private int customerId;
	private int productId;
	private int productQuantity;

	public Cart() {
		super();
	}

	public Cart(int cartId, int customerId, int productId, int productQuantity) {
		super();
		this.cartId = cartId;
		this.customerId = customerId;
		this.productId = productId;
		this.productQuantity = productQuantity;
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", customerId=" + customerId + ", productId=" + productId
				+ ", productQuantity=" + productQuantity + "]";
	}

}
