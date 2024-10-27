# EarnForecast Documentation
## Project Overview
EarnForecast is a React Native app designed to provide users with a projected monthly income, initially focused on Just Eat drivers but designed with modularity in mind for future expansion to other companies.

## Tech Stack
. Frontend: React Native (using Expo)
. Backend: PHP (to handle server-side calculations and data management)
. Database: MySQL (for storing user data, company details, and calculation history)

## Project Structure
1. Frontend (React Native / Expo)
. Company Selection Screen: Displays a list of companies (initially only Just Eat).
. Data Entry Screen: Collects input specific to Just Eat earnings.
. Calculation Component: A reusable module that handles income calculations.
. Results Screen: Shows projected monthly income and breakdown.

2. Backend (PHP)
. API Endpoints:
> POST /api/user-data: Stores user data for selected company.
> GET /api/forecast: Returns income projections based on user data.
. Business Logic: Centralized calculation logic for income forecasting to ensure consistency across different companies.

3. Database (MySQL)
. Tables:
> Users: Stores user profile data.
> Companies: Contains details about each company (e.g., rate calculation methods).
> UserInputs: Holds specific data entries for each forecast calculation.
. Relationships:
> Users ↔ UserInputs: Links user entries to forecast calculations.
> Companies ↔ UserInputs: Allows data to vary by company in the future.

## Frontend - Component Overview
1. CompanySelection.js: Renders the list of companies. Sends selected company data to the Data Entry screen.
2. DataEntry.js: Form for inputting Just Eat-specific data, adaptable for future companies.
3. CalculateForecast.js: Main logic component that receives user input, processes calculations, and sends to the backend.
4. ResultsDisplay.js: Shows forecasted monthly income and breakdown
