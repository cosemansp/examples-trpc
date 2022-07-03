## Testing API

```bash
# get single user
curl "http://localhost:8080/trpc/getUser?input=1"

# get all users
curl "http://localhost:8080/trpc/getUsers"

# create user
curl -X POST "http://localhost:8080/trpc/createUser" -d '{"name": "Minka" }' -H 'content-type: application/json'

curl -X POST  "http://localhost:8080/trpc/deleteUser" -d '{"id": 7}' -H 'content-type: application/json'
```