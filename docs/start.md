---
sidebar_position: 1
---

# Neatlist Proyect

## Backend

### Runtime Environment

- NodeJS

### Backend Framework(s)

- Express

### Database

- Baserow
- Baserow Websocket

### Email Verification

- Nodemailer

### Phone Number Verification

- Twilio SMS API

### Payment gateway and subscription management

- Stripe

## Frontend

- React
- react-hook-form
- react-icons

### Base

1. clone repository
2. change branch on frontend
3. ```npm i```
4. make new one branch
5. done!

### Components

1. MainButton: A button component that can be themed as 'primary' (black border, white background) or 'secondary' (black background, white text).

2. BigFilter:

- Contains several SmallFilters components.
- Sends information to storage with 'Apply' buttons.

3. CustomSearch:

- designed input component used for search functionality without choosing options.

4. CustomSelect:

- A button component that displays a popup with options.
- Takes the options, selectName, function, and filters (a list from Redux) as props.

5. Loader:

- A component used for displaying loading or processing status.
- The styling will be remade later.

6. Navigation:

- A navigation component.
- The styling will be remade later.

7. NothingIsHere:

- A component placeholder that will be remade later.

8. SideNavLink:

- Used for the SideNavBar.
- Props: isActive (for different styles when active or not active), iconName (name for choosing the correct SVG picture).

9. SmallFilter:

- A filter component that includes options (checkboxes) and two buttons.
- Mostly used for job titles.
- Props: options (for job titles).

10. Stage:

- A small block component for tables.
- Takes the theme name (color will be added inside components based on the theme name).

11. TableButton:

- A button component for changing tabs.
- Props: activeTab (for changing the active/not active type), onClick (for changing the active/not active type).

12. TableComponent:

- A component for rendering tables.
- Props: th (list of column names), data (object with all the information for the table).

13. TransparentButton:

- A button component without borders and with a white background.

### Aditionals

- src/utils/fetching--saves all functions which allows to change info inside the backend
- src/utils/helpers/abstractions--for make abstract data from data from backend
- src/utils/helpers/functions--all usible functions
- src/utils/helpers/tableFunctions--jsx function for prepairing data for tables

### Technology Stack

- Backend : NodeJS/Express
- Database : Baserow
