# Smarkets Frontend Engineer Assessment

Hello Smarkets Hiring Team!

Thank you for the opportunity to showcase my expertise as a frontend engineer, I enjoyed completing the assessment and working with Smarkets's API. Overall, I used React to create a Smarkets Exchange Display Web App and utilised 4 API endpoints (Events, Markets, Contracts and Prices).

I will explain my technical choices, challenges, and areas for improvement below.

## Table of Contents

1. [Installation & Usage](#installation--usage)
2. [Tech Stack](#tech-stack)
3. [Technical Choices](#technical-choices)
4. [Challenges](#challenges)
5. [Improvements](#improvements)
6. [Questions](#questions)

## Installation & Usage

To install necessary dependencies, run the following command:

```bash

npm i

```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Alternatively, view it as a [deployed web app](https://smarkets-l22xmlzxs-kanes-projects-57c309e2.vercel.app/) on Vercel.

## Tech Stack

The Tech Stack along with a brief explanation:

- **Typescript**: To ensure type safety and better developer experience, leading to more reliable and scalable code
- **Next.js (React)**: To leverage server-side rendering and static site generation to enhance performance and SEO, such as faster First Contentful Paint (FCP). This is especially ideal as Smarkets API is content heavy with large volumes of data
- **Tailwind CSS**: Selected for quick and consistent styling with its utility-first approach, which is perfect for the task to rapidly develop a small sized web app
- **date-fns**: A date formatter that is chosen because it is lightweight and offers efficient and consistent date manipulation and formatting

## Technical Choices

Approaching the task, the technical choices I made were aligned with these primary goals:

- Replicate the unique feel and brand of Smarkets by adhering closely to fonts, colors and UI design
- While simple, the web app should be usable to directly view exchange information from Smarkets API endpoints from events to bids
- Modular and flexible code structure that can scale quickly with more event types

## Challenges

### 1. API Rate Limits on Requests

The biggest challenge that I faced was managing the rate limit on requests, specifically for getting [Quote Requests](https://docs.smarkets.com/#/prices/get_quotes) which fetches essential information on bids and offers.

Initially, I intended to use progressive rendering to allow different parts of the page to be loaded as the components can fetch data asyncronously in smaller incremental chunks. As each component would perform their own data fetches independently, the page would be able to render progressively without waiting for all of the fetches to be completed. However, I soon realised that it was not possible to delegate the quotes fetch to individual components as there was a limit of only 20 requests per 60 seconds for non-authenticated API users like myself.

As a result, I decided to circumvent this by making a single large fetch call to the quotes API endpoint at the parent component and passed the relevant dataset to the child components through props. Additionally, I focused on fetching only the data that was needed and reduced unnecessary requests or data transfers. This way, I was still able to display data from the quotes API endpoint despite the rate limits and provide meaningful exchange information.

### 2. Dependent Data Fetches

Another difficulty I faced was with dependent data fetches, where the event request has to be made before each market request and finally contracts and quotes requests. As many of the requests depend on the data from a previous request, this contributed to longer loading times and potentially blocking an entire route.

In response, I optimised this by making parallel fetches whenever possible, such as making a parallel fetch for multiple requests that use market_ids, and implemented more error handling to prevent any render failures even if any data fails to fetch. I also used Suspense to stream in the data when fetched, providing a UI skeleton to provide a better user experience even for users with slower loading speeds.

## Improvements

I believe that there is still significant room for improvement, as the web app was completed within a short amount of time. Here are some key improvements I would love to make:

- Implement client-side components for more user interaction with bids and offers buttons
- Build a homepage featuring most popular markets to capture users' attention
- Provide more categorisation of each event in the Side Bar Navigation, as it currently does not have categories for simplicity
- Mobile-responsiveness: I decided to focus on providing a great desktop experience for the web app, but given more time, I would like to add mobile responsiveness or develop a React Native app.

## Questions

If you have any questions for me, please reach me at [kane.chang.fl@gmail.com](kane.chang.fl@gmail.com). Looking forward to hearing from you!
