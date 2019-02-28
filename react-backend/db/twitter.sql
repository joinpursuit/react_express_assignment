User
-id SERIAL PRIMARY KEY,
-username VARCHAR UNIQUE NOT NULL,
-bio TEXT NOT NULL,
-pic_url VARCHAR,
-created_at TIMESTAMP NOT NULL

Tweet
-id SERIAL PRIMARY KEY,
-body VARCHAR(240) NOT NULL,
-reply_id INTEGER REFERENCES Tweet(id) ON DELETE SET NULL,
-rt_id INTEGER REFERENCES Tweet(id) ON DELETE SET NULL,
-author_id INTEGER REFERENCES User(id) ON DELETE CASCADE,
-img_url VARCHAR,
- created_at TIMESTAMP

you can change how you are rendering if the tweet has the (reply_id or rt_id values)
reply_id or rt_id not at the same time. One of the columns is going to be null no matter what.
Not even going to be a number at the same time

Likes
- id SERIAL PRIMARY KEY,
-user_id INTEGER REFERENCES User(id) ON DELETE CASCADE,
-tweet_id INTEGER REFERENCES Tweet(id) ON DELETE CASCADE

Likes have to be their own table.



a user likes a tweet. and thats pretty much it.

I wanna think about two things. Trending and the other being Follow Notifications.
it would be an interesting case for having a TIMESTAMP for follow Notifications.
Trending TIMESTAMP for Posts and if made in the last 24 hrs and this many likes by that time put it into trending.
x many likes by this time for this old


Following
-id SERIAL PRIMARY KEY
-follower_id INTEGER REFERENCES Users(id)   ON DELETE CASCADE,
-folllowing_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
-created_at TIMESTAMP

have to be specific about what we are referencing.

MVPS UP ABOVE.

DOWN BELOW ARE BONUS FEATURES

Notifications
- id SERIAL PRIMARY KEY,
- read BOOLEAN NOT NULL,
-tweet_id INTEGER REFERENCES ON DELETE CASCADE,
-like_id INTEGER REFERENCES ON DELETE CASCADE,
-folllowing_id INTEGER REFERENCES ON DELETE CASCADE,
-notified_id INTEGER REFERENCES Users(id) ON DELETE CASCADE

 DO I NEED IT?
 HOW IS IT RELATED TO MY OTHER STUFF?

 WHAT I WANT TO DO?
 WHAT I WANT TO SAVE?

 way more efficient
