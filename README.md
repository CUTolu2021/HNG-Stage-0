# HNG12 Backend API

https://hng.tech/hire/nodejs-developers 

## Description
This is a public API that returns basic information including email, current datetime, and GitHub URL.

## Setup Instructions
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the server.

## API Documentation
- **Endpoint**: `GET /api/info`
- **Response Format**:
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}

