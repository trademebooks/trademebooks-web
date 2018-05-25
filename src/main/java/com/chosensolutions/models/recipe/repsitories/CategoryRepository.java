package com.chosensolutions.models.recipe.repsitories;

import com.chosensolutions.models.recipe.models.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Long> {
}