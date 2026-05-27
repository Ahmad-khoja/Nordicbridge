# NordicBridge CMS Demo

## Project Description

This project is a proof of concept CMS integration for the NordicBridge project.

The application demonstrates how a modern CMS can be integrated into a JavaScript/TypeScript full stack architecture using:

Strapi CMS
Node.js backend
React frontend

The CMS manages content such as articles, authors and media files. The backend fetches data from Strapi and exposes its own API for the React frontend.



# Technologies

## CMS
Strapi v5
SQLite

## Backend
Node.js
Express
Axios
dotenv
cors

## Frontend
React
Vite
Axios



# Project Structure

```text
nordicbridge-cms/

cms/        # Strapi CMS
backend/    # Node.js backend
frontend/   # React frontend
```



# Features

CMS content management
REST API integration
React frontend
Article content type
Author content type
Media upload support
Relation between Article and Author
Environment variables support



# Content Types

## Article
title
content
image
author

## Author
name
bio
avatar



# Environment Variables

## Backend `.env`

```env
CMS_URL=http://localhost:1337
PORT=5000
```

## Frontend `.env`

```env
VITE_API_URL=http://localhost:5000
```



# Installation

## 1. Clone repository

```bash
git clone <repository-url>
```



## 2. Install CMS

```bash
cd cms
npm install
npm run develop
```



## 3. Install Backend

```bash
cd backend
npm install
node server.js
```



## 4. Install Frontend

```bash
cd frontend
npm install
npm run dev
```



# API Endpoint

```text
GET /api/articles
```

The backend fetches content from Strapi and returns JSON data to the React frontend.



# Demo Features

Display articles
Display author information
Display images
Fetch content dynamically from CMS



# Known Limitations

No authentication
No production deployment yet
SQLite used only for development



# Future Improvements

Docker Compose
Authentication
GraphQL integration
Role management
CI/CD pipeline
Production deployment



# Author

Ahmad