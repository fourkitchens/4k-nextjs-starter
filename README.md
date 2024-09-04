# Four Kitchens Next.js Starter Kit

## Requirements

1. Node.js 22
2. A compatible Drupal BE site (see requirements below)

## Getting Started

1. Start creating a new Next.js Project using the Starter Kit:

   ```bash
   npx create-next-app@latest --example "https://github.com/fourkitchens/4k-nextjs-starter"
   ```

2. After the project is created, `cd` into the project folder and create a copy of
   `.env.local.example`. Rename it to `.env.local`, edit it and set the right values to match your Drupal
   Backend configuration.

3. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

4. Open your browser and visit the dev site at http://localhost:3000/

## Drupal Requirements

This starter kit is designed to work along a Drupal backend site configured with the following features:

- A [GraphQL](https://www.drupal.org/project/graphql) endpoint
- [GraphQL Compose](https://www.drupal.org/project/graphql_compose) configured to expose the content types and other entities that will be accessed by the Next.js site.
- An [OAuth](https://www.drupal.org/project/simple_oauth) consumer configured with a scope role and a default user with permissions to execute GraphQL queries.

You can use [Sous](https://github.com/fourkitchens/sous-drupal-project) and the
[Sous GraphQL recipe](https://github.com/fourkitchens/sous-graphql) to setup your Drupal BE site.
