# Cookbook Web App CLient

## Links

[Cookbook Client repo](https://github.com/kamsahn/full-stack-project-client)

[Cookbook API repo](https://github.com/kamsahn/full-stack-project-api)

[Cookbook Client](https://kamsahn.github.io/full-stack-project-client/)

[Cookbook API](https://fullstackrecipe.herokuapp.com/)

## Overview

A web app that allows users to create their own recipes. They can be stored, edited and removed at the users' request. Authentication is required to use the app.

## Technologies Used

HTML5, CSS, JavaScript, Bootstrap, SASS, Handlebars, jQuery, Ruby on Rails, SQL, git

## Development Process

The idea to make a recipe tracker app was easy enough to come by. I wanted a convenient place to store all my recipes and a simple way to keep track of new ones. I provided most of the user stories based on things that I would like to see.

The database was someone tricky to plan out. I wanted to think of a way to include a variable number of ingredients/steps to a recipe without hard coding a set number of column lines. I used a one-to-many relationship for this. I also wanted to avoid having multiple iterations of the same ingredient name across multiple recipes. I used a many-to-many relationship for this. For example, the same flour can be used across multiple recipes.

The front end was more straight forward. I needed a way for users to sign in, and a simple way to add information to their recipes. I handled a lot of the leg work behind the scenes for the user. For example, when they enter an ingredient, unit and amount for their recipe, they are actually creating a new ingredient and joining that to their current recipe on a join table that holds the recipe and ingredient instances along with the amount and unit for that specific line. I used handlebars to easily display this information as well as provide recipe and ingredient id's that my users can pass around when creating more ingredient lines.

## Wireframes

[Wireframe Auth](https://i.imgur.com/QJJVCAs.jpg)

[Wireframe Main](https://i.imgur.com/L4bsLdw.jpg)

[Wireframe Friends](https://i.imgur.com/n8KJjaq.jpg)

## User Stories

As a user, I want to store all my recipes in one place
As a user, I want to share my recipes with friends
As a user, I want to be able to upload any recipe with any amount of ingredients
As a user, I want to add a description and directions to my recipe
As a user, I want to make my own profile to store recipes
As a user, I want to add friends with this app

## Entity Relationship Diagram

[ERD](https://i.imgur.com/Bn6YY5Y.jpg)

## Unsolved Problems

Currently, the app database is underutilized. There is a many-to-many relationship between recipes and ingredients, but the app currently treats them as one-to-many. Upon future iterations, there will be reworking to allow the backend to search if an ingredient already exists before creating a new instance of the same ingredient name.

Upon future iterations, the app will support social interaction and let users share recipes with friends other the app.
