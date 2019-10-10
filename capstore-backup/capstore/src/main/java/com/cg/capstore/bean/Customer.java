package com.cg.capstore.bean;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.Type;

@Entity
public class Customer {

	@Id
	@SequenceGenerator(name = "cust_id", sequenceName = "cust_id", initialValue = 10000, allocationSize = 1)
	@GeneratedValue(generator = "cust_id")
	private int customerId;
	private String firstName;
	private String lastName;
	private String phone;
	private String email;
	private String password;
	@Type(type= "org.hibernate.type.NumericBooleanType")
	private boolean isActive;
	@OneToMany
	private List<Address> addresses = new ArrayList<Address>();

	public Customer() {
		super();
	}

	public Customer(int customerId, String firstName, String lastName, String phone, String email, String password,
			List<Address> addresses) {
		super();
		this.customerId = customerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.password = password;
		this.addresses = addresses;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
}
