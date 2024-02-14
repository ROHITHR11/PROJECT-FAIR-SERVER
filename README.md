  

    ---------Server Using Express JS-----------

    1. Create a folder for server
    2. Create package.json file : using npm init -y
    3. Install external external packages to create server : using npm, npm i express cors dotenv 
    4. Create .env file: to hold environmental variable
    5. Create .gitignore file, and add node_modules , .env
    6. Create index.js file
    7. Create express server in index.js
       - import dotenv package, call config method : To Load content of .env file into process.env
       - import express to a variable
       - import cors to a variable
       - Create express server : call express()
       - Use cors in express server :
       - Create a port to host server app
       - Server must Listen the port for client request
       - To resolve client request (http get/post/put/delete request)
           - server.httpMethod(path,request handler function (req,res)=>{})
       - Create a Controllers folder in server app
           - Create js file for user management 
             - Define logic for each request handlers 
       - Create a Routes folder in server app
           - Create a router.js file inside the folder
                - import express
                - to set up Routes for express use Router Class
             
    8.  To run server app : use command , node index.js and also update it as start command in package.json script