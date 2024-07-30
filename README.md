

<!-- ...................FIX STATE OF SEARCH COMPONENT......................... -->

<!-- blog page
i have fetched all the blogs at once and stored in an atom and thus caching not needed for opening a particular blog
but when goes back in my tab the blogs are fetched again

add pagination  

-do caching: if i open a blog. cache it. the backend should not fetch the blog again

add a nice color scheme to the project

add feature to add an image

format date

textEditor page - disable the publish button untill their is content in title and content 
add editBlog page 
                


fix the dropdown menu on app bar

add skeleton to my stories 

enhance the styling of authentication pages
------------------------------------------------------------------------ -->
<!-- DONE
added toggle password visibliity
added search component in frontend + functionality-->
<!-- completed added recoil state management to Blogs and Blog pages -->
<!-- : on hover show a card - name avatar about  -->
<!-- on MyAvatar - show : sign out, profile -->
<!-- - increase text area row -->
<!-- at the backend add date and time in the database -->
<!-- bloggerProfile page--list all the id's blogs -->
<!-- add a delete feature --in the BACKEND -->

<!-- app bar- avatar : onclick go to page to display all that user's details + blogs -->
        
<!-- app bar
- avatar : fix the on click menu -->
<!-- add an update feature on the frontend -->
<!-- for smaller screen make the search bar an icon and then expand to smaller search bar -->

# Blogging Website

A full-stack blogging platform built with React, TypeScript, Tailwind CSS, Recoil, Node.js, Hono, Prisma, and PostgreSQL, deployed on Cloudflare 

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)

## Features

-   User Authentication (Sign Up, Sign In, Sign Out)
-   Create, Read, Update, Delete (CRUD) operations for blog posts
-   User profile management
-   Responsive design
-   State management with Recoil

## Tech Stack

### Frontend

-   **React**: Library for building user interfaces
-   **TypeScript**: Typed superset of JavaScript
-   **Tailwind CSS**: Utility-first CSS framework for styling
-   **Recoil**: State management library

### Backend

-   **Node.js**: JavaScript runtime for server-side programming
- `**Hono framework** : Web framework used for backend
-   **Prisma**: ORM for database management
-   **PostgreSQL**: Relational database management system

### Deployment

-   **Cloudflare**: Serverless backend hosting
-   **Neon**: PostgreSQL database hosting
