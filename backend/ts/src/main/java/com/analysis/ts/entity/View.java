package com.analysis.ts.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class View {

	@Id
	private long id;
	
	private String name;
	private String chartType;
	private String country;
	private String indicator;
	private String startDate;
	private String endDate;
	
	public View(long id, String name, String chartType, String country, String indicator, String startDate,String endDate) {
		super();
		this.id = id;
		this.name = name;
		this.chartType = chartType;
		this.country = country;
		this.indicator = indicator;
		this.startDate = startDate;
		this.endDate = endDate;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getChartType() {
		return chartType;
	}

	public void setChartType(String chartType) {
		this.chartType = chartType;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getIndicator() {
		return indicator;
	}

	public void setIndicator(String indicator) {
		this.indicator = indicator;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public View() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "View [id=" + id + ", name=" + name + ", chartType=" + chartType + ", country=" + country
				+ ", indicator=" + indicator + ", startDate=" + startDate + ", endDate=" + endDate + ", getId()="
				+ getId() + ", getName()=" + getName() + ", getChartType()=" + getChartType() + ", getCountry()="
				+ getCountry() + ", getIndicator()=" + getIndicator() + ", getStartDate()=" + getStartDate()
				+ ", getEndDate()=" + getEndDate() + ", getClass()=" + getClass() + ", hashCode()=" + hashCode()
				+ ", toString()=" + super.toString() + "]";
	}
	
	
	
}
