package com.example.coproject.service;

import com.example.coproject.entity.Good;
import java.util.List;

/**
 * (Good)表服务接口
 *
 * @author makejava
 * @since 2020-02-24 20:47:01
 */
public interface GoodService {

    /**
     * 通过ID查询单条数据
     *
     * @param goodid 主键
     * @return 实例对象
     */
    Good queryById(Integer goodid);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    List<Good> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param good 实例对象
     * @return 实例对象
     */
    Good insert(Good good);

    /**
     * 修改数据
     *
     * @param good 实例对象
     * @return 实例对象
     */
    Good update(Good good);

    /**
     * 通过主键删除数据
     *
     * @param goodid 主键
     * @return 是否成功
     */
    boolean deleteById(Integer goodid);

}