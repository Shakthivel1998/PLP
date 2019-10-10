package com.cg.capstore.bean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Description {
	@Id
	@SequenceGenerator(name = "desc_id", sequenceName = "desc_id", initialValue = 5000, allocationSize = 1)
	@GeneratedValue(generator = "desc_id")
	private int descId;
	private String label;
	private String value;

	public Description() {
		super();
	}

	public Description(int descId, String label, String value) {
		super();
		this.descId = descId;
		this.label = label;
		this.value = value;
	}

	public int getDescId() {
		return descId;
	}

	public void setDescId(int descId) {
		this.descId = descId;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return "Description [descId=" + descId + ", label=" + label + ", value=" + value + "]";
	}
}
