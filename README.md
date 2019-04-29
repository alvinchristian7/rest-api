# rest-api

Try it on Heroku Site : `https://morning-crag-37700.herokuapp.com/api/todos/`
## Endpoint
### Basic (doesn't require token)
| Routes      | Method | HTML Body       | Description                                          |
|-------------|--------|-----------------|------------------------------------------------------|
| /api/signup | POST   | email, password | Sign Up with new user info                           |
| /api/signin | POST   | email, password | Sign in and get an access token based on credentials |

### TODOS (require token)
| Routes         | Method | HTML Body          | Description                                        |
|----------------|--------|--------------------|----------------------------------------------------|
| /api/todos     | GET    | -                  | Get all the user's todos (Authenticated user only) |
| /api/todos     | POST   | title, description | Create a todo (Authenticated user only)            |
| /api/todos/:id | GET    | -                  | Get a single todo (Owners only)                    |
| /api/todos/:id | PUT    | title, description | Update a todo with a new info (Owners only)        |
| /api/todos/:id | DELETE | -                  | Delete a single todo (Owners only)                 |
