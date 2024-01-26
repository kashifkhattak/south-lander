# Tour Management Service

Tour-Management-Service is a MERN stack-based web application designed to streamline the process of planning and booking personalized tours. This platform offers an array of customizable tour plans, allowing users to tailor their travel experiences to their preferences.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Installation (With Docker)](<#installation-(with-docker)>)
- [Installation (Without Docker)](<#installation-(without-docker)>)
- [Contributing](#contributing)
- [License](#license)

## Features

- Variety of pre-designed tour plans.
- Customization options for each tour.
- Integrated with **Stripe** for safe and reliable transactions.
- User-friendly interface for easy navigation.
- Built using **MongoDB**, **Express.js**, **React**, and **Node.js**.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Database Server)
- [Docker](https://www.docker.com/) (Optional, for Docker-based setup)
- [Stripe](https://stripe.com/) (Optional, for recieving payments)

## Configuration

- Rename the env.example file (present in the backend folder) to .env file and configure everything according to your setup.
- Add your stripe API key if you want to recieve client payments. (Optional)

## Installation (With Docker)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tour-management-service.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tour-management-service
   ```

3. Run Docker Compose:

- Ensure Docker is running on your machine.
- Execute the following command:

  ```bash
  docker-compose up --build
  ```

- This will set up the entire environment using Docker.

4. Access the Application:

- The app should be accessible on http://localhost:3000.

## Installation (Without Docker)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tour-management-service.git
   ```

2. Setup MongoDB:

- Ensure MongoDB server is running on your machine.
- Create a new connection to MongoDB.
- Copy the connection string and place it in the .env file.
- All the collections will be automatically created once the backend service is run.

3. Navigate to the project backend:

   ```bash
   cd tour-management-service/backend
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Run the backend:

   ```bash
   npm start
   ```

6. Navigate to the project frontend:

   ```bash
   cd tour-management-service/frontend
   ```

7. Install dependencies:

   ```bash
   npm install
   ```

8. Run the frontend:

   ```bash
   npm start
   ```

9. Access the Application:

- The app should be accessible on http://localhost:3000.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
