package org.vanduong.online_food_ordering_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.vanduong.online_food_ordering_system.model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
