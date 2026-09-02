# NextUp

وب‌سایت رسمی تیم توسعه نرم‌افزار **NextUp** — یک استودیوی محصولات دیجیتال.

## Tech Stack

| حوزه         | تکنولوژی                                     |
| ------------ | -------------------------------------------- |
| Core         | Next.js 16 (App Router), React 19, TypeScript |
| Styling      | Tailwind CSS v4                               |
| UI           | shadcn/ui (Radix), Lucide Icons               |
| Animation    | GSAP + ScrollTrigger                          |
| SmoothScoll | Lenis                                         |
| Forms        | React Hook Form + Zod                         |
| Deployment   | Vercel                                        |

## اجرای پروژه

```bash
npm install
npm run dev      # http://localhost:3000
```

## اسکریپت‌ها

| Script                 | توضیح                                |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | اجرای محیط توسعه                     |
| `npm run build`        | ساخت نسخه Production                 |
| `npm run start`        | اجرای نسخه Production                |
| `npm run typecheck`    | بررسی خطاهای TypeScript              |
| `npm run lint`         | بررسی ESLint                         |
| `npm run format`       | فرمت کد با Prettier                  |
| `npm run check`        | typecheck + lint + format check      |

## ساختار پروژه

```text
app/            # App Router (routes, layout, globals.css, fonts)
components/
  layout/       # Navbar, Footer, Container
  sections/     # بخش‌های صفحات (home, ...)
  animations/   # کامپوننت‌های انیمیشن (Reveal, TextReveal, ...)
  ui/           # کامپوننت‌های پایه shadcn/ui
constants/      # ثابت‌های سراسری (site config, ...)
data/           # داده‌های محتوایی (projects, team, services, navigation)
hooks/          # هوک‌های سفارشی
lib/            # ابزارها (cn, fonts, ...)
types/          # تایپ‌های مشترک
public/images/  # تصاویر پروژه‌ها و اعضای تیم
```

## فونت

فونت‌ها به‌صورت محلی از `app/fonts` بارگذاری و در `lib/fonts.ts` پیکربندی
می‌شوند:

- **IRANSansX** — متن، دکمه و رابط کاربری (وزن‌های ۴۰۰ / ۵۰۰ / ۷۰۰)
- **Kaghaz** — تیترها (وزن ۷۰۰ و ۹۰۰)

فایل‌ها با `scripts/subset-fonts.py` کوچک شده‌اند (۱۴۰ → ۱۱۳ کیلوبایت) و فقط
گلیف‌های لازم را دارند. **اگر فونتی را جایگزین یا اضافه کردید، این اسکریپت را
دوباره اجرا کنید** وگرنه فایل کامل و سنگین وارد باندل می‌شود:

```bash
pip install fonttools brotli
python scripts/subset-fonts.py
```

## تصویر Open Graph

`app/opengraph-image.png` یک فایل استاتیک است که با فونت‌های واقعی پروژه رندر
شده. اگر متن یا برند تغییر کرد، `scripts/og-template.html` را ویرایش و دوباره
تولیدش کنید:

```bash
node scripts/generate-og.mjs
```

## تصاویر

مسیر تصاویر به‌صورت متمرکز در فایل‌های `data/` نگهداری می‌شود
(مثلاً `image: "/images/projects/dofixo.jpg"`). برای جایگزینی Placeholderها
کافی است فایل واقعی را در `public/images` قرار دهید.

## متغیرهای محیطی

| متغیر                  | توضیح                                        |
| ---------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | دامنه نهایی سایت (برای Metadata و Sitemap)    |
