# Dumbbell Days

A small, offline-first strength-training companion built around an eight-week dumbbell program. It is deliberately simple: choose a training day, check off exercises, and open a concise form cue when you need it.

## What it does

- Shows the Monday / Wednesday / Friday plan for each of the eight weeks.
- Saves completed exercises on the device, with no account or data collection.
- Folds completed sections to keep an active session calm and focused.
- Provides an exercise help card with a visual cue and plain-language form notes.
- Works offline after its first visit and can be installed to a phone home screen.

## Use it on a phone

1. Open the deployed site in Safari (iPhone) or Chrome (Android).
2. Install it using **Share → Add to Home Screen** on iPhone, or Chrome’s **Install app** option on Android.
3. Open Dumbbell Days from the new home-screen icon. The plan and check-offs now work offline.

## Resetting progress

Use the small **Reset program** button on the start screen. A confirmation appears before it clears all check-offs and returns the program to Week 1. Progress is stored only in that browser on that device.

## Local preview

This is a dependency-free static app. Serve the folder with any static server; for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`. A local server is required for the service worker and offline mode to behave like the deployed app.

## Project structure

```text
index.html              App shell
app.js                  Program data and interactions
styles.css              Phone-first visual design
assets/                 Exercise form illustrations
service-worker.js       Offline cache
manifest.webmanifest    Installable-app metadata
```

## Privacy

There is no backend, account, analytics, or network-based training data. Completed exercises are stored in the browser’s local storage.
