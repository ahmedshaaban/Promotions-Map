# Promotion Map
- Node application for parsing a large csv file and save it in memory, using redis as a cache service
- if the request wasnt cached, will retrive the promo code from the csv file
csv file get updated every 30 mins so there is a cron job that starts every 30 min to read ids.csv from Promotion/store directory

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Redis](https://redis.io/)
- Install [Docker](https://www.docker.com/)
- Install [Docker Compose](https://docs.docker.com/compose/)
- Install [Node.js](https://nodejs.org/en/)

# Getting started without docker-compose
- Clone the repository
```
git clone https://github.com/ahmedshaaban/Promotions-Map.git
```
- Install dependencies
```
cd Promotions
npm install
```
- Save the ids.csv in Promotions/store 
- Start Redis Server
- Build and run the project
```
npm run build
npm start
```
- App now running on port 3000

# Getting started with docker-compose
- run `docker-compose build`
- run `docker-compose up`
- App now running on port 3000

# To run tests
- start redis server
- run `npm run test`