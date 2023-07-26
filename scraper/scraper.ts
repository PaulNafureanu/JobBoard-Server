import express from "express";
import d from "debug";
import puppeteer from "puppeteer";

const router = express.Router();
const debug = d("scraper");

router.get("/run", async (req, res) => {
  const target = "https://www.ejobs.ro/locuri-de-munca/it-software";

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(target);
  const title = await page.title();

  await browser.close();

  res.send("Title: " + title);
});

router.get("/abort", async (req, res) => {
  res.send("Scraper aborted...");
});

export default router;
