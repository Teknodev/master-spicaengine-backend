import * as Identity from "@spica-devkit/identity"
import * as Dashboard from "../../6389e138ea080c002bb4b235/.build"

export default async function(){
	
}
export function signUpTrigger(request, response) {
    Identity.initialize({ apikey: "f2bcj17lawl5x6o", publicUrl: "https://master.spicaengine.com/api" })
	Identity.insert(request.body)
	let test = Dashboard.barChart()
	console.log(test)
	return response.status(200)
	
}

export function loginTrigger(req, res) {
	console.log(req)
	Identity.initialize({ identity: "IDENTITY eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImlkZW50aWZpZXIiOiJzcGljYSIsInBvbGljaWVzIjpbIkFwaUtleUZ1bGxBY2Nlc3MiLCJJZGVudGl0eUZ1bGxBY2Nlc3MiLCJTdHJhdGVneUZ1bGxBY2Nlc3MiLCJQb2xpY3lGdWxsQWNjZXNzIiwiUGFzc3BvcnRGdWxsQWNjZXNzIiwiQWN0aXZpdHlGdWxsQWNjZXNzIiwiU3RvcmFnZUZ1bGxBY2Nlc3MiLCJCdWNrZXRGdWxsQWNjZXNzIiwiV2ViaG9va0Z1bGxBY2Nlc3MiLCJQcmVmZXJlbmNlRnVsbEFjY2VzcyIsIldlYmhvb2tSZWFkT25seUFjY2VzcyIsIjVmZDM1NWZhZWQ5MWYyMDAyZGMwOGY4ZCIsIkRhc2hib2FyZEZ1bGxBY2Nlc3MiLCJGdW5jdGlvbkZ1bGxBY2Nlc3MiLCJTdGF0dXNGdWxsQWNjZXNzIiwiVmVyc2lvbkNvbnRyb2xGdWxsQWNjZXNzIl19.eyJfaWQiOiI1ZjdhZDQ4NjIwNDM3YjIzYWIxNzY5ZmEiLCJpZGVudGlmaWVyIjoic3BpY2EiLCJwb2xpY2llcyI6WyJBcGlLZXlGdWxsQWNjZXNzIiwiSWRlbnRpdHlGdWxsQWNjZXNzIiwiU3RyYXRlZ3lGdWxsQWNjZXNzIiwiUG9saWN5RnVsbEFjY2VzcyIsIlBhc3Nwb3J0RnVsbEFjY2VzcyIsIkFjdGl2aXR5RnVsbEFjY2VzcyIsIlN0b3JhZ2VGdWxsQWNjZXNzIiwiQnVja2V0RnVsbEFjY2VzcyIsIldlYmhvb2tGdWxsQWNjZXNzIiwiUHJlZmVyZW5jZUZ1bGxBY2Nlc3MiLCJXZWJob29rUmVhZE9ubHlBY2Nlc3MiLCI1ZmQzNTVmYWVkOTFmMjAwMmRjMDhmOGQiLCJEYXNoYm9hcmRGdWxsQWNjZXNzIiwiRnVuY3Rpb25GdWxsQWNjZXNzIiwiU3RhdHVzRnVsbEFjY2VzcyIsIlZlcnNpb25Db250cm9sRnVsbEFjY2VzcyJdLCJpYXQiOjE2NzExNzk1MTAsImV4cCI6MTY3MTM1MjMxMCwiYXVkIjoic3BpY2EuaW8iLCJpc3MiOiJodHRwczovL21hc3Rlci5zcGljYWVuZ2luZS5jb20vYXBpIn0.yBIBw5fztFDvu7xL--CbPFCmmbpRU7FLAmjoOAuH5FY", publicUrl: "https://master.spicaengine.com/api" })

	const headerAuthorization = req.headers.get("authorization")
	if (headerAuthorization == null) return res.status(401).send({message: "Unauthorized"})
	const token = headerAuthorization.split(" ")[1]
	console.log(token)

	return Identity.login(req.body.identifier, req.body.password)
}