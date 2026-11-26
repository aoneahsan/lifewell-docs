import OriginalA from '@theme-original/MDXComponents/A';
import type {Props} from '@theme/MDXComponents/A';
import ExternalLink from '@site/src/components/ExternalLink';

/** Docs prose uses the same owned-site policy as the React pages. */
export default function MDXA(props: Props) {
  if (props.href && /^https?:\/\//i.test(props.href)) return <ExternalLink {...props} href={props.href} />;
  return <OriginalA {...props} />;
}
