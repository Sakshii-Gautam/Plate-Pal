# Plate-Pal (Recipe Book Web Application)

PlatePal is a is a web application that allows users to search for different types of food meals and recipes based on their name, ingredients, categories or regions where it is originated. The users can sign up, login, and logout of the website, browse through different categories of food, see the recipe's details such its images, videos, ingredients, instructions and save their favorite dishes.

## Technologies Used

* ReactJS v.18.2
* Material-UI (MUI)
* Themealdb APIs for fetching meals or recipe details
* React Router for client-side routing
* Firebase for authentication
* Redux Toolkit for state management
* Axios library for API calls
* React Hook Form with Yup validations for form validation

## Installation and Setup

1. Clone the repository from GitHub   
```git clone https://github.com/Sakshii-Gautam/Plate-Pal.git```

2. Install dependencies  
```npm install```

3. Start the application  
```npm start```

4. Access the application on `http://localhost:3000`

## Features

* Authentication: Users can sign up, login, and logout of the website using Firebase authentication. Private routes are protected from unauthenticated users.

* Search and Browse: Users can search for different types of food meals and recipes using the ThemealDB API. They can also browse through different categories of food.

* Meal Details: Users can view the details of a meal, including its ingredients, instructions, and a video and image for the dish.

* Favorites: Users can save their favorite dishes by clicking the "Save" icon on the meal details page. The saved dishes are stored in localStorage and can be accessed from the user's profile page.

* Form Validation: The login and signup forms are validated using React Hook Form and Yup.

## Deployment

The project can be deployed to a cloud service, such as Firebase Hosting, by running the following command:  

```npm run build```

This will create a build folder that can be deployed to the cloud service.

## Conclusion

The PlatePal is a React web application that allows users to search for and browse through different types of food meals and recipes. Users can sign up, login, and save their favorite dishes. The application uses Firebase for authentication and Redux Toolkit for state management. 
