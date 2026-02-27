import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendToTelegram } from "./telegram";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // POST /api/contact - accepts { name, email, phone, message }
  app.post(
    "/api/contact",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { name, email, phone, message } = req.body || {};

        const text = `<b>New contact message</b>\nName: ${name || "-"}\nEmail: ${email || "-"}\nPhone: ${phone || "-"}\n\nMessage:\n${message || "-"}`;

        await sendToTelegram(text);

        return res.json({ ok: true, message: "Sent to Telegram" });
      } catch (err) {
        return next(err);
      }
    },
  );

  // put additional application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
