### How to run backend?

1. git clone this repo
2. git checkout -b dev origin/dev (if for development)
3. create `.env` file and copy everything from `.env.example` (and pass your values to empty fields)
4. `npm i`
5. `npm run docker:up` to create databse and adminer
6. `npm run dev` to run the API and fill database

on http://localhost:8080 you can see the adminer
on http://localhost:{`process.env.APP_PORT`} you can send your HTTP requests.