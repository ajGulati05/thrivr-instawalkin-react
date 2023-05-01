# Thrivr/Instawalkin

Welcome to the official GitHub repository for Thrivr/Instawalkin, a groundbreaking last-minute booking platform designed to integrate with all scheduling software without the need for API usage. This repository contains the source code and documentation for our project, which was initially developed on Bitbucket from 2018-2020.

## Project Background

Thrivr/Instawalkin was created to address the need for a seamless, last-minute booking solution that could easily sync with existing scheduling systems without relying on APIs. Our platform aims to streamline the booking process and improve user experiences for customers and businesses by offering an efficient and versatile tool.

## Key Features

- Last-minute appointment booking and walk-in management
- Syncs with all scheduling software without using APIs
- User-friendly interface for customers and businesses
- Advanced search functionality for discovering local services
- Integration with popular calendar apps and tools
- Real-time notifications and updates
- Comprehensive analytics and insights for businesses

## Dashboard

Dashboard project

## Architecture

A React Redux application based around 3 main principles:

- Exverything is a function (functional programming paradigm)
- Immutability
- Re-usability
- Keep components as stateless and functional as possible

The architecture for this application can be broken down into the following:

- **Store** - The single source of truth for the whole application
- **Actions** - A list of actions to perform against the store
- **Reducers** - Containing the logic for actions
- **Components** - Contains the reusable/specific components of ui elements (html)
- **Containers** - Responsible for passing state to components from the store
- **Views** - Responsible for building ui for the actual page routing
- **Hooks** - Containg custom hooks

## Prerequisites

- node (tested with 13.x.x or more, might work with others)
- npm or yarn
- Make sure you have added ssh keys to bitbucket

## Installation Steps

- Install [NodeJS](https://nodejs.org/en/)
- Open your favourite console/terminal
- Install **yarn**
- Install project dependencies `$ yarn install`
- Return to **project root folder** `cd ..`
- Start development server `$ yarn start`

## Start development server

`$ yarn start`

That will open a browser tab with the app and will keep linter running in a loop.

## Build prod version

`$ yarn build`

Then deploy everything inside /build to an HTTP server.

## Run tests

`$ yarn test` or `$ yarn test --coverage`

First command will watch for source changes and rerun tests as needed.

Second command will also run coverage and display reports.

## Running with Docker & Docker compose

### Run App with Docker Development Environment

```
$ docker-compose up -d --build
```

### Run App with Docker Production Environment

```
$ docker-compose -f docker-compose.prod.yml up -d --build
```
