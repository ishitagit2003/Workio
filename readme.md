# Worko.ai Backend API

## Overview
This project implements a backend API for Worko.ai, a platform designed to help job seekers request referrals, resume reviews, interview handholding, career guidance, and mock interviews. The project is developed using Node.js and follows the MVC architecture pattern.

## Goals
- Assess candidate's backend service coding skills.
- Evaluate candidate's self-learning and delivery management skills.

## Specifications
Worko.ai's platform enables job seekers to request referrals from various companies using any job description URL. Additionally, they can request services such as resume reviews, interview handholding, career guidance, and mock interviews.

## Milestones
1. **Backend API Setup**
   - Create a Node.js project with MVC architecture.
   - Implement the controller, service, and DAO layers.
   - Create models for CRUD operations.
   - Create DTOs for request and response handling.
   - Add a validator framework.

2. **Create API**
   - **Endpoints for `/worko/user`:**
     - `GET /worko/user` - List users.
     - `GET /worko/user/:userId` - Get user details by ID.
     - `POST /worko/user` - Create a user.
     - `PUT /worko/user` - Update a user.
     - `PATCH /worko/user` - Partially update a user.
     - `DELETE /worko/user` - Soft delete a user in the database.

3. **Required Payload for User**
   - `Id` (Generated)
   - `Email`
   - `Name`
   - `Age`
   - `City`
   - `Zip code`

4. **Field Validation**
   - Validate `Email`.
   - Validate `Zip code`.
   - Validate `Id` in case of POST/PUT/DELETE.

5. **Database Integration**
   - Persist user information in a NoSQL database.
   - Read database configuration from environment variables.

6. **Testing**
   - Write unit tests with at least 60% coverage.

7. **Documentation**
   - Prepare a README/getting started guide.

8. **Authentication**
   - Implement basic authentication for all APIs.

## Node Modules Used
- `Express` - Web framework for Node.js.
- `Joi` - Validation library.
- `Webpack` - Module bundler.
- `dotenv` - Environment variable management.

## Getting Started

### Prerequisites
- Node.js installed
- NoSQL database (e.g., MongoDB)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/worko-backend-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd worko-backend-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration
1. Create a `.env` file in the root directory.
2. Add the following environment variables:
    ```
    DB_HOST=your_db_host
    DB_PORT=your_db_port
    DB_NAME=your_db_name
    DB_USER=your_db_user
    DB_PASS=your_db_pass
    ```

### Running the Project
1. Start the development server:
    ```sh
    npm start
    ```

### Running Tests
1. Run unit tests:
    ```sh
    npm test
    ```

### API Endpoints

#### User Endpoints
- **GET /worko/user** - List all users.
- **GET /worko/user/:userId** - Get user details by ID.
- **POST /worko/user** - Create a new user.
- **PUT /worko/user** - Update an existing user.
- **PATCH /worko/user** - Partially update a user.
- **DELETE /worko/user** - Soft delete a user.

### Example Requests

#### Create User
```sh
POST /worko/user
Content-Type: application/json
{
    "email": "example@example.com",
    "name": "Ishita Gupta",
    "age": 20,
    "city": "Noida",
    "zipCode": "1309"
}
```

####  Update User
```sh
PUT /worko/user
Content-Type: application/json
{
    "id": "user_id",
    "email": "updated@example.com",
    "name": "Sidhant Gupta",
    "age": 21,
    "city": "Noida",
    "zipCode": "1309"
}
```

### Authentication
Basic authentication is implemented for all the APIs. Use your credentials to access the endpoints.

### Contribution
Contributions are welcome. Please fork the repository and submit a pull request for review.

### License
This project is licensed under the MIT License.
