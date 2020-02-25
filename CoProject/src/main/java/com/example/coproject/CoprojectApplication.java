package com.example.coproject;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.coproject.dao")
public class CoprojectApplication {

    public static void main(String[] args) {
        SpringApplication.run(CoprojectApplication.class, args);
    }

}
