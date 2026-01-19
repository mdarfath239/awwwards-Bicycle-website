# Awwwards Bicycle Website

## Project Overview
The Awwwards Bicycle Website is a modern, responsive web application built using Next.js and TypeScript. It features a sleek design and interactive components, making it ideal for showcasing bicycles or similar products. The project is optimized for performance and accessibility, adhering to best practices in web development.

## Features
- **Responsive Design**: Ensures the website looks great on all devices.
- **Interactive Components**: Includes features like a canvas sequence animation, navbar, and overlay sections.
- **Optimized Performance**: Utilizes Next.js features like server-side rendering (SSR) and static site generation (SSG).
- **Modular Codebase**: Organized structure with reusable components and utilities.

## Installation
Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd awwwards-Bicycle-website
   ```

3. **Install Dependencies**:
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   Start the development server with:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Project Structure
- **app/**: Contains the main application files, including global styles and layout.
- **components/**: Houses reusable React components like `Navbar`, `CanvasSequence`, and `OverlaySections`.
- **public/**: Stores static assets such as images and sequences.
- **utils/**: Includes utility functions like `lenis` for smooth scrolling.

## How It Works
1. **Canvas Sequence**: The `CanvasSequence` component renders an animation sequence using images stored in the `public/sequence/` directory.
2. **Navbar**: The `Navbar` component provides navigation across the website.
3. **Overlay Sections**: The `OverlaySections` component creates visually appealing overlays for content.

## Technologies Used
- **Next.js**: Framework for React applications.
- **TypeScript**: Adds static typing to JavaScript.
- **PostCSS**: For processing CSS with plugins.
- **ESLint**: Ensures code quality and consistency.

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

For any questions or issues, please contact the project maintainer.
