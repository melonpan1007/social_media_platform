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

🏃‍♂️ Running Locally
1. Clone repo
bash
git clone https://github.com/yourusername/social-media-platform.git
2. Configure MySQL database
Edit application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/social_db
spring.datasource.username=root
spring.datasource.password=yourpassword
Run MySQL and create database social_db.

3. Start app
bash
./mvnw spring-boot:run
App runs at http://localhost:8080

✅ Use Postman or a frontend client to test the APIs.

🔐 Authentication Flow
User registers → stored with encoded password.

User logs in → returns JWT token.

Include token in Authorization header for all protected routes.

Roles & authorities validated using Spring Security config.

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
Pull requests welcome! Feel free to fork and improve. 🚀

👨‍💻 Author
Your Name Affaan  | LinkedIn : https://www.linkedin.com/in/affaan-shaikh-as1007/

📃 License
This project is licensed under the MIT License.

![image](https://github.com/user-attachments/assets/d0ca1765-8223-43ee-80a0-fd7eb6761121)

![image](https://github.com/user-attachments/assets/f283799a-9328-40f5-ba9c-67adfbdb423e)

![image](https://github.com/user-attachments/assets/97cf275c-598b-416e-8c50-98fb42d5111c)

![image](https://github.com/user-attachments/assets/696945dd-bd0b-4290-9cf5-b73be7bf2495)

![image](https://github.com/user-attachments/assets/67c83e1e-50ee-4f8e-b917-5d6875661c25)

![image](https://github.com/user-attachments/assets/08289087-699a-430f-b3bb-e1fd5ef63e88)

![image](https://github.com/user-attachments/assets/a2e902b0-56c4-4067-adf6-26ddc7d5c6e0)

![image](https://github.com/user-attachments/assets/de4d300c-5523-4add-a043-4ba7e14e0e16)

![image](https://github.com/user-attachments/assets/69876f49-fb5a-4b6d-816c-b8c2628f238d)

![image](https://github.com/user-attachments/assets/8f25de7a-16bf-4c84-95e3-63072433be03)

![image](https://github.com/user-attachments/assets/ddd20075-003f-487d-9da4-514b5277f8ca)

![userdb](https://github.com/user-attachments/assets/5b892116-1b35-4aad-b3e4-915b26498f5a)

![postdb](https://github.com/user-attachments/assets/da981b51-5139-4f36-9993-9754fde9ef01)
