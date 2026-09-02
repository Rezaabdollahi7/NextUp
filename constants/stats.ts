/** آمار واقعی تیم — در Hero و بخش معرفی استفاده می‌شود. */
export const teamStats = [
  { value: "۲", label: "عضو تیم" },
  { value: "+۳", label: "سال تجربه" },
  { value: "۴", label: "محصول ساخته‌شده" },
  { value: "۱۰۰٪", label: "تحویل تا Production" },
] as const;

export type TeamStat = (typeof teamStats)[number];
