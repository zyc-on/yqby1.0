package com.example.coproject.controller;

import com.example.coproject.Anotation.PassLogin;
import com.example.coproject.entity.User;
import com.example.coproject.service.UserService;
import com.example.coproject.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * (User)表控制层
 *
 * @author makejava
 * @since 2020-02-24 20:47:01
 */
@RestController
@RequestMapping("user")
public class UserController {
    @Resource
    private UserService userService;

    Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("selectOne")
    public User selectOne(@RequestParam("id") Integer id) {
        return this.userService.queryById(id);
    }

    @PassLogin
    @PostMapping("login")
    public String login(@RequestParam("account")String account, @RequestParam("password") String password){
        logger.info(account+"   "+password);
        User user = new User();
        user.setAccount(account);
        user.setPassword(password);
        List<User> list = userService.queryAll(user);
        if (list != null){
            for (User user1 : list){
                logger.info("---------------------");
                logger.info(String.valueOf(user1));
                return JwtUtil.getToken(user1);
            }
        }
        String message ="密码错误，或者用户不存在";
        return message;
    }

    @GetMapping("hello")
    public String hello(){
        return "hello world";
    }

}