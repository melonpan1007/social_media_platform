# 🐦 Social Media Platform

A full-stack social media platform backend built using **Spring Boot**, **Spring Security**, **JWT**, and **MySQL**, providing user authentication, posting, commenting, following, and role-based access control.

## 🚀 Features
- ✅ User registration & login with JWT-based authentication
- ✅ Role-based authorization (Admin, User, etc.)
- ✅ CRUD operations for Posts and Comments
- ✅ Follow/Unfollow system between users
- ✅ View user profiles with posts, followers, following, and comments
- ✅ Secure password handling using BCrypt
- ✅ MySQL database integration
- ✅ DTOs for clean API responses
- ✅ Proper use of Services, Repositories, and Controllers following MVC architecture

## 📐 Project Structure
src/
 └── main/
      ├── java/com/example/social_media_platform/
      │     ├── controller/
      │     ├── service/
      │     ├── repository/
      │     ├── model/
      │     ├── dto/
      │     └── security/
      └── resources/
            └── application.properties


### **Key Packages**
- `model` - Entity classes (User, Post, Comment, Role, Follower)
- `dto` - Data Transfer Objects for API responses
- `controller` - REST APIs (Authentication, Post, Comment, User, Follow)
- `service` - Business logic
- `repository` - Spring Data JPA repositories
- `security` - JWT configuration, filters, token provider

## 🗄️ Database Schema
- ✅ MySQL relational schema with tables: `users`, `roles`, `posts`, `comments`, `followers`
- ✅ **Entity relationships:**
  - **OneToMany**: User → Posts, User → Comments
  - **ManyToMany**: User ↔ Role, User ↔ Followers

## 📝 API Endpoints (Sample)
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login (JWT response) |
| GET | `/api/users/{id}` | View user profile |
| POST | `/api/follow` | Follow a user |
| DELETE | `/api/follow/{id}` | Unfollow a user |
| POST | `/api/posts` | Create a post |
| GET | `/api/posts/{id}` | View post details |
| POST | `/api/comments` | Comment on a post |

➡️ **All protected endpoints require an Authorization header:**
```makefile
Authorization: Bearer <JWT_TOKEN>

# 🏃‍♂️ Social Media Platform  

A full-stack social media platform backend built using **Spring Boot**, **Spring Security**, **JWT**, and **MySQL**, providing secure authentication, posting, commenting, following, and role-based access control.

## 🚀 Running Locally  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/yourusername/social-media-platform.git

2️⃣ Configure MySQL database
Edit application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/social_db
spring.datasource.username=root
spring.datasource.password=yourpassword
Run MySQL and create the database social_db.

3️⃣ Start the application
bash
./mvnw spring-boot:run
App runs at http://localhost:8080

✅ Use Postman or a frontend client to test the APIs.

🔐 Authentication Flow
User registers → stored with encoded password.

User logs in → returns JWT token.

Include token in Authorization header for all protected routes.

Roles & authorities validated using Spring Security.

🛠️ Technologies Used
Java 17

Spring Boot 3.x

Spring Security

JWT (jjwt)

Spring Data JPA

MySQL

Lombok

Maven

✍️ Contributions
Pull requests are welcome! Feel free to fork and improve. 🚀

👨‍💻 Author
Your Name Affaan | LinkedIn

📃 License
This project is licensed under the MIT License.
