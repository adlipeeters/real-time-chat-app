# Realtime Chat App

A full-stack Realtime Chat Application with support for creating chat rooms, adding users to chat rooms, sending real-time messages, and uploading/sending files. The application is built using NestJS, React, GraphQL, GraphQL Subscriptions, Redis, Docker, and PostgreSQL. It also includes secure authentication using refresh and access tokens, profile settings, Zustand for React state management, Mantine UI for frontend UI components, and TypeScript for both frontend and backend.

## Features

- **Chat Rooms**: Users can create chat rooms for specific discussions.
- **User Management**: Ability to add users to chat rooms for collaboration.
- **Real-time Messaging**: Real-time message updates using GraphQL Subscriptions.
- **File Uploads**: Users can upload and share files within the chat.
- **Secure Authentication**: Implemented with refresh and access tokens for enhanced security.
- **Profile Settings**: Users can manage their profile settings.

## Technologies Used

- **Backend**:
  - [NestJS](https://nestjs.com/)
  - [GraphQL](https://graphql.org/)
  - [GraphQL Subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/)
  - [Redis](https://redis.io/)
  - [Docker](https://www.docker.com/)
  - [PostgreSQL](https://www.postgresql.org/)

- **Frontend**:
  - [React](https://reactjs.org/)
  - [Zustand](https://github.com/pmndrs/zustand): A state management library for React.
  - [Mantine UI](https://mantine.dev/): A React component library for modern web applications.
  - [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

- Node.js and npm (for both backend and frontend).
- Docker and Docker Compose for containerization.

### Installation

1. Clone the repository.
2. Navigate to the backend and frontend directories and run `npm install`.
3. Configure environment variables for the backend (e.g., database connection, Redis, etc.).
4. Run the Docker Compose file to start the services: `docker-compose up`.

## Usage

1. Access the application at [http://localhost:3000](http://localhost:5173).
2. Create a chat room and invite users.
3. Start sending real-time messages and sharing files.
4. Securely manage your profile settings.

---

This project is a demonstration of building a Realtime Chat Application with enhanced security features and a modern tech stack.
