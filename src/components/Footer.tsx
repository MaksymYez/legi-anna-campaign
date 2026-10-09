import { t, PHONE, PHONE_HREF, MAIN_SITE } from "@/lib/content";
import { IconExternal } from "./icons";
import { Logo } from "./Header";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/ltdlegi" },
  { label: "Instagram", href: "https://www.instagram.com/legi_ltd/" },
  { label: "YouTube", href: "https://www.youtube.com/@LegiFilebi" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-100 text-stone-600 border-t border-stone-200">
      {/* Main-site banner */}
      <div className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="max-w-md text-sm sm:text-base text-white/80">{t.footer.mainSiteText}</p>
          <a
            href={MAIN_SITE}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center justify-center gap-2 bg-red px-6 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wide text-white hover:bg-red-dark transition-colors"
          >
            {t.footer.mainSite} — legi.ge
            <IconExternal className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-3 brand-slant text-red">{t.slogan}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
            <a
              href={`tel:${PHONE_HREF}`}
              className="mt-5 inline-block text-lg font-bold text-ink hover:text-red transition-colors"
            >
              {PHONE}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              {t.footer.locations}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {t.footer.locationList.map((loc) => (
                <li key={loc}>{loc}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              {t.footer.follow}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <span>
            © {new Date().getFullYear()} LEGI. {t.footer.rights}
          </span>
          <span className="text-stone-400">{t.footer.productLine}</span>
        </div>
      </div>
    </footer>
  );
}
