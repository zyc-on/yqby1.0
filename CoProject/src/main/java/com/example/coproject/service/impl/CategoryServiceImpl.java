package com.example.coproject.service.impl;

import com.example.coproject.entity.Category;
import com.example.coproject.dao.CategoryDao;
import com.example.coproject.service.CategoryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Category)表服务实现类
 *
 * @author makejava
 * @since 2020-02-24 20:47:00
 */
@Service("categoryService")
public class CategoryServiceImpl implements CategoryService {
    @Resource
    private CategoryDao categoryDao;

    /**
     * 通过ID查询单条数据
     *
     * @param categoryid 主键
     * @return 实例对象
     */
    @Override
    public Category queryById(Integer categoryid) {
        return this.categoryDao.queryById(categoryid);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    @Override
    public List<Category> queryAllByLimit(int offset, int limit) {
        return this.categoryDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param category 实例对象
     * @return 实例对象
     */
    @Override
    public Category insert(Category category) {
        this.categoryDao.insert(category);
        return category;
    }

    /**
     * 修改数据
     *
     * @param category 实例对象
     * @return 实例对象
     */
    @Override
    public Category update(Category category) {
        this.categoryDao.update(category);
        return this.queryById(category.getCategoryid());
    }

    /**
     * 通过主键删除数据
     *
     * @param categoryid 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer categoryid) {
        return this.categoryDao.deleteById(categoryid) > 0;
    }
}