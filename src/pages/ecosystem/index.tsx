import Layout from '@theme/Layout';
import EcosystemDirectory from '@site/src/components/ecosystem/EcosystemDirectory';
import {ecosystemWords} from '@site/src/components/ecosystem/words';

export default function Ecosystem() {
  const words = ecosystemWords();
  return <Layout title={words.title} description={words.meta}>
    <EcosystemDirectory />
  </Layout>;
}
