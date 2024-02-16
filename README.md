# Backend Developer Technical Assessment
Backend Application for the Plooral Test

## Routes 🌐
- `GET /companies`: List existing companies.
- `GET /companies/:companyId`: Fetch a specific company by ID.
- `POST /job`: Create a job posting draft.
- `PUT /job/:jobId/publish`: Publish a job posting draft.
- `PUT /job/:jobId`: Edit a job posting draft (title, location, description).
- `DELETE /job/:jobId`: Delete a job posting draft.
- `PUT /job/:jobId/archive`: Archive an active job posting.

## Technologies used on this project 💻
<div style="display: inline_block">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg">
</div>

<br>

## Specifications 💻
- Node: 20.10.0
- Dependency Management Suite: NPM
- Framework: Express

<br>

## How to install the dependencies 💻
```bash
$ npm install
```

<br>

## Run the project 💻
```bash
$ npm run dev
```