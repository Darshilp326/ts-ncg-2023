package com.analysis.ts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication()
public class TsApplication {

	public static void main(String[] args) {
		SpringApplication.run(TsApplication.class, args);
	}

}
