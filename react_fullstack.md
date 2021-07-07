Terminal:
- npm install express-generator -g
- express backend
    - create-react-app frontend
- cd backend
- npm install
- npm start
- localhost:3000/ (type out in browser address bar)
- npm install pg-promise faker --save

//-----------------------------------------------------------------------------
coreyladovsky [3:01 PM]
Bonus: create a package json on the outermost folder and follow this post: https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel . After installing npm i concurrently --save-dev you can run something like     “dev”: “concurrently --kill-others \“cd frontend && npm start\” \“cd backend && npm start\“”
and get both servers going in one shot by simply typing npm run dev .
*Stack Overflow*
How can I run multiple npm scripts in parallel?
In my package.json I have these two scripts: "scripts": { "start-watch": "nodemon run-babel index.js", "wp-server": "webpack-dev-server", } I have to run these 2 scripts in parallel

Alejo [3:29 PM]
CSS only game 2006 http://www.cssplay.co.uk/menu/amazing.html#nogo
CSS play
Stu Nicholls | CSS PLAY | An amazing CSS puzzle
CSS play - a css maze puzzle

//========
in client: npm start
in react-backend: npm start
in db: psql -f users.sql
localhost:3000/users --- react
localhost:3100/users  --- express

//======================================================

# Expanding our Users App

Today, we're actually implementing a whole full-stack app, tip to tail!

## Part 1: Clone the Users App

Create a clone of the Users app from [today's lecture notes](https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/react_2/react_express/react_express.md) _from scratch_. Just like the project, include the ability to:

- Show all users
- Show one user
- Edit a user
- Add a new user

Please try to look at the boilerplate code as little as possible - this is an opportunity for you to build this yourself and get a sense for how everything works. If you get stuck, feel free to ask an instructor or consult the [resource](https://daveceddia.com/create-react-app-express-backend/) provided.

## Part 2: Add Phone Numbers

Management has decided that our app is going to keep track of our users' phone numbers. Implement this as a column in the users table and make sure that:

- Adding a user includes an input for phone number
- Users display with their phone number
- Phone numbers are editable in the same form where the rest of a user's information is edited.

## Part 3: Validations

Two users can't have the same username or phone number. Duplicates should render a generic error message ("Error: Duplicate Fields") underneath the input field.

**Bonus:** Make error messages explicitly reference the column (username or phone number) that was duplicate. Two duplicates should produce two error messages.

## Part 4: Search

Add a username search functionality to your "All Users" page.

**Bonus:** Add a phone number search functionality using the same input field.

**Extra Bonus:** Include a limit on the number of users rendered on the "All Users" page. Searching should still query the database of all users. While, previously, you were probably searching through the state, this time, your search button should trigger an AJAX request. Add 100 users to your database and make sure they never render all at once.
