npm install

/*command for run */
npm run dev


.env 

PORT=3002
MONGO_URL=
JWT_SECRET=123


1. register api :-

url :- http://localhost:3002/api/users/register

body : {
  "name":"vihang",
  "email:"test@123",
  "password:"123456",
  "role":"admin"
}


2. login api :-

url :- http://localhost:3002/api/users/login

body : {
  "email:"test@123",
  "password:"123456",
}


3. event create api :-

    url :- http://localhost:3002/api/events/create

    body : {
      "name":"first event",
      "date:"17-04-2026",
      "capacity:50
      }

4.event get api :-

  url :- http://localhost:3002/api/events/getEvents
  
  req.query = start ,end, page,limit



5.event upadte api :-

  url :- http://localhost:3002/api/events/updateEvent/:id
   id = mongo id 
   
  body : {
    "name":"first event",
    "date:"17-04-2026",
    "capacity:50
    }

6.event delete api :-

  url :- http://localhost:3002/api/events/deleteeEvent/:id
  req.params 
  id= mongo id
