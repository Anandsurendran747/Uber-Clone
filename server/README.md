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
```

### Response Examples
#### Success
```json
{
  "token": "your_jwt_token",
  "user": {
    "id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error
```json
{
  "error": "User already exists"
}
```

## POST /users/login

### Description
Logs in an existing user by validating input data, checking for user existence, and verifying the password. Returns a JSON Web Token (JWT) and the user data upon successful login.

### Endpoint
- **URL**: `/users/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type`: `application/json`

### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response Examples
#### Success
```json
{
  "token": "your_jwt_token",
  "user": {
    "id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error
```json
{
  "error": "Invalid email or password"
}

