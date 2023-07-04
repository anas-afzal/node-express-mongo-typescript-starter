# Express Typescript starter
A boilerplate to quickly start the development of RESTful API in Typescript 

### Tech Stack and Tools

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Zod](https://zod.dev/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/ladjs/supertest)
- [Winston](https://github.com/winstonjs/winston)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Prerequisites

- The following things need to be installed before running the project:

  - [nodejs](https://nodejs.org/en/) (v16.17.0)

## Getting Started

### Setup the project

1. Clone the repository
2. Install the dependencies using:

   ```bash
   npm i
   ```

3. Duplicate `.env.example` in root folder and rename it to `.env.development` using:

   ```bash
   cp .env.example .env.development
   ```

4. Add required environment variables in the `.env.development` file

### Running the project

Start the project using:

```bash
npm run start:dev
```

You can access the API at: `http://localhost:<port>`

```
port: defaults to 4000 if not provided as an environment variable
```
