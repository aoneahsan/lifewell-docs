import Head from '@docusaurus/Head';
import OriginalPage from '@theme-original/DocTagsListPage';
import type {Props} from '@theme/DocTagsListPage';

/** Tag directories are utility routes omitted from the sitemap. */
export default function DocTagsListPage(props: Props) {
  return <><Head><meta name="robots" content="noindex, follow" /></Head><OriginalPage {...props} /></>;
}
