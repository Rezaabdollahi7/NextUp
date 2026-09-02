/**
 * ساخت تصویر Open Graph از روی `scripts/og-template.html`.
 *
 * تصویر با فونت‌های واقعی پروژه رندر می‌شود و به‌صورت فایل استاتیک در
 * `app/opengraph-image.png` ذخیره می‌گردد؛ بنابراین هیچ هزینه‌ای در زمان
 * اجرا ندارد.
 *
 * اجرا (نیازمند Playwright — عمداً به وابستگی‌های پروژه اضافه نشده است):
 *   npx --yes playwright@1.56 install chromium
 *   node scripts/generate-og.mjs
 */
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { chromium } from "playwright";

const here = dirname(fileURLToPath(import.meta.url));
const template = resolve(here, "og-template.html");
const output = resolve(here, "..", "app", "opengraph-image.png");

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1300, height: 800 },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

await page.goto(`file://${template}`);
await page.waitForTimeout(800);

const card = await page.$(".card");
await card.screenshot({ path: output });

await browser.close();
console.log(`✓ ${output}`);
