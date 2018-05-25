package com.chosensolutions.models.recipe.repsitories;

import com.chosensolutions.models.recipe.models.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
}