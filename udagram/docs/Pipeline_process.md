# Contineous Integration:
## CircleCI pipeline:
The CircleCI configuration file can be found under the path /.circleci/config.yml.

### Orbs or environment dependencies:
The circleCI is configured to install dependencies listed in under the Orbs tag.
  - node: circleci/node@5.0.2
  - eb: circleci/aws-elastic-beanstalk@2.0.1
  - aws-cli: circleci/aws-cli@3.1.1

### Jobs (Pipeline steps):

- Build: 
 
  * after setting up the docker image: `cimg/node:14.15` and installing `nodejs` and establishing connection the AWS the process continues as follow:

    *  Install Front-End Dependencies
    *  Install API Dependencies
    *  Front-End Lint
    *  Front-End Build
    *  API Build

- Deploy:
  * after setting up the docker image: `cimg/base:stable` and installing `nodejs`, `aws-cli`, `eb` and establishing connection the AWS the process continues as follow:

    * Deploy App

### workflows:
The Udagram application contineous integration pipline starts with installing the environment dependencies listed in the Orbs section of the configuration file.

Then the prcesses fulfills the build job by building both the frontend as well as the backend appliaction.

At the end of the previous pipline step, a user confirmation is awaited as the workflow stands by in the holding step.

Once the holding step is approuved by the user, the workflow countinues executing and finalize the last job, namely deploying both frontend and backend application to their respective AWS hosting services.

## CircleCI Status:

The status of CircleCI can be seen in the following images:

- Image 1:
<img src="Images/CircleCI/Screenshot from 2023-06-01 02-59-53_circleCI_2.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 2:
 <img src="Images/CircleCI/Screenshot from 2023-06-03 03-02-52_CircleCI_Udagram-env_3.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>

- Image 3:
 <img src="Images/CircleCI/Screenshot from 2023-06-04 17-44-11_4.png" alt="Infrastructure_diagram" style="height: 600px; width:800px;"/>


