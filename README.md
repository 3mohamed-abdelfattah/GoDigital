# Go Digital

## Project Overview

**Go Digital** is a modern web application built using React.js that provides a user-friendly platform to showcase various digital services and articles..........................

<p align="center">
  <img src="https://github.com/user-attachments/assets/60bda9f2-6e73-45fe-98dc-04f861ff8d68" width="100" height="100">
</p>

---

## Screenshots

 <table align="center">
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/818dbd5d-3f5a-4977-bd3f-ed2f385d0d4b" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/56e936bc-60eb-43e2-bc74-611aa37034a7" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/c5e877cd-f432-40dc-86e8-23b36151c408" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/9bbdad66-9967-489d-9ac0-8dc35d3ad6f2" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/0578a44e-f131-4c03-8da0-179fe45ffaac" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/55941e61-48ea-4083-8500-43f57189f00c" alt="Image" /></td>
  </tr>
</table>

---

## Project Structure

The project follows a well-organized folder structure for scalability and maintainability:

```plaintext
└── 📁src
    └── 📁assets
        └── 📁images
            └── 📁forHome
                └── article1.jpeg
                └── article2.jpeg
                └── article3.jpeg
            └── icon.png
            └── logo.png
    └── 📁components
        └── 📁bars
            └── GetQuote.jsx
            └── GetQuoteSideBT.jsx
            └── Header.jsx
        └── 📁custom
            └── ArticleSlider.jsx
            └── CircleDashed.jsx
            └── CircleGray.jsx
            └── GetQuotePopup.jsx
            └── ImageSlider.jsx
            └── PlaneLabel.jsx
            └── SplideSlider.jsx
            └── SuccessRectangle.jsx
        └── 📁forBlog
            └── HeroBlogSection.jsx
            └── SlidesSection.jsx
        └── 📁forHome
            └── HeroSection.jsx
            └── HowWorksSection.jsx
            └── WhyDigitalSection.jsx
        └── 📁forProducts
            └── CoveragesSection.jsx
            └── HeroProductsSection.jsx
            └── WarrantiesSection.jsx
        └── index.js
    └── 📁pages
        └── 📁blog
            └── 📁blogDetail
                └── ForeignersDetail.jsx
                └── GuaranteesDetail.jsx
                └── IntermediariesDetail.jsx
                └── LiabilityDetail.jsx
                └── TravelDetail.jsx
            └── BlogPage.jsx
        └── 📁home
            └── HomePage.jsx
        └── 📁products
            └── ForeignersPage.jsx
            └── GuaranteesPage.jsx
            └── IntermediariesPage.jsx
            └── LiabilityPage.jsx
            └── TravelPage.jsx
        └── 📁profile
            └── Profile.jsx
            └── ProfileContracts.jsx
        └── 📁quote
            └── ForeignersQuote.jsx
            └── GuaranteeQuote.jsx
            └── IntermediariesQuote.jsx
            └── LiabilityQuote.jsx
            └── TravelQuote.jsx
        └── index.js
    └── 📁router
        └── index.jsx
    └── 📁styles
        └── global.css
        └── slider.css
    └── 📁utils
        └── 📁functions
            └── ScrollToTop.util.js
        └── icons.util.jsx
    └── App.jsx
    └── main.jsx
```

## Features
.........

## Technologies Used

- **React.js** for building user interfaces.
- **Tailwind CSS** (global and modular) for styling.
- **React Router** for managing routing and navigation.
- **Splide.js** for creating carousels and sliders.
- **JSX** for component structure and logic.

## Installation

To get started with **Go Digital**, clone the repository and install the required dependencies:

```bash
git clone https://github.com/3mohamed-abdelfattah/GoDigital.git
cd go-digital
npm install
npm run dev
```

Visit `http://localhost:5173` to see the project in action.

## Project Components

### Main Folders and Components

- **`src/assets`**: Contains images and other static assets.
- **`src/components`**: Contains React components, including subfolders for specialized UI components and sections for the homepage.
- **`src/pages`**: Includes page components like `HomePage.jsx`.
- **`src/router`**: Manages routing for different pages of the app.
- **`src/styles`**: Contains global CSS files for styling.
- **`src/utils`**: Utility components or helpers, such as `icons.util.jsx`.

### Key Components

- **`Header.jsx`**: The main navigation bar of the website.
- **`HeroSection.jsx`**: The hero section of the homepage.
- **`GetQuote.jsx`**: A component for user interaction and service quotes.
- **`CircleDashed.jsx` & `CircleGray.jsx`**: Custom UI elements for visual design.
- **`SplideSlider.jsx`**: A slider component for showcasing content.


## License

.......
