const { chromium } = require('playwright');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'demos');

const sites = [
  {
    url: 'https://ai-model-arena-umber.vercel.app',
    desktopFile: 'ai-model-arena-desktop-dark.png',
    mobileFile: 'ai-model-arena-mobile-dark.png',
  },
  {
    url: 'https://reflectyr.vercel.app/',
    desktopFile: 'reflectyr-desktop-dark.png',
    mobileFile: 'reflectyr-mobile-dark.png',
  },
  {
    url: 'https://food-xpiry.vercel.app/',
    desktopFile: 'my-expiry-desktop-dark.png',
    mobileFile: 'my-expiry-mobile-dark.png',
  },
  {
    url: 'https://studdy-buddy-rho.vercel.app/',
    desktopFile: 'study-buddy-desktop-dark.png',
    mobileFile: 'study-buddy-mobile-dark.png',
  },
  {
    url: 'https://keithbrowndds.com/',
    desktopFile: 'kab-dentist-desktop-dark.png',
    mobileFile: 'kab-dentist-mobile-dark.png',
  },
  {
    url: 'https://news-alert-eta.vercel.app',
    desktopFile: 'news-alert-desktop-dark.png',
    mobileFile: 'news-alert-mobile-dark.png',
  },
];

async function captureScreenshot(browser, site, viewport, outputFile) {
  const context = await browser.newContext({
    viewport,
    colorScheme: 'dark',
  });
  const page = await context.newPage();

  // Emulate dark color scheme via media
  await page.emulateMedia({ colorScheme: 'dark' });

  console.log('  Navigating to ' + site.url + ' (' + viewport.width + 'x' + viewport.height + ')...');
  await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });

  // Also add 'dark' class to html element for Tailwind-based dark mode
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
  });

  // Wait 2 seconds for content and dark mode to settle
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const outputPath = path.join(OUTPUT_DIR, outputFile);
  await page.screenshot({ path: outputPath, fullPage: false });
  console.log('  Saved: ' + outputFile);

  await context.close();
}

async function main() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });

  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    console.log('\n[' + (i + 1) + '/' + sites.length + '] ' + site.url);

    try {
      // Desktop: 1280x800
      await captureScreenshot(browser, site, { width: 1280, height: 800 }, site.desktopFile);
    } catch (err) {
      console.error('  ERROR (desktop): ' + err.message);
    }

    try {
      // Mobile: 390x844
      await captureScreenshot(browser, site, { width: 390, height: 844 }, site.mobileFile);
    } catch (err) {
      console.error('  ERROR (mobile): ' + err.message);
    }
  }

  await browser.close();
  console.log('\nAll screenshots complete.');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
