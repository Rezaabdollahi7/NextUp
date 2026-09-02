"""
کوچک‌سازی فونت‌های پروژه.

فونت‌های فارسی گلیف‌هایی دارند که این سایت هرگز استفاده نمی‌کند. این اسکریپت
فقط بازه‌های لازم را نگه می‌دارد و بقیه را حذف می‌کند؛ نتیجه حدود ۲۰٪ کاهش
حجم است، بدون هیچ تغییر بصری.

مهم: بازه‌ی U+200C (نیم‌فاصله) و تمام جدول‌های layout باید نگه داشته شوند،
وگرنه حروف فارسی به هم نمی‌چسبند.

اجرا (پس از جایگزینی یا افزودن فونت جدید):
    pip install fonttools brotli
    python scripts/subset-fonts.py
"""

import glob
import os

from fontTools import subset

UNICODES = ",".join(
    [
        "U+0020-007E",  # لاتین پایه
        "U+00A0-00FF",  # لاتین تکمیلی
        "U+0600-06FF",  # حروف فارسی/عربی و ارقام فارسی
        "U+FB8A,U+067E,U+0686,U+06AF,U+06CC,U+06A9",  # حروف ویژه فارسی
        "U+200C-200F,U+2066-2069,U+FEFF",  # نیم‌فاصله و کنترل‌های دوسویه
        "U+2010-2027,U+2030-205E",  # نشانه‌گذاری، خط تیره، گیومه
        "U+00D7,U+2212,U+066A-066D,U+060C,U+061B,U+061F",
    ]
)

FONT_GLOB = os.path.join(os.path.dirname(__file__), "..", "app", "fonts", "*", "*.woff2")


def main() -> None:
    total_before = total_after = 0

    for path in sorted(glob.glob(FONT_GLOB)):
        before = os.path.getsize(path)
        output = path + ".subset"

        subset.main(
            [
                path,
                f"--unicodes={UNICODES}",
                "--layout-features=*",  # اتصال حروف به این جدول‌ها وابسته است
                "--flavor=woff2",
                "--no-hinting",
                "--desubroutinize",
                "--notdef-outline",
                f"--output-file={output}",
            ]
        )

        after = os.path.getsize(output)
        os.replace(output, path)

        total_before += before
        total_after += after
        print(f"{os.path.basename(path):30} {before / 1024:6.1f} → {after / 1024:6.1f} KB")

    saved = 100 * (total_before - total_after) / total_before
    print(f"\nمجموع: {total_before / 1024:.0f} → {total_after / 1024:.0f} KB ({saved:.0f}% کمتر)")


if __name__ == "__main__":
    main()
