# Infrastructure
## Usage Example:

- The end user can create an account by signing-up via the frontend application where his credential will be 
checked by Amazon Cognito service and stored to the database.
- An Authenticated user can create a post (Image + caption):

## Dependencies:
The following images illustrate an overview of the Udagram application infrastructure.


<img src="Images/Infrastructure_Diagram.drawio.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>



- An Anglar frontend application is hosted on an AWS S3 static web page hosting service.
- A nodejs server api application is hosted on AWS elastic beanstalk service.
- The user commited credential are authenticated by AWS Cognito service.
- The user profile data are stored on AWS RDS hosting a postgres Database.
- The user uploaded pictures/media are stored on S3 Bucket.


## Components:

### Angular Front-End hosted on AWS S3:

The frontend app is hosted on AWS S3, the app can be reach through the following link:

http://randomnourdeploymentproject.s3-website-us-east-1.amazonaws.com

The status of the S3 bucket can be seen in the following image set:

- Image 1:
<img src="Images/Web_hosting_S3/Screenshot from 2023-06-01 00-27-56_Web_Static_hosting_S3.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 2:
<img src="Images/Web_hosting_S3/Screenshot from 2023-06-01 00-28-52_Static_Web_Hosting_S3_2.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 3:
 <img src="Images/Web_hosting_S3/Screenshot from 2023-06-01 00-30-05_Static_web_hosting_S3_3.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 4:
 <img src="Images/Web_hosting_S3/Screenshot from 2023-06-01 00-31-00_Static_Web_hosting_S3_4.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 5:
 <img src="Images/Web_hosting_S3/Screenshot from 2023-06-01 00-33-42_Static_web_Hosting_S3_5.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 6:
 <img src="Images/Web_hosting_S3/Screenshot from 2023-06-01 00-34-23_Static_web_hosting_S3_6.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>



### Web server API back-end application hosted on AWS Elastic Beanstalk:

The backend app is hosted on AWS Elastic beanstalk, the app can be reach through the following link:

http://Udagramapi-env.eba-6py7v4pb.us-east-1.elasticbeanstalk.com

The elastic beanstalk configuration file can be found under udagram/udagram-api/.elastikbeanstalk/config.yml
-  Environment name: Udagramapi-env
-  Application name: udagram_api
-  Application artifact path: ./www/Archive.zip
-  Default_platform: Node.js 14 running on 64bit Amazon Linux 2

The status of the elastic beanstalk environment can be seen in the following image set:

- Image 1:
<img src="Images/Elasticbeanstalk/Screenshot from 2023-06-03 02-44-33_Udagramapi_env.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 2:
 <img src="Images/Elasticbeanstalk/Screenshot from 2023-06-03 02-45-24_Udagram_env_config1.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 3:
 <img src="Images/Elasticbeanstalk/Screenshot from 2023-06-03 02-46-16-Udagram_env_config2.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 4:
 <img src="Images/Elasticbeanstalk/Screenshot from 2023-06-03 02-47-03_Udagram_env_config_3.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 5:
 <img src="Images/Elasticbeanstalk/Screenshot from 2023-06-03 02-47-03_Udagram_env_config_3.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 6:
 <img src="Images/Elasticbeanstalk/Screenshot from 2023-06-03 02-47-32_Udagram_env_config4.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>



### Media storage hosted on AWS S3 Bucket

The backend app stores user uploaded pictures on an S3 Bucket.


The status of the S3 bucket can be seen in the following image set:

- Image 1:
<img src="Images/Media_bucket/Screenshot from 2023-06-01 00-35-13_Media_Bucket_S3_1.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 2:
 <img src="Images/Media_bucket/Screenshot from 2023-06-01 00-36-15_Media_Bucket_S3_2.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 3:
 <img src="Images/Media_bucket/Screenshot from 2023-06-01 00-37-13_Media_Bucket_S3_3.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 4:
 <img src="Images/Media_bucket/Screenshot from 2023-06-01 00-37-52_Media_Bucket_S3_4.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 5:
 <img src="Images/Media_bucket/Screenshot from 2023-06-01 00-39-06_Media_Bucket_S3_5.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>



### Database hosted on AWS RDS:

The backend app stores user data on a postgres database hosted on an AWS RDS.


The status of the Database can be seen in the following image set:

- Image 1:
<img src="Images/RDS_Database/Screenshot from 2023-06-04 17-28-29_1.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 2:
 <img src="Images/RDS_Database/Screenshot from 2023-06-04 17-30-25_2.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 3:
 <img src="Images/RDS_Database/Screenshot from 2023-06-04 17-30-45_3.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 4:
 <img src="Images/RDS_Database/Screenshot from 2023-06-04 17-31-10_4.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 5:
 <img src="Images/RDS_Database/Screenshot from 2023-06-04 17-31-32_5.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 6:
 <img src="Images/RDS_Database/Screenshot from 2023-06-04 17-32-03_6.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>





