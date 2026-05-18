# Caterers Platform Full Stack Assignment

This is a full-stack catering platform project created using Node.js, Express.js, MongoDB, and Next.js.

## Features

* View all caterers
* Search caterers by name
* Filter caterers by maximum price
* Responsive UI
* REST API integration
* MongoDB database connection

------------------------------------------------------------------------------------------

## Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

------------------------------------------------------------------------------------------

## API Routes

### Get All Caterers

GET

```bash
/api/caterers
```

### Get Single Caterer

GET

```bash
/api/caterers/:id
```

### Create Caterer

POST

```bash
/api/caterers
```

------------------------------------------------------------------------------------------

## Project Structure

```bash
backend/
frontend/
```

------------------------------------------------------------------------------------------

## How to Run Project

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------------------------

## Environment Variables

Create `.env` file inside backend folder.

```env
PORT=5000

MONGO_URI=mongodb://panchalparth93_db_user:S6uaYMkAVduMS3HS@ac-baal6jd-shard-00-00.sxet4c3.mongodb.net:27017,ac-baal6jd-shard-00-01.sxet4c3.mongodb.net:27017,ac-baal6jd-shard-00-02.sxet4c3.mongodb.net:27017/?ssl=true&replicaSet=atlas-7qj20a-shard-0&authSource=admin&appName=Cluster0

```

------------------------------------------------------------------------------------------

## Author

Parth Panchal
