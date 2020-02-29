# Tripper
## Final Project (Lighthouse Labs) 

#### Contributors: [Jay Seo](https://github.com/sjs5953), [Tausif Khan ](https://github.com/tausvels), [Porson Lee](https://github.com/oddporson)

## Problems & Solutions
When people plan for travel, visiting multiple websites to decide destinations and activities to do, taking notes of how much money they have spent, all those cumbersome planning becomes tasks and ruins the traveling experience.

To provide a solution to this, our team myself Jay, Porson, and Tausif came together to build a user friendly website where they can easily browse different destinations and activities, get all necessary information and make decisions in one page.

## Overview
A highly responsive & interactive website for users to build their own itineraries with activity items by easily dragging & dropping. 
Users can search destinations by city, country, activity, or budget. In the main page, users can easily drag and drop avaialbe activities into container and see the budget meter changes accordingly to keep track of how much money they are spending. User can check markers on the map to see where the activities are. Also, users can see a list of friends who have been to the same destination and toggle their name to see their activities. Once they are done, users have the ability to edit/delete/view their itineraries.

## Tech Stacks
**Front End:** React, JavaScript <br/> 
**Back End:** Node, Express, Postgres(Elephant SQL)<br/>
**API:** Google Maps


## Final Project

This is the landing page where users can search destinations by city name, country name, or their budget
!["Screenshot of Home Page"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Landing.png?raw=true)
Once the user input their budget it shows a list of destinations along with the number of activities they can do
!["Screenshot of Search Bar"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Search.png?raw=true)
This is our main page where most of the interactions happen
!["Screenshot of Main page 1"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Main.png?raw=true)
Users can easily drag and drop the activity items they want into the container
!["Screenshot of Main page 2: drag and drop"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Drag%20and%20Drop.png?raw=true)
Users can add more containers by clicking a button and once there is more than 2 days, a slider shows up to help users navigate better
!["Screenshot of Main page 3: add more days"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Slider.png?raw=true)
When the budget goes nagative, users can choose to add more budget but still not stopped from adding more activities
!["Screenshot of Main page 4: adjust budget"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Adjust.png?raw=true)
After finished user can log in
!["Screenshot of Log in Page"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Adjust.png?raw=true)
Once they log in, user can see a list of friends who have been to the same city, and toggle on/off to see the activities they have done before
!["Screenshot of Main page 5: friends"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Friends.png?raw=true)
Save and name the trip
!["Screenshot of Main Page 6: save"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Save.png?raw=true)
User can edit or delete trips
!["Screenshot of Show page"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Show.png?raw=true)
User can see a summary of their itineraries
!["Screenshot of Summary page"](https://github.com/sjs5953/keep-calm-and-travel-on/blob/master/Screenshots/Summary.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command in both the root folder as well as the "server" folder.
3. Start the web server using the `npm start` command while in the "frontend" folder. You will also need to start the client by navigating to the "backend" folder and running this `npm start` command there as well. The web application will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.
