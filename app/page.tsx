export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-medium tracking-widest text-brand uppercase">
          Sprint 0
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">NextUp</h1>
        <p className="mt-4 text-base leading-8 text-ink/70">
          محیط پروژه آماده است. توسعه‌ی سیستم طراحی و صفحات از اسپرینت بعدی آغاز می‌شود.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          {(
            [
              ["brand", "bg-brand"],
              ["ink", "bg-ink"],
              ["sand", "bg-sand"],
              ["sand-soft", "bg-sand-soft"],
            ] as const
          ).map(([name, className]) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <span
                className={`size-12 rounded-full border border-ink/10 ${className}`}
                aria-hidden
              />
              <span className="text-xs text-ink/60">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
