-- Q.1 >>
-- select city.city_id, customer.first_name, customer.last_name, customer.email, address.address 
-- from city
-- join customer on address_id = customer.address_id
-- join address on city.city_id = address.city_id
-- where city.city_id = 312
-- group by customer_id;

-- Q.2 >>
-- select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as category
-- from film
-- join film on film.film_id = film_category.film_id
-- join category on category.category_id = film_category.category_id
-- where category.name = comedy;

-- Q.3 >>



