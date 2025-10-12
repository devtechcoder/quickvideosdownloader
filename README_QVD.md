# QuickVideosDownload (QVD)

A modern, multi-platform video downloader website that allows users to download videos from YouTube, Instagram, Facebook, Twitter, TikTok, and Pinterest.

## Features

- 🚀 **Multi-Platform Support**: Download from 6 major platforms
- 🎨 **High-Quality Downloads**: Original quality without watermarks
- ⚡ **Lightning Fast**: Quick download processing
- 🔒 **Secure & Free**: No registration required
- 📱 **Responsive Design**: Works on all devices

## Supported Platforms

- **YouTube** - Download videos, shorts, and music
- **Instagram** - Download posts, reels, stories, IGTV
- **Facebook** - Download videos and posts
- **Twitter/X** - Download tweets and videos
- **TikTok** - Download videos without watermark
- **Pinterest** - Download images and videos

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Copy any video link from supported platforms
2. Paste the link in the download form
3. Select the platform (or use auto-detect)
4. Click "Get Media" to process
5. Download your video in high quality

## Technology Stack

- **Frontend**: React 18
- **UI Framework**: Ant Design + Bootstrap
- **Styling**: CSS3 with custom animations
- **Icons**: Ant Design Icons + Font Awesome
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## File Structure

```
src/
├── components/
│   ├── MultiPlatformDownloadForm.jsx  # Main download component
│   └── ...
├── pages/
│   ├── Auth/
│   │   └── Index_new.js              # Updated landing page
│   └── ...
├── assets/
│   ├── images/
│   │   └── qvd-logo.svg              # QVD logo
│   └── styles/
└── App_new.js                        # Updated main app
```

## Branding

- **Brand Name**: clickXpert
- **Logo**: QVD (stylized letters)
- **Colors**: Modern gradient design
- **Typography**: Clean, professional fonts

## API Integration

The application integrates with a backend API for video processing:

- **Endpoint**: `http://localhost:5000/api/download`
- **Method**: POST
- **Features**: Platform detection, video processing, quality selection

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For support and questions, please contact the development team.

---

**clickXpert** - Your ultimate multi-platform video downloader solution! 🎥✨
