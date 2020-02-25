package com.example.coproject.controller;

import com.example.coproject.entity.Good;
import com.example.coproject.service.GoodService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * (Good)表控制层
 *
 * @author makejava
 * @since 2020-02-24 20:47:01
 */
@RestController
@RequestMapping("good")
public class GoodController {
    /**
     * 服务对象
     */
    @Resource
    private GoodService goodService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Good selectOne(Integer id) {
        return this.goodService.queryById(id);
    }

}