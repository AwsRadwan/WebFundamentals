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
-- join film_category on film_category.film_id =  film.film_id
-- join category on category.category_id = film_category.category_id
-- where category.name = "comedy";

-- Q.3 >>
-- select actor.actor_id, concat(actor.first_name,' ' , actor.last_name), film.title, film.description, film.release_year
-- from film
-- join film_actor on film_actor.film_id = film.film_id
-- join actor on actor.actor_id = film_actor.actor_id
-- where actor.actor_id = 5;

-- Q.4 >> 
-- select customer.first_name, customer.last_name, customer.email, address.address, city.city_id
-- from customer
-- join address on address.address_id = customer.address_id
-- join city on city.city_id = address.city_id
-- join store on store.store_id = customer.store_id
-- where store.store_id = 1 and (city.city_id = 1  or city.city_id = 42 or city.city_id = 312 or city.city_id = 459);

-- Q.5 >>
-- select film.title, film.description, film.release_year, film.rating, film.special_features
-- from film
-- join film_actor on film_actor.film_id = film.film_id
-- join actor on actor.actor_id = film_actor.actor_id
-- where film.rating = "G" and film.special_features LIKE '%behind the scenes%' and actor.actor_id = 15;

-- Q.6 >>
-- select  film.film_id, film.title, actor.actor_id, concat(actor.first_name, actor.last_name) as actor_name
-- from film
-- join film_actor on film_actor.film_id = film.film_id
-- join actor on actor.actor_id = film_actor.actor_id
-- where film.film_id = 369;

-- Q.7 >> 
-- select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as category
-- from film
-- join film_category on film_category.film_id =  film.film_id
-- join category on category.category_id = film_category.category_id
-- where category.name = "drama" and film.rental_rate = 2.99;

-- Q.8 >> 
-- select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as category, concat(actor.first_name," " , actor.last_name) as actor_name
-- from film
-- join film_actor on film_actor.film_id = film.film_id
-- join actor on actor.actor_id = film_actor.actor_id
-- join film_category on film_category.film_id =  film.film_id
-- join category on category.category_id = film_category.category_id
-- where category.name = "action" and actor.first_name = 'SANDRA' and actor.last_name = 'KILMER';





