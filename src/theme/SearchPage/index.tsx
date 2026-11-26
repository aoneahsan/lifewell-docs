import Head from '@docusaurus/Head';
import OriginalSearchPage from '@theme-original/SearchPage';

/** Search results change with the query and are not stable pages for indexing. */
export default function SearchPage() {
  return <><Head><meta name="robots" content="noindex, follow" /></Head><OriginalSearchPage /></>;
}
