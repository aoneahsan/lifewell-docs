import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = 'https://lifewell-docs.aoneahsan.com';
const APP_URL = 'https://lifewell.aoneahsan.com';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell';
const GITHUB_REPO = 'https://github.com/aoneahsan/lifewell-docs';
const AUTHOR_URL = 'https://aoneahsan.com';

const config: Config = {
  title: 'LifeWell Documentation',
  tagline: 'Your whole life, in one place — health, mind, life stages, people, memories and the everyday.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: true,
  },

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'aoneahsan',
  projectName: 'lifewell-docs',

  onBrokenLinks: 'throw',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1280,
        min: 640,
        steps: 3,
        disableInDev: false,
      },
    ],
    [
      // The 2.x documentation lived under /docs/**. 3.0.0 moved the docs to the
      // site root (see `routeBasePath` below), so every old address is redirected
      // rather than 404ed. A page whose 2.x subject no longer exists — the
      // old data-model pages, the removed-platform pages, the extension how-tos — points
      // at the page that now tells the truth about it.
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {to: '/intro', from: ['/docs', '/docs/intro']},
          {to: '/blog/documentation-rewritten-for-3-0-0', from: ['/blog/launching-lifewell-docs']},
          {to: '/getting-started/install-web', from: ['/docs/getting-started/install-web']},
          {to: '/getting-started/install-android', from: ['/docs/getting-started/install-android']},
          {to: '/getting-started/first-run', from: ['/docs/getting-started/first-time-setup']},
          {to: '/getting-started/tour', from: ['/docs/getting-started/quickstart-tour']},
          {to: '/domains/health', from: ['/docs/health/overview']},
          {to: '/domains/mind', from: ['/docs/health/mental-health']},
          {to: '/domains/stages', from: ['/docs/baby/overview', '/docs/health/pregnancy']},
          {to: '/domains/people', from: ['/docs/family/overview']},
          {to: '/domains/memories', from: ['/docs/memories-and-notes/memories']},
          {to: '/domains/everyday', from: ['/docs/memories-and-notes/notes']},
          {to: '/features/maps', from: ['/docs/maps/overview']},
          {to: '/features/community-and-chats', from: ['/docs/community/communities', '/docs/community/chats']},
          {to: '/features/professionals', from: ['/docs/community/consultations']},
          {to: '/features/blood-donation', from: ['/docs/profile-and-settings/blood-donor']},
          {to: '/features/sharing', from: ['/docs/family/data-sharing', '/docs/profile-and-settings/data-sharing', '/docs/community/partner-features']},
          {to: '/features/reminders', from: ['/docs/profile-and-settings/reminders', '/docs/mobile/push-notifications']},
          {to: '/features/tools', from: ['/docs/tools/overview']},
          {to: '/plans', from: ['/docs/profile-and-settings/premium-and-payments', '/docs/faq/billing']},
          {to: '/your-data/export', from: ['/docs/memories-and-notes/google-drive-sync']},
          {to: '/your-data/delete', from: ['/docs/profile-and-settings/security']},
          {to: '/your-data/where-it-lives', from: ['/docs/concepts/offline-first-design', '/docs/mobile/offline-usage']},
          {to: '/concepts/architecture', from: ['/docs/concepts/architecture', '/docs/concepts/multi-platform-strategy']},
          {to: '/concepts/data-model', from: ['/docs/concepts/data-model', '/docs/reference/data-model', '/docs/concepts/wellness-scoring']},
          {to: '/concepts/privacy-and-security', from: ['/docs/concepts/privacy-and-security', '/docs/faq/privacy', '/docs/faq/health-data']},
          {to: '/concepts/appearance', from: ['/docs/concepts/theming-system', '/docs/profile-and-settings/theme-customizer']},
          {to: '/platforms/web', from: ['/docs/reference/browser-compatibility']},
          {to: '/platforms/android', from: ['/docs/mobile/android', '/docs/mobile/overview']},
          {to: '/platforms/ios', from: ['/docs/mobile/ios']},
          {to: '/platforms/browser-extension', from: ['/docs/extension/overview', '/docs/extension/install', '/docs/extension/quick-tracking', '/docs/extension/wellness-reminders', '/docs/getting-started/install-extension']},
          {to: '/admin', from: ['/docs/admin/overview']},
          {to: '/reference/integrations', from: ['/docs/reference/third-party-integrations', '/docs/reference/env-variables', '/docs/about/tech-stack']},
          {to: '/faq', from: ['/docs/faq/general', '/docs/faq/troubleshooting']},
          {to: '/about/the-developer', from: ['/docs/about/about-the-developer', '/about']},
          {to: '/about/changelog', from: ['/docs/about/changelog']},
          {to: '/about/contributing', from: ['/docs/about/contributing']},
        ],
      },
    ],
    [
      // Local search. The site shipped with none at all, which for documentation
      // is a missing feature rather than a missing nicety.
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Ahsan Mahmood',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
      },
    },
    // 🔴 NO SITE-WIDE `rel=canonical` HERE. It used to point every page at
    // SITE_URL, and Docusaurus ALSO emits a correct self-referential canonical —
    // so all 44 pages shipped two canonicals, the second declaring them
    // duplicates of the homepage. Measured in build/ on 2026-09-08. The
    // per-page tag is the right one; adding a static one can only conflict.
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'LifeWell Documentation',
            description:
              'Public documentation for LifeWell — one record for a whole life: health, mind, life stages, people, memories and the everyday week. Built by Ahsan Mahmood.',
            publisher: {'@id': `${SITE_URL}/#organization`},
            inLanguage: 'en',
          },
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'LifeWell',
            url: APP_URL,
            logo: {
              '@type': 'ImageObject',
              url: `${SITE_URL}/img/logo.svg`,
            },
            sameAs: [
              GITHUB_REPO,
              AUTHOR_URL,
              PLAY_STORE_URL,
              'https://linkedin.com/in/aoneahsan',
            ],
            founder: {
              '@type': 'Person',
              name: 'Ahsan Mahmood',
              email: 'aoneahsan@gmail.com',
              url: AUTHOR_URL,
              sameAs: [
                'https://github.com/aoneahsan',
                'https://linkedin.com/in/aoneahsan',
                'https://npmjs.com/~aoneahsan',
              ],
            },
          },
          {
            '@type': 'Person',
            '@id': `${SITE_URL}/#author`,
            name: 'Ahsan Mahmood',
            email: 'aoneahsan@gmail.com',
            url: AUTHOR_URL,
            jobTitle: 'Full-Stack Engineer',
            sameAs: [
              'https://github.com/aoneahsan',
              'https://linkedin.com/in/aoneahsan',
              'https://npmjs.com/~aoneahsan',
            ],
          },
        ],
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 🔴 THE DOCS LIVE AT THE SITE ROOT, AND THAT IS LOAD-BEARING.
          // The app links to https://lifewell-docs.aoneahsan.com/reference/export-format
          // (src/features/export/components/states.tsx). That link already ships,
          // so the path is fixed: with the default `docs` base the page would be
          // at /docs/reference/export-format and the shipped link would 404.
          routeBasePath: '/',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
          ],
          editUrl: `${GITHUB_REPO}/edit/main/`,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'LifeWell Documentation Blog',
            description: 'Updates, release notes, and deep-dives from the LifeWell project.',
            copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. CC BY 4.0.`,
          },
          editUrl: `${GITHUB_REPO}/edit/main/`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'lifewell, life companion, personal record, health tracking, medications, cycle tracking, family tree, memories, notes, android app, ahsan mahmood'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:creator', content: '@aoneahsan'},
      {name: 'og:type', content: 'website'},
      {name: 'og:site_name', content: 'LifeWell Documentation'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'LifeWell Docs',
      logo: {
        alt: 'LifeWell logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about/the-developer', label: 'About', position: 'left'},
        {
          href: APP_URL,
          label: 'Open LifeWell',
          position: 'right',
        },
        {
          href: PLAY_STORE_URL,
          label: 'Get on Android',
          position: 'right',
        },
        {
          href: GITHUB_REPO,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'LifeWell logo',
        src: 'img/logo.svg',
        width: 48,
        height: 48,
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Get started', to: '/intro'},
            {label: 'The six areas', to: '/domains/overview'},
            {label: 'Export your record', to: '/your-data/export'},
            {label: 'Privacy and security', to: '/concepts/privacy-and-security'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Open LifeWell', href: APP_URL},
            {label: 'Get it on Google Play', href: PLAY_STORE_URL},
            {label: 'About this site', to: '/about/the-developer'},
            {label: 'What changed in 3.0.0', to: '/about/changelog'},
            {label: 'GitHub', href: GITHUB_REPO},
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            {label: 'Portfolio', href: AUTHOR_URL},
            {label: 'GitHub @aoneahsan', href: 'https://github.com/aoneahsan'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan'},
            {label: 'NPM @aoneahsan', href: 'https://npmjs.com/~aoneahsan'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Documentation licensed CC BY 4.0. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'tsx', 'typescript', 'yaml', 'diff'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
