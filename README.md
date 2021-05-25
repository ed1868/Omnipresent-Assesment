## Frontend and Backend Assesments for Omnipresent

This Project has two folders.
1) Client (Frontend)
2) Server (Backend)




## Frontend Setup 

### `cd Client`
and run

### `npm install`

## Available Scripts

In the project directory, you can run:
sdf
### `npm run start`

Runs the app in the development mode.<br> Runs on PORT: 3000
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


This Frontend Project will only have succesful form submits if the backend server is also running. 

The purpose of this frontend assesment is to show dynamic form changes according to the Employees chosen Country of work. 

If the user chooses Spain, Ghana, or Brazil, the form will change according to rules given in the assesment. 

When form is submitted, a new Employee user will be created in the backend and saved into a mongo server. 

With more time, I can write rights to retrieve all employees, update employees and use Authentication methods to see which user is actually logged in.




## Backend Setup

### `cd Server`
and run

### `npm install`

You will need to make a .env file with the following Variable 
PORT=5000

This will allow your front end to run on port 3000 while your backend runs on port 5000


## Available Scripts

In the project directory, you can run:
sdf
### `npm run start`

Runs the app in the development mode.<br> Runs on PORT: 5000
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `Endpoints`
Endpoints : GET http://localhost:5000/api/employee

This endpoint will take static Employee data given by Omnipresent and modify it by making an API call to Countries API 

This will add 
1)Country Name
2)Country Currency
3)Country Time Zones
and
4)Employee Identifier (if employee is in Asia or Europe)

To get #4, I used the countries region instead of country name. There are some country names like "United Kingdom of Great Britain and Northern Ireland" in which are in Europe yet might cause a few bugs if found by country name. 

Country region is found to be more reliable finding out if the country is in Europe, or in Asia.


### `npm run test`

To run jest testing, run npm run test. 

This will test both GET and POST endpoints for api/employee

Test number one : This test will make a GET request to  api/employee endpoint with the given static data and ensure it returns a modified array and a status code of 200

Test number two : This test will make a POST request to api/employee endpoint with dummy data and 
ensure the user is being saved and returning a status of 201

