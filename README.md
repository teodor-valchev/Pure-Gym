
# Pure Gym

Pure Gym is a web application designed to manage and interact with gym-related data, built using React.js for the client-side and communicating with a REST API for data operations. The application features include user authentication, catalog view, detailed record views, comments, and CRUD operations on gym-related data.


## Features

1. Dynamic Pages:
- `Catalog`: Displays a list of all gym classes.
- `Details`: Shows detailed information about a specific class.
- `Create`, `Edit`,` Delete`: Logged in users can create, update, and delete their own records and comments.

2. User Roles:

- `Guest Users`: Can access the catalog and details pages.
- `Authenticated Users`: Can create, edit, and delete records, as well as interact with  -  records through comments.

3. Technologies Used:

- `React.js`: For building the user interface.
- `React Router`: For client-side routing.
- `Bootstrap`: For responsive design.
- `REST API`: For server-side data management.
- `GitHub`: For source control and version management.



## Project Structure

 `src`:
- `components`: Contains all the React components.
- `context`: Contains context providers for authentication and other global states.
- `guards`: Contains authentication guard.
- `services`: Contains service files for making API calls.
- `hooks`: Contains custom hooks.
- `lib`: Contains libraries.
- `utils`: Contains helper functions.
- `App.jsx`: Main application component.
- `index.jsx`: Entry point of the application.
## Getting Started

- Prerequisites: Node.js and npm installed on your machine.

## Installation
1. Clone the repository:
```bash
  git clone https://github.com/teodor-valchev/Pure-Gym.git
```

2. Go to the project directory

```bash
  cd Pure-Gym/client
```

3. Install dependencies

```bash
  npm install
```

4. Start the client

```bash
  npm run dev
```

5. Start the server

```bash
  cd server
  node server.js
```
Here is more information about how the server works: https://github.com/softuni-practice-server/softuni-practice-server/tree/master

Open your browser and navigate to http://localhost:5147


## Usage

- Navigate to the catalog to see all gym classes.
- Click on a class to view details.
- Registered users can or logged in to create, edit, or delete classes.
- Interact with other user's gym classes through comments.
## Author

- Teodor Valchev - @teodor-valchev - teodor.valxev@gmail.com


## Tech Stack

**Client:** HTML, CSS, JavaScript, React

**Server:** SoftUni Practice Server

**Styling:** CSS, Bootstrap

