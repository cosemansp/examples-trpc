## Testing API

```bash
# alive check
curl "http://localhost:8080/trpc/alive"

# get single user
curl "http://localhost:8080/trpc/user.all"

# get all users
curl "http://localhost:8080/trpc/user.byId?input=1"

# create user
curl -X POST "http://localhost:8080/trpc/user.create" -d '{"name": "Minka" }' -H 'content-type: application/json'

curl -X POST  "http://localhost:8080/trpc/user.delete" -d '{"id": 7}' -H 'content-type: application/json'
```