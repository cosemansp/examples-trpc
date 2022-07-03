## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Testing API

```bash
# get single user
curl "http://localhost:3000/api/trpc/user.byId?input=1"

# get all users
curl "http://localhost:3000/api/trpc/user.all"

# create user
curl -X POST "http://localhost:3000/trpc/user.create" -d '{"name": "Minka" }' -H 'content-type: application/json'

curl -X POST  "http://localhost:3000/trpc/user.delete" -d '{"id": 7}' -H 'content-type: application/json'
```

with superjson

```bash
# get single user
curl "http://localhost:3000/api/trpc/user.byId?input={%22json%22:1}"
```