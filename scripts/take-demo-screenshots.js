const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.join(__dirname, "..", "public", "images", "demos");

const SITES = [
  { slug: "kab-dentist", url: "https://keithbrowndds.com/" },
  { slug: "ai-model-arena", url: "https://ai-model-arena-umber.vercel.app" },
  { slug: "my-expiry", url: "https://my-expiry.vercel.app/" },
  { slug: "reflectyr", url: "https://reflectyr.vercel.app/" },
  { slug: "news-alert", url: "https://news-alert-eta.vercel.app" },
  { slug: "study-buddy", url: "https://studdy-buddy-rho.vercel.app/" },
];

const VARIANTS = [
  {
    suffix: "desktop-light",
    viewport: { width: 1280, height: 800 },
    colorScheme: "light",
  },
  {
    suffix: "desktop-dark",
    viewport: { width: 1280, height: 800 },
    colorScheme: "dark",
  },
  {
    suffix: "mobile-light",
    viewport: { width: 390, height: 844 },
    colorScheme: "light",
  },
  {
    suffix: "mobile-dark",
    viewport: { width: 390, height: 844 },
    colorScheme: "dark",
  },
];

const LOAD_DELAY_MS = 3000;

async function takeScreenshots() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const site of SITES) {
    console.log(`\n--- ${site.slug} (${site.url}) ---`);

    for (const variant of VARIANTS) {
      const filename = `${site.slug}-${variant.suffix}.png`;
      const filepath = path.join(OUTPUT_DIR, filename);

      try {
        const context = await browser.newContext({
          viewport: variant.viewport,
          colorScheme: variant.colorScheme,
        });
        const page = await context.newPage();

        // Navigate and wait for network idle
        await page.goto(site.url, {
          waitUntil: "networkidle",
          timeout: 30000,
        });

        // Wait for animations to settle
        await page.waitForTimeout(LOAD_DELAY_MS);

        // Take viewport-only screenshot
        await page.screenshot({
          path: filepath,
          fullPage: false,
        });

        const stats = fs.statSync(filepath);
        const sizeKB = Math.round(stats.size / 1024);
        console.log(`  OK  ${filename} (${sizeKB} KB)`);
        results.push({ filename, status: "ok", sizeKB });

        await context.close();
      } catch (err) {
        console.error(`  FAIL  ${filename} -- ${err.message}`);
        results.push({ filename, status: "fail", error: err.message });
      }
    }
  }

  await browser.close();

  // Summary
  console.log("\n========== SUMMARY ==========");
  const succeeded = results.filter((r) => r.status === "ok");
  const failed = results.filter((r) => r.status === "fail");
  console.log(`Total: ${results.length} | OK: ${succeeded.length} | Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log("\nFailed screenshots:");
    for (const f of failed) {
      console.log(`  ${f.filename}: ${f.error}`);
    }
  }

  console.log(`\nScreenshots saved to: ${OUTPUT_DIR}`);
}

takeScreenshots().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
