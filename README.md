# Full Stack Development of Web Application with MEAN

This project was cleaned for submission — large folders like `node_modules` and build artifacts were removed to reduce zip size.

To run the app:

1. Open a terminal in the project root.
2. Run `npm install` to install all dependencies.
3. Run `npm start` in the root travlr folder to run the Express user site from http://localhost:3000.
4. In the terminal, use: `cd app_admin` to go to the admin subfolder.
5. Run `ng serve` to run the admin page from http://localhost:4200.

> Make sure you have Node.js and npm installed.

# Final Journal

## Architecture

### _Q: Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA)._

### A: The user front-end utilized Express & HTML. This architecture involved designing many controllers and routers, as is common in Express.js apps, to handle the logic and requests from the user front-end using HTTP methods (POST/GET/etc.) to gather data from the back-end. What makes this tool so powerful is the use of JavaScript thoroughly in every aspect of the system. As for the single-page application (SPA) for the system administrators, this was designed utilizing the Angular framework. A major difference is the inherited use of the seperation of concerns, whereas Express must have that hand-designed into the architecture, Angular easily allows for the creation and organization of components/modules for an easily scalable and high performance of a web application all loaded and conducted within one page.

### _Q: Why did the backend use a NoSQL MongoDB database?_

### A: NoSQL databases are highly efficient for quick implementation and scalable projects, much like the Travlr project here. As it's detailed on [MongoDB's informational page](https://www.mongodb.com/resources/basics/databases/nosql-explained/advantages) the additional benefits of the NoSQL database allows for data and schemas to be unstructured for quick development and deployment; and gives a team/developer freedom to scale and adapt the data for the system to grow with the projects needs and uses. This flexibility and easily updatable architecture makes it preferred not only for trending requirements (like cloud designs or high data volume), but also for the fast-paced & agile methodologies in modern app design & production.

## Functionality

### _Q: How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?_

### A: JSON is a data format, derived from the JavaScript programming language logic. While JavaScript is the code that helps bring webpages to life and helps control browser behavior, JSON is a core data storage & transfer used in various languages (Python/C/etc.) that helps serialize the data into strings for easy transmission. This lightweight format not only makes it easy for humans to read, but can also help developers make simple RESTful APIs so that data can be easily read/created/updated/deleted from the backend server database, and displayed on the browser for the frontend operations.

### _Q: Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components._

### A: One of the major instances was the refactoring of the add//edit/delete functions for the SPA. This required restructuring and testing the components to appropriatley allow the adminstrative user on the client side to appropriately manipulate the data held in the server database. Not only did this help the functions to work appropriately, but the refactoring allowed it to be incorporated into the user interface (UI) intuitively so that each listed component was re-used appropriately for ease of use CRUD operations. Reusable UI components like this allows for reduced redundancy, easier maintenance & scalability for the project, and enhanced user experience as a whole. It also helped with faster testing and development/prototyping of the logic and structure of the system.

## Testing

### _Q: Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application._

### A: Methods, the common HTTP client actions like GET/POST/PUT/DELETE, are the essential groundwork for the web app's functions. It allows for the user to perform the actions they need to carry out a system's solution(s) to a given problem. In the instance of the SPA, it helps Travlr administrators to add, update, or delete trip packages for their customers to view and book. Endpoints are where the methods execute, specifically in a web application like this, the specific URL give the methods a channel to send and receive data between the client and the server. As for the security, implemented into the SPA is an authentication (login) method which ensures that only verified employees of Travlr can access the functions of the methods on specific endpoints. This ensures that security is in place, guarding important data and that API security is in place.

## Reflection

### _Q: How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?_

### A: I desire to become a full-stack developer. Learning about and practicing with the MEAN full-stack tools helped me gain a better understanding not only of the proper structure and development process for client/server apps like the Travlr site, but allowed me to learn more about important concepts like user experience principles, APIs and architecture of request-response with methods/endpoints, and understand the importance of security and practice how to properly test for vulnerabilities and mitigate flaws of data and system integrity. These are common necessities in the modern full-stack industry; learning, developing, and mastering these concepts and skills was both eye-opening and statisfying to implement in this project.
