# Meetups
A simple react app to create and display Meetups. Implemented to understand the basics of Reactjs. The main focus of the app is to understand the important and core concepts of react and how they can be used to build single page applications. 
# Steps followed to build the project
I have used visual studio code as my editor  
Installed node on my system.  
Used npx create-react-app to intilise and create the project structure with react.  
Then use npx start to start the react project on the local machine.  
Please run npm install to install and load all the dependencies if intrested in running from your local computer. Run npm start after that.  
# Dependencies
The Meetups are stored and reterived from a firebase database.  
We make HTTP get and post request to display all the meetups and create new meetups.  
# Source Files
The src folder contains the source code. Here you can find three seprate folders.  
components folder: Contains custom components to create and display meetups. It also contains the components for navigating with in the app.  
pages folder: Contains differnt pages that are seen by the users of the application. Each page is a component in itself which uses the components from the components folder which allows users to view create meetups for the users.  
store folder: Contains the logic to manage and update the state through out the application. React context is used to achive this.  
# App Features
Can create new meet ups from the new meet up link in the navigation bar.  
Can view all meetups.  
Can add a meetup to favorites.  
Can view all favorites and also remove meetup from favorites.
# Firebase Deployment 
The app is deployed on firebase.  
Access the app on https://meetups-b9b44.web.app/  
# Deployment steps
Install firebase tools on your machine. Run the command "npm install firebase-tools -g"  
Next login into firebase. Make sure you are inside the root directory of your react app.  
![image](https://user-images.githubusercontent.com/47956342/116552307-3c50eb00-a93c-11eb-9350-2e88a9f95cba.png)  
You will be propmted to enter your email id and password to login into firebase. If you do not have an account you need to create an firebase account.  
Once successful you should see a the following displayed on the terminal  
![image](https://user-images.githubusercontent.com/47956342/116552735-b1242500-a93c-11eb-9ec1-adefb9ceedf1.png)  
![image](https://user-images.githubusercontent.com/47956342/116552895-e6c90e00-a93c-11eb-88f6-d3dc0076543d.png)  
Next you need to select the firebase features needed for hosting your project. Select the hosting feature as shown below  
Select option use existing project.    
![image](https://user-images.githubusercontent.com/47956342/116553478-81c1e800-a93d-11eb-9d95-86f6db4b91da.png)  
Select your firebase project. You will now need to specify the folder where Firebase will look for assets to deploy. By default, Create React App will generate a build folder that will contain the production assets.    
You will also be asked whether or not Firebase should configure as a single-page app. You’ll want to enter y (Yes) for this option.    
Finally build your application with npm run-script build. Once the build is successful.  
Run the command "firebase deploy"  
![image](https://user-images.githubusercontent.com/47956342/116554157-35c37300-a93e-11eb-80df-17d750900f86.png)  
Once this step is done, you will have the app hosted on firebase and have an URL for your application.  
![image](https://user-images.githubusercontent.com/47956342/116554347-6b685c00-a93e-11eb-9ce9-bafa3d3b55a1.png)  









