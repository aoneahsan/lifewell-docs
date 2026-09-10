import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * LifeWell documentation sidebar.
 *
 * Structure mirrors the product: seven areas around You, then the features
 * that cut across them, then plans, data, concepts, platforms, admin and
 * reference. Every id below is a real file — `onBrokenLinks: 'throw'` and this
 * sidebar together make the build the link checker.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get started',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Get started with LifeWell',
        description: 'Open it, sign in, and know what the first five screens are asking.',
      },
      items: [
        'getting-started/install-web',
        'getting-started/install-android',
        'getting-started/first-run',
        'getting-started/tour',
      ],
    },
    {
      type: 'category',
      label: 'The seven areas',
      link: {type: 'doc', id: 'domains/overview'},
      items: [
        'domains/health',
        'domains/mind',
        'domains/stages',
        'domains/people',
        'domains/memories',
        'domains/everyday',
        'domains/sharing',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index',
        title: 'Features',
        description: 'The things that cut across more than one area.',
      },
      items: [
        'features/calendar-and-appointments',
        'features/reminders',
        'features/search',
        'features/community-and-chats',
        'features/professionals',
        'features/blood-donation',
        'features/referrals',
        'features/shopping-list',
        'features/maps',
        'features/tools',
      ],
    },
    'plans',
    {
      type: 'category',
      label: 'Your data',
      link: {
        type: 'generated-index',
        title: 'Your data',
        description: 'Getting it out, getting rid of it, and knowing where it is.',
      },
      items: ['your-data/export', 'your-data/delete', 'your-data/where-it-lives'],
    },
    {
      type: 'category',
      label: 'How it works',
      link: {
        type: 'generated-index',
        title: 'How it works',
        description: 'Architecture, the data model, privacy, offline behaviour and appearance.',
      },
      items: [
        'concepts/architecture',
        'concepts/data-model',
        'concepts/privacy-and-security',
        'concepts/offline-and-sync',
        'concepts/appearance',
        'concepts/language-and-units',
      ],
    },
    {
      type: 'category',
      label: 'Platforms',
      link: {
        type: 'generated-index',
        title: 'Platforms',
        description: 'Web, Android, and the two that do not exist.',
      },
      items: [
        'platforms/web',
        'platforms/android',
        'platforms/ios',
        'platforms/browser-extension',
      ],
    },
    'admin',
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        description: 'The export file format, the frozen addresses, and every outside service.',
      },
      items: [
        'reference/export-format',
        'reference/addresses',
        'reference/integrations',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'About',
      items: ['about/the-developer', 'about/changelog', 'about/contributing'],
    },
  ],
};

export default sidebars;
