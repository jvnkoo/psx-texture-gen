# PSX texture generator 
![WIP](https://img.shields.io/badge/Status-⚠️%20pre--release%20version!-d93f0b)
![No AI](https://img.shields.io/badge/No%20AI-Pure%20Canvas-2da44e)
![License](https://img.shields.io/badge/License-MIT-0969da)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-24292f?style=flat&logo=github&logoColor=white)

> Transform images into authentic PS1-era graphics with hardware-accurate visual effects

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d1eb4df3-2991-4ba9-9103-034ffde010eb"/>

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## How It Works

Effects are applied in order:
1. Pixelation → 2. Color reduction → 3. Dithering → 4. Vertex wobble → 5. Perspective warping → 6. Texture pages → 7. RGB shift → 8. Subpixel artifacts → 9. Noise

Each effect simulates a specific PS1 hardware limitation.

## Usage

1. Search for images (Wikimedia Commons)
2. Select thumbnail
3. Adjust effects in sidebar
4. RMB to save

## Dependencies

```json
{
  "react": "^19.2.0",
  "simplex-noise": "^4.0.3",
  "react-hot-toast": "^2.6.0",
  "tailwindcss": "^3.4.18",
  "daisyui": "^5.5.5"
}
```

## TODO
- [ ] add crop feature
- [ ] add image upload
- [x] refactor code
- [ ] add more search services
- [ ] make the elements fit on the screen

---
<img src="https://media1.tenor.com/m/Lx6ipmgUZwUAAAAC/cold-winter.gif" width="1000" height="300" alt="Demo">

