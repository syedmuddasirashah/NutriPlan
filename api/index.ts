import express from "express";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
app.use(express.json());

// Example API route
app.get("/api/hello", (req: VercelRequest, res: VercelResponse) => {
  res.json({ message: "Hello from NutriPlan API!" });
});

// Export as Vercel serverless function
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
