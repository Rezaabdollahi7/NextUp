import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * این ماژول فقط با `import()` پویا بارگذاری می‌شود.
 *
 * GSAP و ScrollTrigger برای نمایش محتوای بالای صفحه لازم نیستند؛ با خارج
 * کردنشان از باندل اولیه، زمان اجرای جاوااسکریپت قبل از اولین رنگ‌آمیزی
 * به‌طور محسوسی کم می‌شود.
 */
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
