
# instagramClone-UserInfo-LoginSystem

This API documentation outlines the endpoints, request/response formats, and error handling forinstagramClone-UserInfo-LoginSystem : Experience the essence of Instagram with instagramClone-UserInfo-LoginSystem project ! Seamlessly built using HTML, CSS, JavaScript, Express.js, and MongoDB, this full-stack web app lets users create accounts, securely log in, manage profiles just like on Instagram.

#### Base URL: [http//localhost:8087](http//localhost:8087)

## Register Endpoint
This endpoint allows users to register an account.

**Endpoint: `/register`**

**HTTP Method**: POST

**Request Body:**
```
{
    "name":"AdyaRudra",
    "email":"Adyarudra@gmail.com",
    "password":"AdyaRudra143",
    "bio":"I am AdyaRudra",
    "username": "adyarudra"
}
```
**Response (Success - 200 Created):**
```
{
    "msg": "Signup Success",
    "User": {
        "name": "AdyaRudra",
        "email": "adyarudra@gmail.com",
        "password": "$2a$12$h4qOcpmeJdwUzwFiTGA/ZOdnrAgIqSsMj/ixuSC/BvevHarMF55Nu",
        "bio": "I am AdyaRudra",
        "username": "adyarudra",
        "_id": "64db65be497a0f3435771a4c",
        "__v": 0
    }
}
```
## Error Handling

**Response (Error - 400 Bad Request):**
```
{
    "message": "All input fields are required"
}
```

**Response (Error - 501 Not Implemented):**
```
{
    "msg": "E11000 duplicate key error collection: user.users index: email_1 dup key: { email: \"adyarudra@gmail.com\" }"
}
```

## Login Endpoint
This endpoint allows users to log in to their account.

**Endpoint: /login**

**HTTP Method:** POST

**Request Body:**
```
{
    "username": "adyarudra",
    "password":"AdyaRudra143"
}
```
**Response (Success - 200 OK):**
```
{
    "success": true,
    "data": {
        "_id": "64db65be497a0f3435771a4c",
        "name": "AdyaRudra",
        "email": "adyarudra@gmail.com",
        "password": "$2a$12$h4qOcpmeJdwUzwFiTGA/ZOdnrAgIqSsMj/ixuSC/BvevHarMF55Nu",
        "bio": "I am AdyaRudra",
        "username": "adyarudra",
        "__v": 0
    }
}
```
**Response (Error - 404 Not Found):**
```
{
    "success": false,
    "msg": "Password is in correct, Try Again!"
}
```

## Error Handling

**Response (Error - 409 Conflict):**
```
{
    "success": false,
    "message": "Account already exists with provided email id"
}
```
**Response (Error - 404 Not Found):**
```
{
    "success": false,
    "msg": "No Account Found Associated with this username"
}
```
## Home Endpoint
This endpoint allows users to log in to their account.

**Endpoint: /**

**HTTP Method:** GET

**Response (Success - 200 OK):**
```
{
    "msg": "Success",
    "data": {
        "_id": "64db65be497a0f3435771a4c",
        "name": "AdyaRudra",
        "email": "adyarudra@gmail.com",
        "bio": "I am AdyaRudra",
        "username": "adyarudra",
        "__v": 0
    }
}
```

## Conclusion and Final Thoughts

Thank you for checking out my project! I hope you find it useful and interesting. This project was a great learning experience for me, and I'm excited to see how it might be helpful to others in the future.

## Acknowledgments

I would like to express my gratitude to [Hitesh Sir](https://github.com/hiteshchoudhary), Arsh Sir and [Viswa Sir](https://github.com/Vishwa07dev)for their valuable insights inspiration.

## Contact Information

Feel free to reach out to me via email at rudraprasadmohapatra51@email.com or find me on [rajarudraaa](https://twitter.com/rajarudraaa).

## License

This project is a personal development learning project created by [Rudraprasad Mohapatra](https://github.com/Rudraprasad-Mohapatra). It is not formally licensed under any specific license, and no rights are granted for its use by others. The code and content within this project are meant for educational purposes and to showcase my personal growth in software development.

Please respect that this project is not open for external use, distribution, or modification without explicit permission. If you have any questions or would like to discuss collaboration, feel free to contact me.

This README and the accompanying code are intended to serve as a record of my learning journey and to share my progress with others. Any similarities to existing projects are purely coincidental.

### Thank You

I would like to express my gratitude to Histesh Sir, Arsh Sir and Viswa Mohan Sir for their support, guidance, and inspiration during the creation of this project.

