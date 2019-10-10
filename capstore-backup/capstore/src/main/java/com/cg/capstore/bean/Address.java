package com.cg.capstore.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Address {

	@Id
	@SequenceGenerator(name = "add_id", sequenceName = "add_id", initialValue = 100, allocationSize = 1)
	@GeneratedValue(generator = "add_id")
	private int addressId;
	private String fullName;
	private String mobileNumber;
	private String pincode;
	private String streetAddress;
	private String city;
	private String state;
	private String type;

	public Address() {
		super();
	}

	public Address(int addressId, String fullName, String mobileNumber, String pincode, String streetAddress,
			String city, String state, String type) {
		super();
		this.addressId = addressId;
		this.fullName = fullName;
		this.mobileNumber = mobileNumber;
		this.pincode = pincode;
		this.streetAddress = streetAddress;
		this.city = city;
		this.state = state;
		this.type = type;
	}

	public int getAddressId() {
		return addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Address [addressId=" + addressId + ", fullName=" + fullName + ", mobileNumber=" + mobileNumber
				+ ", pincode=" + pincode + ", streetAddress=" + streetAddress + ", city=" + city + ", state=" + state
				+ ", type=" + type + "]";
	}
}
