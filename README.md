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

### Dashboard:

* Dynamically lists user-selected favorite cities from localStorage.
* Each city card links to the City Focus page with the appropriate city parameter.

### Preferences:

* Users can select favorite cities and display preferences.
* Selections are saved to localStorage.

### City Focus:

* Reads city name from URL parameters.
* Loads data from `weather_data.js`.
* Displays:
  * Today's weather (description, max temperature, wind speed)
  * Current hour forecast (temperature and wind)
  * 7-day summary (weather description for each day)

## 🙌 Credits

Bulma CSS Framework - https://bulma.io
Utilizado para o layout do site com classes CSS responsivas, componentes de navegação, cards, botões e formatação geral.

Eleventy (11ty) Static Site Generator - https://www.11ty.dev
Gerador de site estático usado para compilar os arquivos .njk e estruturar o site final na pasta _site.

Day.js – JavaScript Date Library - https://day.js.org
Biblioteca JavaScript leve usada para lidar com datas e horários, como exibir a hora atual ou nomes dos dias da semana.

W3Schools – Documentação HTML, CSS, JS - https://www.w3schools.com
Recurso utilizado como base para consultas rápidas sobre HTML, CSS e JavaScript ao longo do desenvolvimento.

Google Fonts – Fontes Web - https://fonts.google.com
Fonte "Poppins" utilizada no projeto foi importada diretamente do Google Fonts para personalizar a tipografia do site.

---

## 📅 Last Updated

May 2025

---
