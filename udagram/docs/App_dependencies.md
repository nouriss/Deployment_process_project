
# Udagram-api

This application is a web server application, exposing a backend API hosted on amazon AWS elastic beanstalk node and serving queries from an Angular frontend application.

The application is accessiable via the following link:
- http://udagramapi-env.eba-6py7v4pb.us-east-1.elasticbeanstalk.com/

It establish a connection to a postgres datadase where user profils related data are stored as well as connection to a S3 Bucket where media uploded by the users on the frontend web application.



### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

- jsonwebtoken v8.3.2 or later for secure connection with the frontend
    
- aws-sdk v2.429.0 or later for serving aws queries

- dotenv v8.2.0 or later for managing environment variables

- express v4.16.4 or later, web server

- sequelize v6.26.0 or later, for serving postgres database connection and queries
    
```



# Udagram-frontend

This application is an Angular frontend web application that enables users to create accounts and sign-up and sign-in using their e-mails and chosen credentials.

Authenticated user can upload pictures and add captions to them. The successfully uploaded pictures are stored to an AWS S3 Bucket after the query is processed by the web server api application.

User can then see their uploaded pictures in the view.

The Udagram-front application can be reach through the following link:
- http://randomnourdeploymentproject.s3-website-us-east-1.amazonaws.com


### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- A S3 bucket for hosting the static web page.

- jsonwebtoken v8.3.2 or later for secure connection with the frontend
    
- angular/common v8.2.14 or later
 
- angular/core v8.2.14 or later

- angular/forms v8.2.14 or later

- angular/http v7.2.16 or later

- angular/platform-browser v8.2.14 or later

- angular/platform-browser-dynamic v8.2.14 or later

- angular/router v8.2.14 or later

- ionic-native/core v5.0.0 or later

- ionic-native/splash-screen v5.0.0 or later

- ionic-native/status-bar v5.0.0 or later

- ionic/angular v4.1.0 or later

- core-js v2.5.4 or later

- rxjs": "~6.5.4 or later

- zone.js": "~0.9.1 or later
    
```


# Udagram-App


The following images illustrate the frontend view:

- Image 1:
<img src="Images/Udagram_app/Screenshot from 2023-06-01 00-07-12_Udagram_Nour.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 2:
 <img src="Images/Udagram_app/Screenshot from 2023-06-01 00-08-28_Udagram_Nour.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

