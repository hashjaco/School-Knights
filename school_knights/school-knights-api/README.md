# Welcome to the School Knights API
### Before fetching, be sure to install all of the dependencies by running ```npm install``` in the root directory.

## Available Scripts

In the project root directory, you can run:

### `npm start`
Runs the server<br>

### `npm run start-dev`
Runs the server in the development mode with hot reload on changes.<br>
Open http://localhost:8081/<route url> to view it in the browser.

### `npm run test`
Runs the start-dev script in debug mode<br>

## Routes
###For testing, begin every url with https://localhost:8081
##### Note: Anything that begins with a colon is a parameter you must include minus the colon.

#### Schools
Root: './schools'

```
GET
'/' : Retrieve all schools<br>
'/:id' : Retrieve school by id

POST
'/create' : Create new school<br>

PUT
'/:id/update' : Update school info

DELETE
'/:id/delete' : Delete school
```
#### Users
Root: '/users'
```
GET
'/' : Retrieve all users<br>
'/:id' : Retrieve user by id

POST
'/create' : Create new user<br>

PUT
'/:id/update' : Update user info

DELETE
'/:id/delete' : Delete user
```
#### Zones
Root: '/zones'
```
GET
'/' : Retrieve all zones<br>
'/:id' : Retrieve zones by id

POST
'/create' : Create new zones<br>

PUT
'/:id/update' : Update zones info

DELETE
'/:id/delete' : Delete zones
```
#### **Trips**
Root: '/trips'

```
GET
'/' : Retrieve all trips<br>
'/:id' : Retrieve trip by id

POST
'/create' : Create new trip<br>

PUT
'/:id/update' : Update trip info

DELETE
'/:id/delete' : Delete trip
```