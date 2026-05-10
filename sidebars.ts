import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * LifeWell Documentation sidebar.
 * Structure mirrors lifewell/docs/docusaurus-build-plan/01-content-inventory.md.
 * Each category corresponds to a feature domain; pages are added incrementally
 * across content phases (3-13). Until each phase ships, the sidebar references
 * pages that may not yet exist — that's tracked in tracker.json. We use
 * onBrokenLinks: 'warn' until Phase 13 completes, then flip to 'throw'.
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
        description: 'Tutorials to get LifeWell running on web, Android, or as a browser extension.',
      },
      items: [
        'getting-started/install-web',
        'getting-started/install-android',
        'getting-started/install-extension',
        'getting-started/first-time-setup',
        'getting-started/quickstart-tour',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'generated-index',
        title: 'Concepts',
        description: 'How LifeWell is built and why — architecture, privacy posture, offline-first design.',
      },
      items: [
        'concepts/architecture',
        'concepts/data-model',
        'concepts/privacy-and-security',
        'concepts/offline-first-design',
        'concepts/theming-system',
        'concepts/multi-platform-strategy',
        'concepts/wellness-scoring',
      ],
    },
    {
      type: 'category',
      label: 'Health',
      link: {type: 'doc', id: 'health/overview'},
      items: [
        'health/vitals',
        'health/water-tracking',
        'health/medications',
        'health/exercise-and-workouts',
        'health/sleep',
        'health/nutrition-and-diet',
        'health/mental-health',
        'health/conditions',
        'health/period-and-fertility',
        'health/pregnancy',
        'health/breastfeeding',
        'health/medical-records',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {type: 'doc', id: 'tools/overview'},
      items: [
        'tools/bmi-calculator',
        'tools/bmr-calculator',
        'tools/calorie-calculator',
        'tools/tdee-calculator',
        'tools/macro-calculator',
        'tools/protein-calculator',
        'tools/age-calculator',
        'tools/sleep-tracker-tool',
        'tools/step-counter',
        'tools/interval-timer',
        'tools/workout-timer',
        'tools/kegel-trainer',
      ],
    },
    {
      type: 'category',
      label: 'Baby',
      link: {type: 'doc', id: 'baby/overview'},
      items: [
        'baby/feeding',
        'baby/sleep-tracking',
        'baby/diapers',
        'baby/growth',
        'baby/milestones',
        'baby/baby-names',
      ],
    },
    {
      type: 'category',
      label: 'Family',
      link: {type: 'doc', id: 'family/overview'},
      items: [
        'family/family-tree',
        'family/family-groups',
        'family/connections',
        'family/journeys',
        'family/work-tree',
        'family/location-tracking',
        'family/data-sharing',
      ],
    },
    {
      type: 'category',
      label: 'Memories & notes',
      items: [
        'memories-and-notes/memories',
        'memories-and-notes/scrapbook',
        'memories-and-notes/notes',
        'memories-and-notes/note-folders',
        'memories-and-notes/google-drive-sync',
      ],
    },
    {
      type: 'category',
      label: 'Maps',
      link: {type: 'doc', id: 'maps/overview'},
      items: [
        'maps/memory-maps',
        'maps/note-maps',
        'maps/people-maps',
        'maps/event-maps',
      ],
    },
    {
      type: 'category',
      label: 'Community & chat',
      items: [
        'community/communities',
        'community/chats',
        'community/partner-features',
        'community/consultations',
      ],
    },
    {
      type: 'category',
      label: 'Profile & settings',
      link: {type: 'doc', id: 'profile-and-settings/profile-overview'},
      items: [
        'profile-and-settings/preferences',
        'profile-and-settings/security',
        'profile-and-settings/data-sharing',
        'profile-and-settings/theme-customizer',
        'profile-and-settings/achievements',
        'profile-and-settings/blood-donor',
        'profile-and-settings/medical-info',
        'profile-and-settings/reminders',
        'profile-and-settings/premium-and-payments',
      ],
    },
    {
      type: 'category',
      label: 'Browser extension',
      link: {type: 'doc', id: 'extension/overview'},
      items: [
        'extension/install',
        'extension/wellness-reminders',
        'extension/quick-tracking',
      ],
    },
    {
      type: 'category',
      label: 'Mobile (Android & iOS)',
      link: {type: 'doc', id: 'mobile/overview'},
      items: [
        'mobile/android',
        'mobile/ios',
        'mobile/push-notifications',
        'mobile/offline-usage',
      ],
    },
    {
      type: 'category',
      label: 'Admin',
      link: {type: 'doc', id: 'admin/overview'},
      items: [
        'admin/users',
        'admin/communities',
        'admin/ads',
        'admin/notifications',
        'admin/payments',
        'admin/verifications',
        'admin/wellness-admin',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/data-model',
        'reference/env-variables',
        'reference/third-party-integrations',
        'reference/browser-compatibility',
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/general',
        'faq/health-data',
        'faq/privacy',
        'faq/billing',
        'faq/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'About',
      items: [
        'about/about-the-developer',
        'about/tech-stack',
        'about/changelog',
        'about/contributing',
      ],
    },
  ],
};

export default sidebars;
