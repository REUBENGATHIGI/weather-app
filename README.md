# 🌦️ Weather App — Laravel API & Next.js Frontend

A decoupled weather application using **Laravel (backend)** and **Next.js with TypeScript (frontend)**. It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays it with a modern UI using **RippleUI + TailwindCSS**.

---

## 📂 Project Structure
weather-app/  backend/ # Laravel API  frontend/ # Next.js + TypeScript + RippleUI
Install dependencies:

bash
Copy
Edit
composer install

Set up environment:

bash
Copy
Edit
cp .env.example .env
php artisan key:generate

Add your OpenWeatherMap API key to .env:

ini
Copy
Edit
OPENWEATHER_API_KEY=your_api_key_here
Run the Laravel server:

bash
Copy
Edit
php artisan serve
API Endpoint Example:

bash
Copy
Edit
GET http://localhost:8000/api/weather?city=Nairobi
 Frontend – Next.js (with RippleUI)
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Visit in browser:

arduino
Copy
Edit
http://localhost:3000
Search for a city to view weather info.

 API Details
GET /api/weather?city={city_name}
Returns JSON weather data including:

City name

Current temperature

Weather description

Temperature highs/lows

Wind speed

 UI Technologies
Next.js

TypeScript

RippleUI

Tailwind CSS

 Features
Live weather data via OpenWeatherMap API

Responsive UI with Tailwind + RippleUI

Clean separation of frontend and backend

Type-safe code with meaningful commits

To Improve (Stretch Goals)
Add loading spinner and error message UI

Better weather icons and styling

Unit tests and integration tests

Deploy on Vercel + Render/Forge



