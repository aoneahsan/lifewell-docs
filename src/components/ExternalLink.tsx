import type {AnchorHTMLAttributes} from 'react';
import {isOwnedDestination} from '@site/src/data/linkPolicy';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'rel' | 'target'> & {href: string};

/** An off-site link with the rel policy shared by docs prose and product links. */
export default function ExternalLink({href, ...props}: Props) {
  return <a {...props} href={href} target="_blank" rel={isOwnedDestination(href) ? 'noopener' : 'nofollow noopener noreferrer'} />;
}
