import Head from '@docusaurus/Head';
import OriginalPage from '@theme-original/DocTagDocListPage';
import type {Props} from '@theme/DocTagDocListPage';

/** Individual tag result pages are utility routes omitted from the sitemap. */
export default function DocTagDocListPage(props: Props) {
  return <><Head><meta name="robots" content="noindex, follow" /></Head><OriginalPage {...props} /></>;
}
