package org.vanduong.online_food_ordering_system.elasticRepository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.vanduong.online_food_ordering_system.dto.RestaurantDto;
import org.vanduong.online_food_ordering_system.model.Restaurant;

import java.util.List;

public interface RestaurantElasticsearchRepository extends ElasticsearchRepository<RestaurantDto, Long> {
    List<RestaurantDto> findByTitle(String name);
}
