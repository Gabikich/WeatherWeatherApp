# Whether Weather - Assignment Project

## 🌦️ About the Project

Whether Weather is a simple weather forecast website developed as part of the Computer Science course at SETU - Waterford.
The project allows users to:  
  * View a dashboard with cards for their favorite cities.
  * Click on a city to view detailed forecast data (City Focus).
  * Select their favorite cities and display preferences (Preferences Page).

All data is locally sourced from provided JSON files or the included `weather_data.js` file, as per assignment instructions. No external APIs were used.

## 🧰 Technologies Used

* HTML5
* CSS3
* JavaScript 
* Bulma CSS Framework
* Eleventy (Static Site Generator)

## 🚀 Website deployed in netlifly

1. Make sure you have Eleventy installed (`npm install @11ty/eleventy --save-dev`)
2. Run the project locally: eleventy --serve 
 - Open your browser and go to `http://localhost:8080/`

## 📄 Folder Structure

project-root/
│
├── index.html
├── preferences.html
├── cityfocus.html
│
├── style.css
├── js/
│   └── bulma.js
├── data/
│   └── weather_data.js
├── images/
│   └── logo.png


## ✅ Features Implemented

### Dashboard Page:

* Dynamically lists user-selected favorite cities from localStorage.
* Each city card links to the City Focus page with the appropriate city parameter.

### Preferences Page:

* Users can select favorite cities and display preferences.
* Selections are saved to localStorage.

### City Focus Page:

* Reads city name from URL parameters.
* Loads data from `weather_data.js`.
* Displays:

  * Today's weather (description, max temperature, wind speed)
  * Current hour forecast (temperature and wind)
  * 7-day summary (weather description for each day)
  * Current time

## 🙌 Credits

* Weather data and specifications provided by the course instructor.
* Bulma CSS: [https://bulma.io/](https://bulma.io/)
* Google Apis for fonts.

---

## 📅 Last Updated

May 2025

---
