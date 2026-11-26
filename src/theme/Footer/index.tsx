import type {ReactNode} from 'react';
import OriginalFooter from '@theme-original/Footer';
import EcosystemShowcase from '@site/src/components/ecosystem/EcosystemShowcase';

/** The public docs footer places the cross-product band before the site links. */
export default function Footer(): ReactNode {
  return <><EcosystemShowcase /><OriginalFooter /></>;
}
