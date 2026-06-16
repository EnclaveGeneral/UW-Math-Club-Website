# Full Technical Documentation 

## UW Husky Math Club Website — Technical Reference

This document covers the technical stack, architecture, styling conventions, and project structure for the club website. Intended for future officers, developers, or anyone maintaining or extending this codebase.


## Tech Stack

LayerTechnologyVersionFrontend FrameworkReact19Build ToolVite7UI Component LibraryMUI (Material UI)7RoutingReact Router DOM7Backend ComputeAWS Lambda (Node.js)—Backend DatabaseAWS DynamoDB—Backend APIAWS API Gateway (HTTP API)—AWS SDKAWS SDK v3—HostingNetlify—Domainuwhuskymath.club (via Netlify DNS)—SSLLet's Encrypt (via Netlify)—


## Project Structure

The frontend source lives in math-club-website/. The structure follows a standard Vite + React layout:

math-club-website/
├── public/
│   ├── _redirects          # Netlify SPA routing fix (see note below)
│   └── favicon.ico         # Browser tab icon
├── src/
│   ├── assets/             # Images and static media (photos, logos, etc.)
│   ├── components/         # Reusable UI components
│   │   ├── 2048.jsx        # Playable 2048 game component
│   │   ├── modal.jsx       # Score submission modal (calls POST /score)
│   │   └── Navbar.jsx      # Top navigation bar
│   ├── pages/              # Top-level route pages
│   │   ├── HomePage.jsx    # Assembles all home page sections
│   │   ├── OfficersPage.jsx
│   │   ├── JoinPage.jsx
│   │   └── CalendarPage.jsx
│   ├── sections/           # Section-level components used in pages
│   │   ├── SectionOne.jsx      # Hero: club logo + 2048 game
│   │   ├── SectionOneHalf.jsx  # Husky 2048 Leaderboard (calls GET /scores)
│   │   ├── SectionTwo.jsx      # Events / photo highlights
│   │   ├── SectionThree.jsx
│   │   └── SectionFour.jsx     # Sponsors section
│   └── App.jsx             # Root component: sets up BrowserRouter + Routes
├── index.html              # Vite entry HTML — favicon link lives here
├── vite.config.js
└── package.json


## Pages & Routing

Routing is handled by React Router DOM v7 with BrowserRouter. Routes are declared in App.jsx:

PathPage ComponentDescription/HomePageMain landing page/officersOfficersPageCurrent officers list/joinJoinPageLinks to Instagram & Discord/calendarCalendarPageEvents calendar (stub)

SPA Routing on Netlify

Since this is a single-page app deployed on a static host, direct URL access (e.g. navigating to /officers) would normally 404. This is fixed with public/_redirects:

/* /index.html 200

This tells Netlify to serve index.html for all routes and let React Router handle navigation client-side.


## Styling Conventions

### Colors — UW Brand Palette

NameHexUsageHusky Purple#4b2e83Primary backgrounds, section fillsSpirit Purple#32006eDeeper accents, modal backgroundGold#b7a57aAccent colorWhite#ffffffText on dark backgrounds

Responsive Typography

Font sizes use CSS clamp() for fluid scaling across screen sizes rather than fixed breakpoint overrides. Example pattern used throughout:

jsxsx={{ fontSize: "clamp(1.25rem, 3.75vw, 3.25rem)" }}

This means: min 1.25rem, scales with viewport, max 3.25rem.

MUI v7 Grid

MUI v7 uses the updated Grid component — use the size prop, not the old xs/md props:

jsx// Correct (MUI v7)
<Grid size={{ xs: 12, md: 6 }}>

// Incorrect (MUI v4/v5 pattern — will not work)
<Grid xs={12} md={6}>

### Animations

CSS keyframe animations are written inline via MUI's sx prop using the @keyframes syntax. Examples include the logo pulse effect on the hero section and floating SVG elements on the Join page.


## Officers Page

Officers are managed via a plain JavaScript array in OfficersPage.jsx:

jsconst current_officers = [
  {
    name: "...",
    position: "...",
    major: "...",
    bio: "...",
    photo: imported_photo_variable
  },
  // ...
];

To add, remove, or update an officer: edit this array. The page renders dynamically from it — no other changes needed. Photos go in src/assets/ and must be imported at the top of the file.


Leaderboard Backend (AWS Serverless)

The Husky 2048 Leaderboard is backed by a fully serverless AWS stack.

## Architecture

Browser (React)
    │
    ├── GET  /scores  ──▶  API Gateway  ──▶  Lambda (read)   ──▶  DynamoDB
    └── POST /score   ──▶  API Gateway  ──▶  Lambda (write)  ──▶  DynamoDB

## Components

DynamoDB Table: Husky_Math_2048_Score_Leaderboard


Stores entries with Name, Score, and Date attributes
Top-50 scores enforced at write time by the Lambda function


Lambda Functions (Node.js, AWS SDK v3):


Read function — handles GET /scores, returns all stored scores as JSON
Write function — handles POST /score, validates input, writes to DynamoDB


API Gateway: HTTP API with two routes:


POST /score — score submission
GET /scores — leaderboard fetch


CORS is configured on API Gateway to allow requests from localhost (dev) and the Netlify production origin.

Score Validation

The write Lambda performs lightweight server-side validation:


Rejects non-numeric or negative scores
Caps scores at ~200,000 (max theoretically achievable)
Rejects scores not divisible by 4 (all 2048 scores are multiples of 4)


This is calibrated for casual cheating prevention, appropriate for the context.

## Frontend Integration

SectionOneHalf.jsx fetches scores once on page load (useEffect with empty dependency array) and sorts them descending. Dates are formatted to PST using toLocaleString.

modal.jsx handles score submission — it takes the final game score as a prop, collects the player's name, and POSTs to the API. It uses an onSuccess callback to notify the parent component of the result.

API Endpoint URLs

The API Gateway base URL is hardcoded directly in SectionOneHalf.jsx and modal.jsx. If the AWS stack is ever rebuilt or the endpoint changes, update these two files. A future improvement would be to move this to a Vite environment variable (VITE_API_URL in .env, set in Netlify's dashboard).


## Deployment

The site is deployed on Netlify with the following setup:


Build command: npm run build
Publish directory: dist
Branch: main (auto-deploys on push)
Domain: uwhuskymath.club — DNS A and CNAME records point to Netlify's load balancer
SSL: Automatically provisioned via Let's Encrypt; Force HTTPS is enabled


The repository root contains the math-club-website/ subdirectory. Make sure Netlify's base directory is set to math-club-website/ in the site settings.


Local Development

bashcd math-club-website
npm install
npm run dev

The dev server runs at http://localhost:5173 by default. The leaderboard API calls will hit the live AWS endpoints even in development (CORS is configured to allow localhost).


Key Things to Know for Future Maintainers


No backend server. Netlify only serves static files. Any dynamic functionality must go through the AWS Lambda/API Gateway setup or a similar serverless approach.
MUI v7 breaking changes. If you're referencing MUI v4/v5 documentation online, the Grid API is different. Always use the size prop.
React Router v7. Some online examples reference v5/v6 APIs. The <Routes> + <Route> pattern used here is correct for v7.
The _redirects file is critical. Do not delete public/_redirects — without it, any direct URL navigation or page refresh on a non-root route will return a 404.
AWS SDK v3 syntax. Lambda functions use the modular v3 SDK (@aws-sdk/client-dynamodb). It has a different import/usage pattern from the older v2 SDK. Don't mix them.

ShareProject contentMath Club WebsiteCreated by youEnclaveGeneral/UW-Math-Club-WebsitemainGITHUB
