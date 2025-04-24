# ICCISA 2026 Conference Website

This repository contains the website for the International Conference on Computational Intelligence Systems and Applications (ICCISA) 2026, to be held in Nicosia, North Cyprus.

## Overview

The ICCISA 2026 website is a responsive, static website built with HTML, CSS, and JavaScript. It provides information about the conference, including important dates, committees, call for papers, submission guidelines, and registration details.

## Features

- **Responsive Design**: The website is fully responsive and works well on desktop, tablet, and mobile devices.
- **Interactive Elements**: 
  - Committee tabs for viewing Steering and Organizing Committee members
  - "View All Topics" button to display comprehensive list of conference topics
- **Beautiful Hero Section**: Features a background image of Kyrenia Harbor, North Cyprus with a semi-transparent gradient overlay.

## File Structure

- `index.html` - Main HTML file containing the website structure and content
- `styles.css` - CSS file with all styling for the website
- `script.js` - JavaScript file with interactive functionality
- `images/` - Directory containing website images
  - `cyprus_harbor.png` - Hero section background image

## Usage

1. Extract all files to a directory on your web server or local machine
2. Open `index.html` in a web browser to view the website
3. No server-side processing is required as this is a static website

## Customization

### Modifying Content

To update the website content, edit the `index.html` file. The file is structured with clear section IDs and comments to help you locate specific content areas:

- Hero section: Lines 25-50
- Important Dates: Lines 51-90
- Welcome Message: Lines 91-120
- Committees: Lines 121-170
- Call for Papers: Lines 171-250
- Submission: Lines 251-320
- Registration: Lines 321-380

### Styling Changes

To modify the website appearance, edit the `styles.css` file:

- Color scheme is defined using CSS variables at the top of the file
- Each section has its own styling block with clear comments
- Media queries for responsive design are at the bottom of the file

### Changing the Hero Image

To change the hero background image:

1. Replace the `images/cyprus_harbor.png` file with your desired image
2. Alternatively, update the image path in `styles.css` around line 110:
   ```css
   background: linear-gradient(rgba(12, 90, 142, 0.8), rgba(26, 127, 193, 0.8)), url('images/your_new_image.png');
   ```

3. To adjust the opacity of the overlay gradient, modify the rgba values (currently 0.8):
   ```css
   background: linear-gradient(rgba(12, 90, 142, 0.5), rgba(26, 127, 193, 0.5)), url('images/cyprus_harbor.png');
   ```
   Lower values (e.g., 0.5 or 0.3) will make the image more visible.

### Interactive Features

The website includes two main interactive features:

1. **Committee Tabs**: Allows switching between Steering and Organizing Committee information
2. **View All Topics Button**: Toggles the visibility of the conference topics list

These features are implemented in `script.js` and can be modified as needed.

## Browser Compatibility

The website has been tested and works well in modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This website template is provided for the exclusive use of ICCISA 2026 conference organizers.

## Contact

For questions or support regarding this website, please contact the conference organizers at iccisa@neu.edu.tr.
https://muratarslan.me - Murat ARSLAN
