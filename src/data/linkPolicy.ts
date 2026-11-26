import roster from './ecosystem.json';
import ownerProfile from './owner-profile.json';

const ownerHost = new URL(ownerProfile.person.url).hostname;
const organisationHost = new URL(ownerProfile.organization.url).hostname;
const ownedUrls = roster.products.flatMap((product) => [product.liveUrl, product.docsUrl, ...Object.values(product.platforms)]
  .filter((value): value is string => typeof value === 'string'));

/** True for the owner's domains, profiles and the released destinations in the vendored roster. */
export function isOwnedDestination(href: string): boolean {
  const url = new URL(href);
  const host = url.hostname.toLowerCase();
  if (host === ownerHost || host.endsWith(`.${ownerHost}`) || host === organisationHost || host.endsWith(`.${organisationHost}`)) return true;
  if (host === 'github.com' && (url.pathname === '/aoneahsan' || url.pathname.startsWith('/aoneahsan/'))) return true;
  if (host === 'www.linkedin.com' && url.pathname.startsWith('/in/aoneahsan')) return true;
  if (host === 'play.google.com' && url.pathname === '/store/apps/details' && url.searchParams.get('id')?.startsWith('com.aoneahsan.') === true) return true;
  // The developer guides name this exact hosted LifeWell API and MCP endpoint.
  if (host === 'mednqghfhaazsikbmtiz.supabase.co' &&
    (url.pathname.startsWith('/functions/v1/api/v1/') || url.pathname === '/functions/v1/mcp')) return true;
  return ownedUrls.some((value) => {
    const owned = new URL(value);
    return owned.origin === url.origin && (owned.pathname === '/' || url.pathname === owned.pathname || url.pathname.startsWith(`${owned.pathname.replace(/\/$/, '')}/`));
  });
}
