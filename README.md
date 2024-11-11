# Todo-List/Note-Taking 

[Live Demo](https://aljer-todo-list-app.netlify.app/)

## Project Description

This is a simple note-taking and todo list application built using React and Firebase. The app allows users to create todo lists with deadlines and priorities, store notes, and manage their tasks efficiently.

## Features
- Create and manage todo lists
- Set deadlines and priorities for tasks
- Store and manage notes
- User authentication (signup/login)
- Data fetching and storage using Firebase

## Technologies Used

- ReactJS
- Tailwind CSS
- Firebase
- Vite

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/aljersulit/todo-list-app.git
   cd todo-list-app
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Add environment variables from Firebase.

- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com)
- Navigate to Project Settings > General > Your apps.
- Add a new web app and register it.
- Copy the Firebase SDK config object.
- Create a `.env.local` file in the root of your project.
- Add the Firebase config variables to the `.env` file like so:
   ```sh
   VITE_APP_FIREBASE_API_KEY=your-api-key
   VITE_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_APP_FIREBASE_PROJECT_ID=your-project-id
   VITE_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_APP_FIREBASE_APP_ID=your-app-id
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

1. Sign up or log in to your account.
2. Create a new todo list and add tasks with deadlines and priorities.
3. Store and manage your notes.
4. View and manage your tasks efficiently.