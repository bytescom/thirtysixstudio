# Thirtysixstudio Clone

A creative reimagining of thirtysixstudio.com — an Awwwards-winning digital experience — built with React and Tailwind CSS, featuring immersive interactions, refined design, fluid animations, and a dynamic dark/light mode toggle.

---

## Features

- **Dark/Light Theme Toggle:**  
  Easily switch between dark and light modes using the theme toggle in the navbar. Theme preference is saved in localStorage.

- **Responsive Design:**  
  Fully responsive layout using Tailwind CSS utility classes.

- **Animated Sections:**  
  GSAP-powered animations and Locomotive Scroll for smooth scrolling effects.

- **Accordion Services:**  
  Expandable/collapsible service categories with interactive icons.

- **Custom Components:**  
  Includes Navbar, Message, Divider, OurServices, OpenRole, ContactForm, TextAnimation, and more.

---

## Tech Stack

- **React** (with hooks and context)
- **Tailwind CSS** (`darkMode: "class"`)
- **GSAP** (animations)
- **Locomotive Scroll** (smooth scrolling)

---

## Project Structure

```
src
├── components
│   ├── Accordion
│   ├── ContactForm
│   ├── Divider
│   ├── Footer
│   ├── Hero
│   ├── Loader
│   ├── Message
│   ├── Navbar
│   ├── OpenRole
│   ├── OurServices
│   ├── TextAnimation
│   └── ThemeToggle
├── hooks
│   ├── useLocomotiveScroll.js
│   └── useWindowSize.js
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
├── public
│   ├── assets
│   └── fonts
├── styles
│   ├── globals.css
│   └── tailwind.css
```

---

## Installation & Setup

1. Clone the repository:  
   `git clone https://github.com/yourusername/thirtysixstudio-clone.git`

2. Navigate to the project directory:  
   `cd thirtysixstudio-clone`

3. Install the dependencies:  
   `npm install`

4. Run the development server:  
   `npm run dev`

5. Open your browser and visit `http://localhost:5173`

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [Thirtysixstudio](https://thirtysixstudio.com) for the inspiration
- [Awwwards](https://www.awwwards.com) for the recognition
- [React](https://reactjs.org) for the amazing library
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [GSAP](https://greensock.com/gsap) for the high-performance animations
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) for the smooth scrolling effects

---

## Contact

For any inquiries, please email me at [pankajk07414@gmail.com](mailto:your.email@example.com).

---

⚠️ **Disclaimer:** This project is for learning and educational purposes only.

