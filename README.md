# SleekDash - Modern Product Dashboard

A clean, responsive, and professional product dashboard built with vanilla web technologies.

## ✨ Features
- **Live Data**: Fetches 20+ products from the Fake Store API.
- **Real-time Search**: Instant filtering as you type.
- **Smart Sorting**: Sort products by price (Low to High / High to Low).
- **Responsive Design**: Optimized for Desktop (4 cols), Tablet (2 cols), and Mobile (1 col).
- **Modern UI**: Sleek aesthetics with soft shadows, hover effects, and the 'Outfit' typeface.
- **Micro-animations**: Smooth transitions and loading states.

## 🚀 How to Run

### Option 1: Open Directly
Double-click `index.html` to open it in your default browser.

### Option 2: Run via Terminal (Recommended)
Running through a local server is recommended for better handling of API requests and assets.

#### Using Node.js (npx)
If you have Node.js installed, run:
```bash
npx serve .
```

#### Using Python
If you have Python installed:
```bash
# For Python 3.x
python -m http.server

# For Python 2.x
python -m SimpleHTTPServer
```

#### Using PHP
If you have PHP installed:
```bash
php -S localhost:8000
```

Once the server is running, the terminal will provide a URL (usually `http://localhost:3000` or `http://localhost:8000`). Open that link in your browser.

## 🛠️ Project Details & Architecture

### File Structure
- `index.html`: The semantic structure of the dashboard, containing the header, controls, and grid container.
- `style.css`: Modern styling using CSS variables, Flexbox, and Grid. Includes custom animations and responsive breakpoints.
- `script.js`: Handles asynchronous data fetching from the Fake Store API, real-time search filtering, and price-based sorting logic.

### API Endpoint
- **URL**: `https://fakestoreapi.com/products`
- **Method**: `GET`
- **Data**: Returns an array of objects containing `id`, `title`, `price`, `description`, `category`, and `image`.

## 🎨 UI Design Choices
- **Typography**: Uses the 'Outfit' font family from Google Fonts for a premium look.
- **Colors**: A calm indigo primary palette (`#6366f1`) with soft background grays.
- **Interactions**: Subtle hover effects on cards (lift and shadow) and a loading spinner for better UX.
