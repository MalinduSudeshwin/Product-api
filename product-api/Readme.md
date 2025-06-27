# Product API with User Registration

A simple REST API built with **Node.js**, **Express**, and **MongoDB**, featuring:

- User Registration & Login (no authentication)
- Full CRUD for Products (name, price, quantity)

---

##  Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- nodemon (for development)

---


---

## ⚙️ Setup Instructions

### 1. Clone or download this repo

```bash
git clone <repo-url>
cd product-api

npm install

.env file Replace MongoDB Url

Test Postman

Use the following API endpoints:

Method	    URL	                                        Description	                    Body (JSON) Example
POST	http://localhost:5000/api/register	            Register User	            { "username": "john", "password": "1234" }
POST	http://localhost:5000/api/login	                Login User	                { "username": "john", "password": "1234" }
POST	http://localhost:5000/api/products	            Add Product	                { "name": "Book", "price": 10, "quantity": 5 }
GET	    http://localhost:5000/api/products	            Get All Products	                    —
GET	    http://localhost:5000/api/products/<id>	        Get Product by ID	                    —
PUT	    http://localhost:5000/api/products/<id>	        Update Product	            { "name": "Pen", "price": 2, "quantity": 100 }
DELETE	http://localhost:5000/api/products/<id>	        Delete Product	                        —