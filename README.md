# Harry Trinh - Personal Portfolio Website

A modern, responsive personal portfolio website built with React showcasing my work as a Full Stack Data Scientist and ML Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with animated cursor and smooth transitions
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Timeline Projects**: Projects organized in a timeline view with category filters
- **Publications Section**: Showcase research papers and publications
- **Easy to Update**: All content managed through a single configuration file

## 🛠️ Built With

- React 18
- React Router v6
- React Bootstrap
- Typewriter Effect
- EmailJS for contact form
- Custom CSS with CSS Variables for theming

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/TrinhDinhPhuc/harrytrinh96.github.io.git
cd harrytrinh96.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🎨 Customization

All content can be easily customized by editing the `src/content_option.js` file:

- Personal information
- Work timeline
- Skills
- Publications
- Projects (with timeline support)
- Social media links
- Contact information

## 📝 Adding New Projects

To add a new project with timeline support:

1. Open `src/content_option.js`
2. Add a new entry to the `projectportfolio` array:

```javascript
{
    title: "Your Project Title",
    description: "Your project description",
    date: "2024",  // Year or date range like "2023-2024"
    category: "Category Name",  // e.g., "Computer Vision", "Web Development"
    link: "/project/your-project/",
    github: "https://github.com/...",  // optional
    website: "https://...",  // optional
    video: "https://...",  // optional
}
```

Projects are automatically organized by year in a timeline view with category filtering!

## 🚀 Deployment

### GitHub Pages

The site is configured to deploy to GitHub Pages:

```bash
npm run deploy
```

This will build the project and push to the `gh-pages` branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `build` folder contains the static files ready for deployment.

## 📧 Contact Form Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service and template
3. Update the credentials in `src/content_option.js`:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_USER_ID`

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons from React Icons
- Animations with custom CSS

## 👤 Author

**Harry Trinh**
- GitHub: [@TrinhDinhPhuc](https://github.com/TrinhDinhPhuc)
- LinkedIn: [phuccoi96](https://www.linkedin.com/in/phuccoi96/)
- Google Scholar: [Profile](https://scholar.google.com/citations?user=0kVHSxoAAAAJ)

---

Made with ❤️ by Harry Trinh

