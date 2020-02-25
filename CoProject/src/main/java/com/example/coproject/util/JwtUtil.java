package com.example.coproject.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.coproject.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JwtUtil {

    private static Logger logger = LoggerFactory.getLogger(JwtUtil.class);

    public static String getToken(User user){
       String token = "";
       token = JWT.create().withAudience(user.getAccount()).sign(Algorithm.HMAC256(user.getPassword()));
        return token;
    }
}
