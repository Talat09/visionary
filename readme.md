# Ticket Management System

This is a backend application for a **Ticket Management System** built with **Express.js**, **Prisma**, and **MySQL**. It allows users to register, log in, create tickets, and manage tickets based on their roles (**Admin** or **Customer**).

## Features

- **User Authentication**: Register and login with JWT-based authentication.
- **Role-Based Access Control**:
  - **Customers** can create tickets and view their own tickets.
  - **Admins** can view all tickets and update ticket statuses.
- **Ticket Management**:
  - Create, view, and update tickets.
  - Tickets can have statuses: `Open`, `Resolved`, or `Closed`.

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **Prisma**: ORM for database management.
- **MySQL**: Database.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt**: Password hashing.
- **CORS**: Cross-Origin Resource Sharing.
- **Dotenv**: Environment variable management.

## Setup Instructions

### Prerequisites

- Install **Node.js**.
- Set up a **MySQL** database.
- Configure environment variables in a `.env` file.



## API Endpoints

### Authentication

#### Register a New User
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "customer" // or "admin"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "fullName": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

#### Login
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "fullName": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

### Tickets

#### Create a New Ticket (Customer Only)
**POST** `/api/tickets`

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "subject": "Login Issue",
  "description": "Unable to log in to the system."
}
```

**Response:**
```json
{
  "id": 1,
  "subject": "Login Issue",
  "description": "Unable to log in to the system.",
  "status": "Open",
  "customerId": 1,
  "adminId": null
}
```

#### Get All Tickets (Admin Only)
**GET** `/api/tickets`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "id": 1,
    "subject": "Login Issue",
    "description": "Unable to log in to the system.",
    "status": "Open",
    "customerId": 1,
    "adminId": null,
    "customer": {
      "id": 1,
      "fullName": "John Doe",
      "email": "john@example.com"
    }
  }
]
```

#### Get User's Tickets (Customer Only)
**GET** `/api/tickets/my-tickets`

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "id": 1,
    "subject": "Login Issue",
    "description": "Unable to log in to the system.",
    "status": "Open",
    "customerId": 1,
    "adminId": null
  }
]
```

#### Update Ticket Status (Admin Only)
**PATCH** `/api/tickets/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "status": "Resolved" // or "Closed"
}
```

**Response:**
```json
{
  "id": 1,
  "subject": "Login Issue",
  "description": "Unable to log in to the system.",
  "status": "Resolved",
  "customerId": 1,
  "adminId": null
}
```



