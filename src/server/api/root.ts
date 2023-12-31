import { createTRPCRouter } from "./trpc";
import { advertRouter } from "./routers/advert";
import { profileRouter } from "./routers/profile";
import { bookingRouter } from "./routers/booking"
import { favoriteRouter } from "./routers/favorite"
import { ratingRouter } from "./routers/rating"
 
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  advertisement: advertRouter,
  profile: profileRouter,
  booking: bookingRouter,
  favorite: favoriteRouter,
  rating: ratingRouter
});



// export type definition of API
export type AppRouter = typeof appRouter;
