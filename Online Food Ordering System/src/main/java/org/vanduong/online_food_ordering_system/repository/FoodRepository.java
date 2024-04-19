package org.vanduong.online_food_ordering_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.vanduong.online_food_ordering_system.model.Food;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {

    List<Food>  findByRestaurantId(Long restaurantId);

    @Query("SELECT f FROM Food f WHERE f.name LIKE %:keyword% or f.foodCategory.name LIKE %:keyword% ")
    List<Food>searchFood(@Param("keyword") String keyword);
}
