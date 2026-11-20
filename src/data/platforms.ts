/**
 * Every place LifeWell is released — the ONLY place a store or surface URL lives in this docs site
 * (standard aoneahsan-cccs-platform-links). Each surface passed its release proof on `verified`:
 * the web app answered 200, the Play listing is on the owner's developer page.
 */
export type PlatformId = 'web' | 'android' | 'docs';

export interface Platform {
  id: PlatformId;
  name: string;
  href: string;
  primary?: boolean;
  verified: string;
}

export const PLATFORMS: readonly Platform[] = [
  {id: 'web', name: 'LifeWell web app', href: 'https://lifewell.aoneahsan.com', primary: true, verified: '2026-11-20'},
  {id: 'android', name: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell', verified: '2026-11-20'},
  {id: 'docs', name: 'Documentation', href: 'https://lifewell-docs.aoneahsan.com', verified: '2026-11-20'},
];

/** This site is the docs surface. */
export const CURRENT_SURFACE: PlatformId = 'docs';
export const OTHER_PLATFORMS: readonly Platform[] = PLATFORMS.filter((platform) => platform.id !== CURRENT_SURFACE);
export const PRIMARY_PLATFORM: Platform = PLATFORMS.find((platform) => platform.primary) ?? PLATFORMS[0];
/** `/apps` changes only when this list does: its sitemap date is the newest proof date. */
export const APPS_LASTMOD: string = PLATFORMS.map((platform) => platform.verified).sort().at(-1) ?? '2026-11-20';
