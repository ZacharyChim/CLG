# 1. Environment requirement

- node.js: 18
- npm: 8.15.0
- strapi: 4.5.3
- next.js: 13.0.6
- Docker: 20.10.21

# 2. Build/run steps

- Project path:

```
/var/www/clg
```

- Docker up:

```
docker compose -f docker-compose.dev.yml up -d
```

- Docker down (delete all images, volumes, and containers):

```
docker compose -f docker-compose.dev.yml down --rmi all -v
```

# 3. Development steps

1. Clone the project from Github:

```
https://github.com/ZacharyChim/clg
```

2. Copy `.env` from both the `/frontend` and `/backend` folder on the server.
3. Use Docker for local development.
4. Push changes to Github.
5. Pull changes from Github and test with Docker on the server.

# 4. Deployment steps

1. Make sure the project is up to date (Git Pull).
2. Run Docker Compose:

```
docker compose -f docker-compose.dev.yml up -d
```

3. Make sure both `Frontend` and `Backend` are running correctly.
4. \*\*To do: Nginx port mapping
