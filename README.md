# DownloadHub

<p>DownloadHub is a powerful and easy-to-use application that allows users to download YouTube videos in both MP4 and MP3 formats. With a sleek interface and robust functionality, DownloadHub makes it simple to save your favorite videos and audio for offline access.</p>

## Project Structure

The frontend of DownloadHub is organized as follows:

```
frontend/
├── src/                    # Source code directory
│   ├── platforms/         # Platform-specific components
│   │   ├── youtube.jsx    # YouTube L2D functionality
│   │   ├── twitter.jsx    # Twitter L2D functionality
│   │   └── instagram.jsx  # Instagram L2D functionality
│   │
│   ├── components/        # Reusable UI components
│   │   ├── navbar.jsx     # Navigation bar component
│   │   ├── How2Use.jsx    # Usage guide component
│   │   ├── about.jsx      # About section component
│   │   └── footer.jsx     # Footer component
│   │
│   ├── assets/           # Static assets
│   │   └── react.svg     # React logo
│   │
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   ├── App.css           # App-specific styles
│   └── index.css         # Global styles
│
├── public/               # Public assets
└── index.html           # HTML entry point
```

This structure organizes the code by feature and responsibility, making it easy to locate and maintain different parts of the application. The `platforms` directory contains components specific to each supported social media platform, while the `components` directory houses reusable UI elements used throughout the application.

## Screenshot
``` Youtube Download Page ```

![Screenshot from 2025-02-28 18-22-59](https://github.com/user-attachments/assets/1ed6ccae-2f37-43c6-a827-93a1c13bee81)

``` How to use (Page - Scroll 1) ```

![Screenshot from 2025-02-28 18-23-24](https://github.com/user-attachments/assets/f8429da5-4b57-4c4c-89ed-77edfd118bbc)

``` How to use (Page - Scroll 2) ```

![Screenshot from 2025-02-28 18-23-33](https://github.com/user-attachments/assets/06bd26bb-2ad6-4a1d-ab7f-1583a527ce97)

