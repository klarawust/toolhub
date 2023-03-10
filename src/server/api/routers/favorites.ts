import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const favoritesRouter = createTRPCRouter({
  getByUser: publicProcedure.input(
    z.object({
      id: z.string(),
    })
  ).query(({ ctx, input }) => {
    return ctx.prisma.userFavoritedAdvert.findMany({
      where: {
        userId: input.id,
      },
    });
  }),
});