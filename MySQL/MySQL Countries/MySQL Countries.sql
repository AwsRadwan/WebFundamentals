-- Q.1
--  SELECT countries.name, language, percentage FROM languages 
--  JOIN countries ON countries.id = languages.country_id
--  where language='Slovene' order by languages.percentage desc;

-- Q.2
--  SELECT  countries.name, COUNT(cities.name) AS number_of_cities 
--  FROM countries 
--  JOIN cities ON country_id = countries.id 
--  GROUP BY countries.name 
--  ORDER BY number_of_cities DESC;

-- Q.3
-- select cities.name, cities.population from cities
-- JOIN countries ON countries.id = cities.country_id
-- where countries.name="mexico" and cities.population>500000
-- order by population desc;

-- Q.4
-- SELECT countries.name, language, percentage FROM languages 
--  JOIN countries ON countries.id = languages.country_id
--  where percentage>89 order by languages.percentage desc;

-- Q.5
-- select countries.name, countries.surface_area, population from countries 
-- where surface_area<501 and population>100000;

-- Q.6
-- select name, government_form, capital, life_expectancy from countries
-- where capital>200 and life_expectancy>75 and government_form="Constitutional Monarchy";

-- Q.7
-- select countries.name, cities.name, cities.district, cities.population from cities
-- JOIN countries ON countries.id = cities.country_id
-- where countries.name="Argentina" and cities.district="Buenos Aires" and cities.population>500000;

-- Q.8
-- select countries.region, COUNT(countries.name) as Number_of_countries from countries
-- GROUP BY countries.region
-- ORDER BY Number_of_countries DESC;


