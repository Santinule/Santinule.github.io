# Santinule.github.io Website

Personal portfolio website for Santiago Nule built with React.

## Features
- **Home**: Personal introduction and bio
- **Reading List**: Curated book recommendations with descriptions  
- **Contact**: Functional contact form that sends emails via EmailJS
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack
- React 19
- React Router (HashRouter)
- EmailJS for contact form
- CSS with mobile-responsive design
- GitHub Pages for hosting

## Local Development

### Prerequisites
- Node.js (recommend using Node 18 due to compatibility issues with newer versions)
- npm

### Setup
1. Clone the repository:
```bash
git clone https://github.com/Santinule/Santinule.github.io.git
cd Santinule.github.io/santinule-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm start
```

The site will be available at `http://localhost:3000`

**Note**: The `NODE_OPTIONS` flag is required due to OpenSSL compatibility issues with the current React Scripts version.

## Deployment

The website is automatically deployed to [santiagonule.com](https://santiagonule.com) using GitHub Pages.

### Deployment Process
1. Make your changes and test locally
2. Commit and push to main branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

3. Deploy to GitHub Pages:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
npm run deploy
```

### How Deployment Works
- The `npm run deploy` command builds the app and pushes the build files to the `gh-pages` branch
- GitHub Pages serves the website from the `gh-pages` branch
- The main branch contains only source code (keeping it clean)
- Custom domain `santiagonule.com` is configured in GitHub Pages settings

### GitHub Pages Configuration
- **Repository**: Santinule.github.io
- **Source Branch**: `gh-pages`  
- **Source Folder**: `/ (root)`
- **Custom Domain**: santiagonule.com
- **HTTPS**: Enabled

## Contact Form Setup
The contact form uses EmailJS to send emails directly from the frontend:
- Service: Gmail SMTP
- Template: Custom template with name, email, subject, and message fields
- Emails are sent to the configured Gmail address
- Form includes success/error messaging and validation

## Project Structure
```
santinule-portfolio/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   └── Navbar.js   # Navigation component
│   ├── pages/          # Page components
│   │   ├── Home.js     # Home page
│   │   ├── ReadingList.js  # Reading list page
│   │   └── Contact.js  # Contact form page
│   ├── styles/         # CSS files
│   │   ├── Main.css    # Main stylesheet (imports others)
│   │   ├── Website.css # Desktop styles
│   │   └── Mobile.css  # Mobile responsive styles
│   ├── assets/         # Images and media
│   └── App.js          # Main app component with routing
├── build/              # Production build files (auto-generated)
└── package.json        # Dependencies and scripts
```

## Troubleshooting

**Build Errors**: If you encounter OpenSSL errors, always use the legacy provider:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

**Deployment Issues**: Ensure the GitHub Pages source is set to `gh-pages` branch in repository settings.

**Contact Form**: If emails aren't sending, check EmailJS service configuration and API keys.