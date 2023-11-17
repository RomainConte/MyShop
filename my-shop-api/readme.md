# My Shop API

## Description
My Shop API is a backend application that powers an e-commerce website. It provides various endpoints for managing products, orders, and customers.

## Installation
1. Clone the repository: `git clone https://github.com/RomainConte/MyShop.git`
2. Navigate to the project directory: `cd my-shop-api`
3. Install the dependencies: `npm install`

# Prerequisites

- Docker and Docker Compose
- Node.js

## Installation

1) First, go into "*docker*" folder and run "*docker-compose up -d --build*" to install the environment
2) Now all your 4 containers should be running (it can take up to 1 minute before container are loaded: if you have the symfony default page on http://localhost/ that mean everything has been loaded correctly and you can pursue). Now you can go inside PHP container and follow the next steps.
3) Inside your PHP container, run "*bin/console doctrine:database:create*" (you should see a success message)
4) Then run "*bin/console doctrine:migrations:migrate*" to update your database
5) To use auth system you also run this "*bin/console lexik:jwt:generate-keypair*"
6) Last thing to do is to run "*bin/console app:add-user*" and follow the process to have your first user on the project.

## Manage Server

Here is the two commands to start and stop your docker environment:

- *docker-compose up -d* -> run docker containers
- *docker-compose up -d* -> stop docker containers

From there you can find the documentation to the API at the following url: *http://localhost/api/docs*

## Usage
1. Start the server: `npm run dev`
2. The API will be accessible at `http://localhost:3007`

## API Endpoints
you can also see all the route in router/index.js 
- `/login` - go to login page 
- `/register` - go to register page
- `/admin` - go to admin page
- `/users` - go to users page
- `/products` -go to products page 

