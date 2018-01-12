# FlightSight

Tool used to visualize collections of flight data remotley from a web browser. 

## Getting Started

These instructions will run through the installation requirements and setup to prepare the project to be deployed on a server.

### Prerequisites

- Ubuntu 16.04.03 LTS
- MongoDB 3.4.10
- Node.js 4.2.6
- npm 3.5.2
- Java 1.8.0_151
- Unzipping tool


Before installing, update and upgrade package list

```
sudo apt-get update && sudo apt-get -y upgrade
```


Installing MongoDB

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```


Install Node.js and and npm

```
sudo apt-get install nodejs
sudo apt-get install npm
sudo ln -s /usr/bin/nodejs /usr/bin/node
```


Install Java 8

```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

Install Zip (specific program not required)

```
sudo apt install zip
```


### Installing

1. Download and unzip project

2. Install npm packages

    a. Navigate to the project directory
    
    b. Install packages with npm
    ```
    npm install
    npm install passport
    npm install passport-local
    npm install passport-http
    npm install cookie-parser
    npm install express-session
    npm install mongoose
	npm install lru-cache --save
	npm install ejs
    ```

## Deployment

1. Start MongoDB
```
sudo service mongod start
```

2. Load the database
```
 java -jar FixParser.jar CONUS-DPOSMAP.avro
```

3. Start the Node.js server in the background and handle output
```
 node server.js --public=true > stdout.txt 2> stderr.txt &
```
    At this point any SSH clients can be closed. 
    

4. Navigate to http://[ip]:8080/login

    From here you will be redirected to the login page. 

## Built with
- [Cesium](https://cesiumjs.org/) - An open-source JavaScript library for world-class 3D globes and maps
- [MongoDB](https://www.mongodb.com/) - A free and open-source cross-platform document-oriented database program
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine

## Authors
Rowan Senior Project of Fall 2017:
- @Colassi
- @Batkwak
- @cdwhelan
- @DomFun
- @GhostCityx
- @JohanLopera

Rowan Senior Project of Spring 2017

## Acknowledgements 
- Senior Project Proffessor Dr. Ganesh Baliga