package com.example.coproject.entity;

import com.auth0.jwt.JWT;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

/**
 * (User)实体类
 *
 * @author makejava
 * @since 2020-02-24 20:47:01
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User implements Serializable {
    private static final long serialVersionUID = -49700071153803167L;
    
    private String account;
    
    private String password;
    
    private String username;
    
    private Integer sex;
    
    private String avatar;
    
    private String school;
    
    private String location;
    
    private String motto;
    
    private Integer userid;

}