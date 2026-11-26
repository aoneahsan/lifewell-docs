import Link from '@docusaurus/Link';
import ExternalLink from '@site/src/components/ExternalLink';
import Layout from '@theme/Layout';
import StructuredData from '@site/src/components/ecosystem/StructuredData';
import Translate, {translate} from '@docusaurus/Translate';

/** The owner vision and dated LifeWell milestones, from approved project records. */
export default function AboutDeveloper() {
  return <Layout title={translate({id: 'about.title', message: 'Built by Ahsan Mahmood'})} description={translate({id: 'about.description', message: 'Why Ahsan Mahmood made LifeWell, the milestones that brought it here, and where to find his work with Zaions.'})}>
    <StructuredData type="about" />
    <main className="eco-page container eco-about">
      <span className="eco-kicker"><Translate id="about.kicker">About the developer</Translate></span>
      <h1><Translate id="about.title">Built by Ahsan Mahmood</Translate></h1>
      <p className="eco-lede"><Translate id="about.lede">Ahsan built LifeWell after listening to his parents tell the stories of their lives. He wanted those moments kept in a place a family could return to.</Translate></p>
      <div className="eco-actions"><ExternalLink href="https://aoneahsan.com" className="eco-action eco-action--primary"><Translate id="about.portfolio">Visit Ahsan's portfolio</Translate></ExternalLink><ExternalLink href="https://zaions.com" className="eco-action eco-action--quiet"><Translate id="about.zaions">Visit Zaions</Translate></ExternalLink></div>
      <div className="eco-detail-grid"><div>
        <section className="eco-detail-section"><h2><Translate id="about.why.heading">Why did he make LifeWell?</Translate></h2><p><Translate id="about.why.first">His father told him stories. So did his mother. Ahsan wanted a way to hold on to those conversations and the people behind them. LifeWell grew from that wish into one place for relationships, memories and the ordinary things that sit beside them.</Translate></p><p><Translate id="about.why.second">The larger vision is a gift that could pass through generations. Some parts of that vision are still being built. Today, the app keeps a record you can return to, with sharing under your control.</Translate></p></section>
        {/* Dates: app commit 4822f2ab; ../STATUS.md WP010 2026-09-19; ../docs/DONE-TASKS.md OD-114; app commit 8ffb15b1. */}
        <section className="eco-detail-section"><h2><Translate id="about.timeline.heading">How has it reached this point?</Translate></h2><ol className="eco-timeline">
          <li><time dateTime="2025-08-25"><Translate id="about.timeline.2025.date">25 August 2025</Translate></time> — <Translate id="about.timeline.2025.event">the earliest commit in the LifeWell app repository.</Translate></li>
          <li><time dateTime="2026-09-19"><Translate id="about.timeline.2026_09.date">19 September 2026</Translate></time> — <Translate id="about.timeline.2026_09.event">the rebuilt web app was verified live against its build.</Translate></li>
          <li><time dateTime="2026-10-25"><Translate id="about.timeline.2026_10.date">25 October 2026</Translate></time> — <Translate id="about.timeline.2026_10.event">the owner confirmed version 3.25.0 live on Google Play.</Translate></li>
          <li><time dateTime="2026-11-20"><Translate id="about.timeline.2026_11.date">20 November 2026</Translate></time> — <Translate id="about.timeline.2026_11.event">the released web, Android and docs routes were gathered under Get LifeWell.</Translate></li>
        </ol></section>
        <section className="eco-detail-section"><h2><Translate id="about.build.heading">How is it built?</Translate></h2><p><Translate id="about.build.body">LifeWell is a React and TypeScript app on the web and Android. If you enable offline logging, a small set of quick entries can wait on your device until the connection returns. Sharing is a choice you make for each item, and the record remains yours to export.</Translate></p></section>
        <section className="eco-detail-section"><h2><Translate id="about.other.heading">Where can you find the other work?</Translate></h2><p><Link to="/ecosystem"><Translate id="about.other.ecosystem">See the other products from Zaions</Translate></Link>, <ExternalLink href="https://aoneahsan.com/projects"><Translate id="about.other.projects">Ahsan's projects</Translate></ExternalLink>, or <ExternalLink href="https://github.com/aoneahsan">GitHub</ExternalLink>, or <ExternalLink href="https://www.linkedin.com/in/aoneahsan">LinkedIn</ExternalLink>.</p></section>
        <section className="eco-detail-section"><h2><Translate id="about.contact.heading">How can you contact the team?</Translate></h2><p><Translate id="about.contact.prefix">Use</Translate> <ExternalLink href="https://lifewell.aoneahsan.com/contact"><Translate id="about.contact.link">LifeWell's contact page</Translate></ExternalLink>. <Translate id="about.contact.body">Your message belongs with the product it is about.</Translate></p></section>
      </div><aside className="eco-factbox"><img src="/img/logo.svg" width="64" height="64" alt="" /><h2>LifeWell</h2><p><Translate id="about.aside.body">The people and moments of your life, kept in one place.</Translate></p><Link to="/about/the-developer"><Translate id="about.aside.link">About LifeWell</Translate></Link></aside></div>
    </main>
  </Layout>;
}
