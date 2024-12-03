# API Documentation

## POST /users/register

### Description
Registers a new user by validating input data, checking for existing users, hashing the password, and storing the user in the database. Returns a JSON Web Token (JWT) and the created user data upon successful registration.


### Endpoint
- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`


### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}