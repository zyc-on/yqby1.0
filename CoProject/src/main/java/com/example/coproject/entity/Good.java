package com.example.coproject.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * (Good)实体类
 *
 * @author makejava
 * @since 2020-02-24 20:47:01
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Good implements Serializable {
    private static final long serialVersionUID = -44304367131657899L;
    
    private Integer goodid;
    
    private String pics;
    
    private Integer oprice;
    
    private Integer price;
    
    private Integer rate;
    
    private String description;
    
    private Integer userid;
    
    private Integer categoryid;

}