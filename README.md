# MicroFrontend Architecture using Single SPA

![alt text](/GithubImages/arch.svg)

&nbsp;

#### **Micro-frontend** architecture is a design approach in which a front-end app is decomposed into individual, semi-independent “microapps” working loosely together. 
#### **Single-SPA** is a framework for bringing together multiple JavaScript microfrontends in a frontend application.
 
## Project Dependencies 
#### The project uses React, Vue & Single SPA framework & webpack as a module bundler to demonstrate the micro-frontend architecture.
- Navbar & Footer -> Vue (nav-footer)
- Card carousal -> React (card1)
- Products cards -> React (card2)
- Products cards -> React (main)
- Main container -> Single SPA root config -> (root-config)

#### The Micro Frontend applications are also connected with the Spring Boot microservices and uses MongoDB as a database.
- Spring Boot 1 -> card2
- Spring boot 3 -> main

#### The SpringBoot microservices is available here -> https://github.com/100sarthak100/SpringBoot_Microservices

## Project setup
- Clone the repository in a new folder.
```
mkdir microfrontend
cd microfrontend
git clone 
```
- Then install the dependencies for each micro frontend indvidually and start the server.
```
cd card1
npm install
npm start 

cd card2
npm install
npm start

cd main
npm install
npm start

cd nav-footer
npm install
npm run serve

cd root-config
npm install
npm start
```
- The main container will be available on http://localhost:9000

