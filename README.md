![Banner](./banner.png)

# Randomizer Brasil website - [rbr.watch](https://www.rbr.watch)

This is the open source project for RBR Website. Made by the community for the community.

Our stack

- React
- Remix
- TailwindCSS

# Installation

```sh
# install deps
yarn

# create .env file
cp .env.example .env
```

You should fill the env vars in `.env`

# Development

```sh
yarn dev
```

Now open your browser and access [http://localhost:3000](http://localhost:3000)

# Commit

Stage your files and run `git commit`. This will check for lint errors, type errors and will guide you through commit process

# Contributing
*Comming soon*

# App Folder Structure

## Top level structure
    .
    ├── app                      # Source code for our app
    ├── mocks                    # MSW mocks
    ├── public                   # Public folder
    ├── scripts
    ├── styles                   # CSS files
    └── ...

## Source files
    .
    ├── ...
    ├── config                        # General config files
    │   ├── env.server.ts             # Load ENV vars (server side only)
    │   └── ...
    ├── hooks                         # Custom React Hooks
    │   └── ...                       # Hooks goes here
    ├── routes                        # Application routes
    │   └── ...                       # All of our routes/resource routes/script routes goes here
    ├── services                      # 3rd party integrations
    │   ├── twitch
    │   │   ├── dtos.ts               # DTO from the service
    │   │   ├── models.ts             # Data model classes
    │   │   ├── utils.ts              # Service general utils
    │   │   └── service.server.ts     # Service implementation
    │   └── ...
    ├── styles                        # Auto-generated styles
    │   └── ...
    ├── ui                            # UI Components
    │   ├── components                # Single Responsability Components
    │   └── compositions              # Composable components
    ├── utils                         # General utilities
    │   └── ...
    └── ...
