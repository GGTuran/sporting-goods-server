
---

# Home Of Sports Backend



[Live Link](https://home-of-sports-server.vercel.app/)

## Introduction
This backend server is designed to support an e-commerce platform specializing in selling sports goods. It provides robust features to ensure a seamless and secure shopping experience for customers and effective management capabilities for administrators. This system is particularly beneficial for sports enthusiasts and professionals looking for a variety of sporting goods.

## Project Description

This project involves the development of a robust backend server for an e-commerce platform that specializes in selling sporting goods. The server is designed to manage  product inventory, orders, payments, and other essential functionalities. It aims to create a seamless and secure online shopping experience for customers while providing powerful management tools for administrators.

## Features

- An user can create,update and delete a product from database
- Allows user to filter,sort,search specific products

- Allows an user to order one product or multiple product at a time

## Technology Stack

- Programming Language: TypeScript
- Web Framework: Express.js
- Database: MongoDB(Mongoose for ODM)
- Validation Library: Zod
- Deployment : Vercel



### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation Steps

**Follow this simple step to clone the project:**

```bash
git clone  https://github.com/GGTuran/sporting-goods-server
```

**Now install the dependencies of the project:**

```bash
npm install
```

**You can compile typescript**

```
npm run build
```

## Start the server

**You can run the server in development mode**

```
npm run start:dev
```

**Or you can start the server by running the js files which is recommended**

```
npm run start:prod
```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:


   ```bash
    PORT=%000
    DATABASE_URL=your_own_mongodb_uri
   
   ```

 ## file structure in modules

```bash
modules
├── product
│   ├── product.controller.ts
│   ├── product.model.ts
│   ├── product.route.ts
│   └── product.validation.ts
│   └── product.service.ts
│   └── product.constants.ts
├── order
│   ├── order.controller.ts
│   ├── order.interface.ts
│   ├── order.model.ts
│   └── order.validation.ts
│   ├── order.route.ts
│   └── order.service.ts

```


## Product Routes

### Create Product

- **Method**: `POST`
- **Route**: `/api/products`
- **Description**: Add a new product to the system 

### Get All Products

- **Method**: `GET`
- **Route**: `/api/products`
- **Description**: Retrieve a list of all available products.
### Get SIngle Products

- **Method**: `GET`
- **Route**: `/api/products/:id`
- **Description**: Retrieve a single product.

### Update Product

- **Method**: `PATCH`
- **Route**: `/api/products/:id`
- **Description**: Update the details of a specific product 

### Delete Product

- **Method**: `DELETE`
- **Route**: `/api/products/:id`
- **Description**: Remove a specific product from the system 


## Order Routes

### Create Order

- **Method**: `POST`
- **Route**: `/api/orders`
- **Description**: Create a new order for a product.

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. Common status codes include:

- `200 OK`: The request was successful.
- `201 Created`: The resource was successfully created.
- `400 Bad Request`: The request could not be understood or was missing required parameters.
- `401 Unauthorized`: Authentication failed or user does not have permissions for the requested operation.
- `403 Forbidden`: Authentication succeeded but authenticated user does not have access to the requested resource.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An error occurred on the server..