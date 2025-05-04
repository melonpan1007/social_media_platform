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

![image_2025-05-04_182308888](https://github.com/user-attachments/assets/25730d2c-3af6-4d99-b85b-e17047637187)
![image_2025-05-04_182338960](https://github.com/user-attachments/assets/a1747199-3649-4bee-9291-5fc934bd79ff)
![image_2025-05-04_182259049](https://github.com/user-attachments/assets/5d76c5ce-e71c-48d6-9ea8-535c3ae2ccfa)
![image_2025-05-04_182355884](https://github.com/user-attachments/assets/7bb19c45-ec96-4f9a-bc45-9ac2e2af252f)
![image_2025-05-04_182347838](https://github.com/user-attachments/assets/105f873b-e9f8-4f1b-9b4a-404d2e528b58)
![image_2025-05-04_182523910](https://github.com/user-attachments/assets/c892503b-c8da-41bd-9647-8eb5103b1cf9)
![Screenshot 2025-05-03 182101](https://github.com/user-attachments/assets/ef42580a-2125-4e23-b3d4-503a8c037951)
![image_2025-05-04_182518565](https://github.com/user-attachments/assets/b06c9bec-b526-41f2-b3a4-162c45136de4)
![image_2025-05-04_182511986](https://github.com/user-attachments/assets/220821bc-8c50-48c2-8799-03b45feebf79)
![image_2025-05-04_182506318](https://github.com/user-attachments/assets/ebead954-ee6d-4644-9b9d-de708b1e9154)
![image_2025-05-04_182454895](https://github.com/user-attachments/assets/fcd389a1-f9c4-4b87-be3f-dc084e2b51fd)
![image_2025-05-04_182445995](https://github.com/user-attachments/assets/06a30a2e-4b0c-41d0-b3bc-282fd2db9a60)

![userdb](https://github.com/user-attachments/assets/5b892116-1b35-4aad-b3e4-915b26498f5a)
![postdb](https://github.com/user-attachments/assets/da981b51-5139-4f36-9993-9754fde9ef01)
