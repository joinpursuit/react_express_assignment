
Expanding our Users App
Today, we're actually implementing a whole full-stack app, tip to tail!
<!--
Part 1: Clone the Users App
Create a clone of the Users app from today's lecture notes from scratch. Just like the project, include the ability to:

Show all users
Show one user
Edit a user
Add a new user
Please try to look at the boilerplate code as little as possible - this is an opportunity for you to build this yourself and get a sense for how everything works. If you get stuck, feel free to ask an instructor or consult the resource provided. -->

Part 2: Add Phone Numbers
Management has decided that our app is going to keep track of our users' phone numbers. Implement this as a column in the users table and make sure that:

<!-- Adding a user includes an input for phone number -->
<!-- Users display with their phone number -->
<!-- Phone numbers are editable in the same form where the rest of a user's information is edited. -->
Part 3: Validations
Two users can't have the same username or phone number. Duplicates should render a generic error message ("Error: Duplicate Fields") underneath the input field.

Bonus: Make error messages explicitly reference the column (username or phone number) that was duplicate. Two duplicates should produce two error messages.

Part 4: Search
Add a username search functionality to your "All Users" page.

Bonus: Add a phone number search functionality using the same input field.

Extra Bonus: Include a limit on the number of users rendered on the "All Users" page. Searching should still query the database of all users. While, previously, you were probably searching through the state, this time, your search button should trigger an AJAX request. Add 100 users to your database and make sure they never render all at once.
