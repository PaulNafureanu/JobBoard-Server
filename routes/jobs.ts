import express from "express";

interface Job {
  id: number;
  platform: string;
  platformId: number;
  title: string;
  description: string;
  salary: string[];
  positions: number;
  company: string;
  location: string;
  imageURL: string;
  applicationURL: string;
  publicationDate: string;
  criteria: string[];
}

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Get all jobs");
});

router.post("/", async (req, res) => {
  res.send("Create a new job");
});

router.get("/:id", async (req, res) => {
  res.send("Get a particular job");
});

router.put("/:id", async (req, res) => {
  res.send("Update a job");
});

router.delete("/:id", async (req, res) => {
  res.send("Delete a job");
});

export default router;
