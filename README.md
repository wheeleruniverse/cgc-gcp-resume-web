# GCP Resume App - Frontend

This repository contains the frontend web components for the GCP Resume App, originally created for the [A Cloud Guru Community Challenge](https://www.pluralsight.com/resources/blog/cloud/cloudguruchallenge-your-resume-on-gcp).

This project is a single-page application built with Vue.js. It displays a resume and dynamically fetches and shows a visitor count from its corresponding backend API.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
  - [Local Development](#local-development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

The frontend is a single-page application (SPA) built using the Vue.js framework. It is designed to be built into a set of static assets (HTML, CSS, and JavaScript) that can be deployed to any static hosting service. The site's primary dynamic feature is a visitor counter that makes an AJAX call from a Vue component to a backend API to fetch and display the current count.

## Architecture

The compiled frontend assets are hosted using the following Google Cloud Platform services:

* **Google Cloud Storage:** A bucket is configured for static website hosting to store the compiled output from the `npm run build` command (the contents of the `/dist` directory).
* **Google Cloud Build:** A CI/CD pipeline, defined in `cloudbuild.yml`, automatically builds the Vue.js application, runs tests, and deploys the resulting static files to the Google Cloud Storage bucket.
* **Google Cloud Load Balancer & CDN:** An external HTTPS Load Balancer serves the content from the Cloud Storage bucket. Cloud CDN is enabled to cache the assets at Google's edge locations, reducing latency for users globally.
* **Cloud DNS:** Manages the DNS records for the custom domain, pointing traffic to the Load Balancer.

## Features

* **Component-Based UI:** Built with Vue.js for a modular and maintainable structure.
* **Single-Page Resume:** A clean and modern presentation of a personal resume.
* **Dynamic Visitor Counter:** The `Resume.vue` component handles the API call to a backend service to retrieve and display the total number of site visitors.
* **Automated Builds:** `cloudbuild.yml` defines a process for automated building and deployment.

## Getting Started

### Prerequisites

* [Node.js and npm](https://nodejs.org/en/)
* A deployed instance of the [backend API](https://github.com/wheeleruniverse/cgc-gcp-resume-app).

### Configuration

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/wheeleruniverse/cgc-gcp-resume-web.git](https://github.com/wheeleruniverse/cgc-gcp-resume-web.git)
    cd cgc-gcp-resume-web
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Update API Endpoint:**
    Open the `src/components/Resume.vue` file and locate the `fetch` call. Replace the placeholder URL with the URL of your deployed backend API.

### Local Development

To run the application on a local development server:

```bash
npm run serve
````

This will start a hot-reloading development server, typically available at `http://localhost:8080`.

## Deployment

This application can be deployed manually or via the automated Cloud Build pipeline.

### Automated Deployment (Cloud Build)

The `cloudbuild.yml` file is configured to handle the build and deployment process. To trigger it, submit the build to GCP:

```bash
gcloud builds submit --config cloudbuild.yml .
```

### Manual Deployment

1.  **Build the application:**

    ```bash
    npm run build
    ```

    This command compiles the Vue.js application and places the optimized static files into a `/dist` directory.

2.  **Upload to Google Cloud Storage:**
    Upload the *contents* of the `/dist` directory (not the folder itself) to your GCS bucket configured for static website hosting.

    ```bash
    gsutil -m cp -r dist/* gs://your-unique-bucket-name/
    ```

## Project Structure

```
.
├── cloudbuild.yml          # Configuration for Google Cloud Build CI/CD
├── package.json            # Lists project dependencies and npm scripts
├── public
│   ├── favicon.ico         # Application favicon
│   └── index.html          # The HTML template for the Vue app
└── src
    ├── App.vue             # The main root Vue component
    ├── assets              # Static assets like images
    ├── components
    │   └── Resume.vue      # The main component displaying the resume
    └── main.js             # The entry point for the Vue application
```

## License

This project is licensed under the MIT License.
