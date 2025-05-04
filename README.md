# VestFund
VestFund is a basic investment website I built to help new users learn about different investment options. Users can create an account, log in, fill out their personal financial information, and then explore a learning page that gives a breakdown of each investment type. All user data is stored in local storage, and the app uses simple HTML, CSS, and JavaScript to keep everything smooth and user friendly.

# Features
- Register and log in using email and password
- Information stored locally for every account
- Account page with questions like name, age, income, etc.
- Learning page that shows investment options and lets users check off interests
- Admin page to view stored emails, passwords, and names that is accessible only to those with proper username and password
- Logout button and status indicator at top of the screen

# How to Run
1. Download all the project files.
2. Open `index.html` in any browser.
3. Use the Register page to create a new account.
4. Login to access the account page and learning section.
5. If you log in with:
   - Email: admin@vestfund.com
   - Password: admin  
   You will be guided to the admin page with all user data.

# Files Created
- index.html – homepage
- register.html – register account
- login.html – log in to account
- account.html – enter financial info
- info.html – learn about investments
- summary.html – future page
- admin.html – view stored data (admin only)
- style.css – handles layout and design
- status.js – shows user login status at the top

# Languages Used
- HTML
- CSS
- JavaScript (LocalStorage for saving data)

# Notes
- Everything is saved in browser localStorage
- This is only frontend and there is no backend or real database yet
