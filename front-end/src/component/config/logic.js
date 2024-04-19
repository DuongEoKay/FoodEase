export const isPresentInFavourite=(favourites,restaurant)=>{
    for(let item of favourites){
        if(item.restaurantId===restaurant.id){
            return true
        }
    }
    return false
}