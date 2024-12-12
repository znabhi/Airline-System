# This is Airline System

## Project Setup

- clone this repository on your local
- Execute `npm init` in your root directory
- Create .env file in your root directory and add all varibles
  - `PORT = 3000`
- Inside the `src/config` folder create a new file then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "airline_system",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
<!-- if some error shown related to mysql root@localhost password then see this blog -
 https://phoenixnap.com/kb/access-denied-for-user-root-localhost -->
- and then execute
  `npx sequelize db:migrate`

## Tables

### City --> id,name,created_at,update_at

### Airport --> id,name,address,city_id,created_at,update_at

    Relationship --> City has many airports and airports belongs to a city (one to many)
