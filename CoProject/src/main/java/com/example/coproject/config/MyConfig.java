package com.example.coproject.config;

import com.example.coproject.interception.MyInterception;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(myInterception()).addPathPatterns("/**");
    }

    public MyInterception myInterception(){
        return new MyInterception();
    }
}
