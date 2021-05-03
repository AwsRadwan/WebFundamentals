-- SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name, friendships.user_id, friendships.friend_id
-- FROM users 
-- JOIN friendships ON friendships.user_id = users.id 
-- LEFT JOIN users as user2 ON user2.id = friendships.friend_id;

-- Q.1 >>
-- SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
-- FROM users 
-- JOIN friendships ON friendships.user_id = users.id 
-- LEFT JOIN users as user2 ON user2.id = friendships.friend_id
-- where user2.first_name = "Kermit";

-- Q.2 >>
-- SELECT users.first_name, users.last_name, count(user2.first_name) as number_of_friendships
-- FROM users 
-- JOIN friendships ON friendships.user_id = users.id 
-- LEFT JOIN users as user2 ON user2.id = friendships.friend_id
-- group by users.first_name;

-- Q.3 >> 
-- SELECT users.first_name, users.last_name, count(user2.first_name) as number_of_friendships
-- FROM users 
-- JOIN friendships ON friendships.user_id = users.id 
-- LEFT JOIN users as user2 ON user2.id = friendships.friend_id
-- group by users.first_name;

-- Q.4 >>
-- INSERT INTO users (first_name,last_name) VALUES ("aws","radwan");
-- INSERT INTO friendships (user_id, friend_id) VALUES (6, 5);
-- SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
-- FROM users 
-- JOIN friendships ON friendships.user_id = users.id 
-- LEFT JOIN users as user2 ON user2.id = friendships.friend_id;

-- Q.5 >>
-- SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
-- FROM users 
-- JOIN friendships ON friendships.user_id = users.id 
-- LEFT JOIN users as user2 ON user2.id = friendships.friend_id
-- where friendships.user_id = 2
-- order by users.first_name;

-- Q.6 >>>

-- UPDATE friendships SET friendships.friend_id = null
-- where friendships.user_id = 2 and friendships.friend_id = 5;

-- Q.7 >>
-- SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
-- FROM users 
-- JOIN friendships ON friendships.user_id = users.id 
-- LEFT JOIN users as user2 ON user2.id = friendships.friend_id;



