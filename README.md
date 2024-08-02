# The Malleable Database

## Description
This database has been designed to be fully functional, using backend server function. It is build for Get, Post, Put, and Delete.

## Getting Started

### Prerequisites
Node.js (v20.14.0 or later)
PostgreSQL

### Installation
Clone the repository:

bash
Copy code
git clone <https://github.com/wol42verine/13-Challenge.git>
Navigate to the project directory:

bash
Copy code
cd 13-Challenge
Install the required dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your database credentials:

env
Copy code
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
Database Setup
Create the database:

Open your PostgreSQL client and run:

sql
Copy code
CREATE DATABASE your_database_name;
Run migrations to set up the database schema:

bash
Copy code
npx sequelize-cli db:migrate
Seed the database with initial data:

bash
Copy code
npm run seed
Running the Application
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:3001.

## Demo
Here is a demonstration of the database in use, employing Insomnia
![Insomnia Demo](Assets\Untitled_ Aug 2, 2024 1_25 PM.gif)

## Troubleshooting
If you encounter issues:

Check the server logs for any errors.
Ensure your .env file is correctly configured.
Verify your database is running and accessible.
Contributing
If you would like to contribute, please follow the standard Git workflow:

Fork the repository.
Create a feature branch.
Make your changes.
Submit a pull request.

## License
No licences were applied