# Go Digital

## Project Overview

**Go Digital** is a modern web application built using React.js that provides a user-friendly platform to showcase various digital services and articles..........................

<div align='center' width='350'>
  
  ![icon](https://github.com/user-attachments/assets/60bda9f2-6e73-45fe-98dc-04f861ff8d68)
</div>

## Project Structure

The project follows a well-organized folder structure for scalability and maintainability:

```plaintext
└── 📁src
    └── 📁assets            # Contains all static assets like images and logos.
        └── 📁images        # Holds image files for different sections of the project.
            └── 📁forHome   # Contains images specifically used on the homepage.
                └── article1.jpeg  # Image for article 1
                └── article2.jpeg  # Image for article 2
                └── article3.jpeg  # Image for article 3
            └── icon.png    # The main icon image used in the project.
            └── logo.png    # The logo image of the project.
    └── 📁components        # Contains reusable React components for building the UI.
        └── 📁bars         # Components related to navigation and user interaction.
            └── GetQuote.jsx  # Component for user interaction to get quotes.
            └── Header.jsx    # The main header/navigation bar component.
        └── 📁custom        # Custom-built components for unique UI elements.
            └── CircleDashed.jsx  # A visual component with dashed circles.
            └── CircleGray.jsx    # A visual component with gray circles.
            └── PlaneLabel.jsx    # Component for displaying labels in a plane format.
            └── SplideSlider.jsx  # A slider component for displaying carousels.
            └── SuccessRectangle.jsx  # A component for showcasing success messages.
        └── 📁forHome      # Components specifically designed for the homepage layout.
            └── ArticlesSection.jsx  # Component for displaying articles on the homepage.
            └── HeroSection.jsx      # The hero section of the homepage.
            └── HowWorksSection.jsx  # A section explaining how the service works.
            └── ServicesSection.jsx  # A section highlighting the services offered.
            └── WhyDigitalSection.jsx  # A section explaining the importance of digital solutions.
        └── index.js       # Entry point for the main components.
    └── 📁pages             # Contains page-level components for different routes.
        └── HomePage.jsx   # The main component for the homepage.
        └── index.js       # Entry point for the pages folder.
    └── 📁router            # Manages the routing for different pages within the app.
        └── index.jsx      # Main router configuration file.
    └── 📁styles            # Contains global and specific CSS files for styling.
        └── global.css     # The global stylesheet for overall styling.
        └── slider.css     # Styling specific to the slider component.
    └── 📁utils             # Utility functions and helpers.
        └── icons.util.jsx # A utility file for managing icons.
    └── App.jsx            # The main App component where the application structure begins.
    └── main.jsx           # Entry point for rendering the app.
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