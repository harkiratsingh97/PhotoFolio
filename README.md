# PhotoFolio

PhotoFolio is a React-based project that allows users to create new albums and store images within those albums by providing the URLs of the images. The albums and their corresponding image URLs are stored in a Firestore database, providing a seamless and scalable solution for managing and organizing photo collections.

## Features

- **Album Creation**: Users can create new albums to organize their photos efficiently.
- **Image Storage**: Users can store images within albums by providing URLs.
- **Firestore Integration**: Albums and image URLs are stored in a Firestore database, ensuring data persistence and scalability.
- **Real-time Updates**: Changes to albums and images are reflected in real-time, providing a dynamic user experience.
- **Responsive Design**: The application is built with responsiveness in mind, ensuring compatibility across various devices and screen sizes.

## Installation

1. Clone the repository:

   git clone https://github.com/harkiratsingh97/PhotoFolio.git

2. Navigate to the project directory:

   cd PhotoFolio

3. Install dependencies:

   npm install

4. Set up Firebase:

  Create a Firebase project at Firebase Console.
  Add a web app to your Firebase project.
  Copy your Firebase project configuration.
  Create a Firestore database in your Firebase project.
  Enable Firebase Authentication if needed.
  
5. Configure Firebase:
  
  Paste your Firebase project configuration into the src/firebase/firebase.js file.
  Update Firestore security rules to fit your application's requirements.
  
6. Run the application:

npm start

7. Access PhotoFolio in your browser at http://localhost:3000.

##Usage
Create a new album by providing a name.
Add images to the album by pasting their URLs.
View and manage albums and images.
Contributing
Contributions are welcome! Please feel free to submit issues and pull requests.

##Acknowledgements
Firebase - For providing a powerful and scalable backend solution.
React - For building a robust and efficient user interface.
Firestore - For real-time database functionality and seamless integration with Firebase.

