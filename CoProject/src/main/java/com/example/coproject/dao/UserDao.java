package com.example.coproject.dao;

import com.example.coproject.entity.User;
import org.apache.ibatis.annotations.Param;
import java.util.List;

/**
 * (User)表数据库访问层
 *
 * @author makejava
 * @since 2020-02-24 20:47:01
 */
public interface UserDao {


    User queryById(Integer userid);

    List<User> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);

    List<User> queryAll(User user);

    int insert(User user);

    int update(User user);

    int deleteById(Integer userid);

}