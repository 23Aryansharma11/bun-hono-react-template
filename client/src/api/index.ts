import { hc } from "hono/client";
import { type ApiRoutes } from "@server/app";

const client = hc<ApiRoutes>("/");

export const api = client.api;

// Example usage
// Get something
/* 
async function getSomething(){
const res = await api.user.$get();

if(!res.ok){
throw new Error("server error")
}

const data = await res.json();
// data={
message: "Message",
data: [] | {},
status: 200 
}
return data
} 

const {data, isPending, error, isFetching} = useQuery({queryKey: ["Some query key"], queryFn: getSomething})

// isFetching is when it refetches
*/

// Post something
/*
api.user.$post({json: value})
*/

// Delete
/*
api.user[":id{[0-9]+}"].$delete({param:{id: id.toString()}})
*/
