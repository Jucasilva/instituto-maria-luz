import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { updateUserName, createOpinion, getApprovedOpinions, createMessage, getApprovedMessages } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
    updateProfile: protectedProcedure
      .input(z.object({ name: z.string().min(1, "Nome nao pode estar vazio") }))
      .mutation(async ({ ctx, input }) => {
        await updateUserName(ctx.user.id, input.name);
        return { success: true };
      }),
  }),

  opinions: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido").optional(),
        comment: z.string().min(10, "Comentário deve ter pelo menos 10 caracteres"),
        rating: z.number().min(1).max(5).optional(),
      }))
      .mutation(async ({ input }) => {
        await createOpinion(input);
        return { success: true };
      }),
    list: publicProcedure.query(async () => {
      return await getApprovedOpinions();
    }),
  }),

  messages: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido").optional(),
        message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
      }))
      .mutation(async ({ input }) => {
        await createMessage(input);
        return { success: true };
      }),
    list: publicProcedure.query(async () => {
      return await getApprovedMessages();
    }),
  }),
});

export type AppRouter = typeof appRouter;
