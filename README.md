# NextUp

وب‌سایت رسمی تیم توسعه نرم‌افزار **NextUp** — یک استودیوی محصولات دیجیتال.

## Tech Stack

| حوزه         | تکنولوژی                                     |
| ------------ | -------------------------------------------- |
| Core         | Next.js 16 (App Router), React 19, TypeScript |
| Styling      | Tailwind CSS v4                               |
| UI           | shadcn/ui (Radix), Lucide Icons               |
| Animation    | GSAP + ScrollTrigger                          |
| Smooth Scroll | Lenis                                       |
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

- **IRANSansX** — متن، دکمه و رابط کاربری (وزن‌های ۴۰۰ و ۵۰۰)
- **Kaghaz** — تیترها (وزن ۷۰۰ و ۹۰۰)

`next/font` هر فایلی را که در `src` بیاورید preload می‌کند؛ پس فقط وزن‌هایی
که واقعاً استفاده می‌شوند باید آنجا باشند. به همین دلیل وزن ۷۰۰ فونت متن
بارگذاری نمی‌شود: تیترها فونت کاغذ می‌گیرند و در متن عادی جایی `font-bold`
یا `<strong>` نداریم. اگر روزی لازم شد، فایلش در `app/fonts/iransans` هست و
کافی است به `lib/fonts.ts` برگردانده شود.

فایل‌ها با `scripts/subset-fonts.py` کوچک شده‌اند و فقط گلیف‌های لازم را
دارند. **اگر فونتی را جایگزین یا اضافه کردید، این اسکریپت را دوباره اجرا
کنید** وگرنه فایل کامل و سنگین وارد باندل می‌شود:

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

## SEO

`lib/seo.ts` تابع `pageMetadata()` را می‌دهد و هر صفحه‌ی داخلی باید از همان
استفاده کند. دلیلش رفتار Next.js است: `openGraph` و `twitter` در صفحه‌ی فرزند
با مقدار والد **ادغام نمی‌شوند، جایگزین می‌شوند**. پس صفحه‌ای که خودش
`openGraph` بنویسد، تصویر و `locale` ارث‌بری‌شده را از دست می‌دهد و لینکش
بدون پیش‌نمایش به اشتراک گذاشته می‌شود.

`sitemap.xml` و `robots.txt` از `app/sitemap.ts` و `app/robots.ts` ساخته
می‌شوند و مسیرهای پروژه‌ها را از `data/projects.ts` می‌خوانند؛ با افزودن
پروژه‌ی جدید خودکار به‌روز می‌شوند. صفحه‌ی `/styleguide` عمداً `noindex` است.

## متغیرهای محیطی

| متغیر                  | توضیح                                        |
| ---------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | دامنه نهایی سایت (برای Metadata و Sitemap)    |

نمونه در `.env.example` هست؛ برای توسعه‌ی محلی کپی‌اش کنید به `.env.local`.

## انتشار روی Vercel

پروژه هیچ تنظیم خاصی لازم ندارد؛ Vercel خودش Next.js را تشخیص می‌دهد.

1. ریپازیتوری را در Vercel وارد کنید (Framework Preset: **Next.js**).
2. در Project Settings → Environment Variables مقدار `NEXT_PUBLIC_SITE_URL`
   را برابر دامنه‌ی نهایی (`https://nextup.ir`) بگذارید. بدون آن، مقدار
   پیش‌فرض همان دامنه استفاده می‌شود و روی Previewها لینک‌های canonical به
   دامنه‌ی اصلی اشاره می‌کنند.
3. دامنه‌ی `nextup.ir` را در بخش Domains وصل کنید.

قبل از هر انتشار، این دستور باید بدون خطا رد شود:

```bash
npm run check && npm run build
```

همه‌ی صفحات به‌صورت استاتیک (SSG) تولید می‌شوند؛ پس هیچ سروری در زمان اجرا
لازم نیست و صفحات پروژه‌ها با `generateStaticParams` از `data/projects.ts`
ساخته می‌شوند.
