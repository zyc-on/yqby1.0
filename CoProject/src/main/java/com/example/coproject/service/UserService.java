package com.example.coproject.service;

import com.example.coproject.entity.User;
import java.util.List;

/**
 * (User)表服务接口
 *
 * @author makejava
 * @since 2020-02-24 20:47:01
 */
public interface UserService {


    User queryById(Integer userid);

    List<User> queryAllByLimit(int offset, int limit);

    List<User> queryAll(User user);

    User insert(User user);

    User update(User user);

    boolean deleteById(Integer userid);

}