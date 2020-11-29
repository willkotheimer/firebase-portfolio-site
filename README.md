# PORTFOLIO SITE SERVED WITH FIREBASE
This is a portfolio of projects developed through training attained at Nashville Software School.

## Motivation
The purpose behind this project is to showcase some of the things I've learned throughout the course of development, including the technologies listed below.

## Build status
MVP complete

## Code Style
Vanilla Javascript ES6, HTML5, SCSS, Axios, Firebase, React

## Screenshots
<img width="1257" alt="Gif showing features of site" src="src/images/PortfolioSite.gif">

## Url
[https://portfolio-e85c9.web.app/](https://portfolio-e85c9.web.app)

## Features
This site integrates with firebase, which allows me to serve the portfolio content as data.

## Code Example
```            
import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`).then((response) => {
    resolve(response);
  }).catch((error) => reject(error));
});
export default { getProjects };

```
## The Team
[Will Kotheimer](https://github.com/willkotheimer)

