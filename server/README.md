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
```

### GET /users/profile

**Description:** Retrieve the profile of the authenticated user.

**Headers:**

- `Authorization`: `Bearer <token>` (optional if token is provided via cookie)

**Cookies:**

- `token`: JWT token (optional if provided via Authorization header)

**Response:**

- **200 OK**

  Returns the user's profile data.

  ```json
  {
    "_id": "user_id",
    "email": "user@example.com",
    "firstname": "John",
    "lastname": "Doe"
    // ...other user fields...
  }
  ```

- **401 Unauthorized**

  If the token is missing or invalid.

  ```json
  {
    "message": "Unauthorized"
  }
  ```

### GET /users/logout

**Description:** Log out the authenticated user by blacklisting the token and clearing the cookie.

**Headers:**

- `Authorization`: `Bearer <token>` (optional if token is provided via cookie)

**Cookies:**

- `token`: JWT token (optional if provided via Authorization header)

**Response:**

- **200 OK**

  Successfully logged out.

  ```json
  {
    "message": "logout"
  }
  ```

- **401 Unauthorized**

  If the token is missing or invalid.

  ```json
  {
    "message": "Unauthorized"
  }
  ```

### POST /captain/register

**Description:** Register a new captain by validating input data, checking for existing captains, hashing the password, and storing the captain in the database. Returns a JWT token and the created captain data upon successful registration.

**Endpoint:**
- **URL**: `/captain/register`
- **Method:** `POST`
- **Headers:**
  - `Content-Type`: `application/json`

**Request Body:**
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

**Response Examples:**
#### Success
```json
{
  "token": "your_jwt_token",
  "captain": {
    "id": "captain_id",
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
  "error": "Captain already exists"
}
```

