import redis from "@/lib/redis";
import { cookies } from "next/headers";

export async function GET() {

  const cookieStore = await cookies(); 
  const visited = cookieStore.get("visited");

  let visits = await redis.get("portfolio_visits");

  if (!visited) {
    visits = await redis.incr("portfolio_visits");

    cookieStore.set("visited", "true", {
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
  }

  return Response.json({ visits });

}