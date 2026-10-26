import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import sitePages, {withLastmod} from './plugins/site-pages';

const SITE_URL = 'https://lifewell-docs.aoneahsan.com';
const APP_URL = 'https://lifewell.aoneahsan.com';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.aoneahsan.lifewell';
const GITHUB_REPO = 'https://github.com/aoneahsan/lifewell-docs';
const BLOG_PATH = '/blog';

const config: Config = {
  title: 'LifeWell Documentation',
  tagline: 'Keep the people and moments of your life in one place — and everything around them.',
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
    // The product writes en-GB (Story Bible §4): dates read "8 September 2026".
    localeConfigs: {en: {htmlLang: 'en-GB'}},
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    // `/sitemap` and `/feed` for people, and `/feed.xml` beside `/sitemap.xml` for machines.
    sitePages({blogPath: BLOG_PATH}),
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
          // Sharing became the seventh AREA in 3.22.0 (OD-80), so it moved out of
          // /features. Both its old addresses come here rather than 404ing (OD-90 A6):
          // the 3.0.0 one, and the 2.x /docs/ form of it.
          {to: '/domains/sharing', from: ['/docs/family/data-sharing', '/docs/profile-and-settings/data-sharing', '/docs/community/partner-features', '/features/sharing', '/docs/features/sharing']},
          {to: '/features/maps', from: ['/docs/maps/overview']},
          {to: '/features/community-and-chats', from: ['/docs/community/communities', '/docs/community/chats']},
          {to: '/features/professionals', from: ['/docs/community/consultations']},
          {to: '/features/blood-donation', from: ['/docs/profile-and-settings/blood-donor']},
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
        content: 'The LifeWell team',
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
              'Public documentation for LifeWell, which keeps the people and moments of your life in one place: your family and friends, what you know about them, your memories and your plans, with wellbeing, mind and life stages around them. Written by the LifeWell team.',
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
            sameAs: [GITHUB_REPO, PLAY_STORE_URL],
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
          // Off: the git author is a person's name, and the site speaks as the LifeWell team.
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          // A post's last update comes from git: its sitemap lastmod. No name is shown.
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'LifeWell Documentation Blog',
            description: 'Updates, release notes, and deep-dives from the LifeWell project.',
            copyright: `Copyright © ${new Date().getFullYear()} the LifeWell team. CC BY 4.0.`,
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
          // Every URL carries a truthful lastmod and nothing else: search engines ignore changefreq and priority.
          lastmod: 'date',
          changefreq: null,
          priority: null,
          ignorePatterns: ['/tags/**', '/blog/tags/**', '/blog/archive', '/blog/authors/**', '/search'],
          filename: 'sitemap.xml',
          // A page git cannot date (the blog list, a category index, /sitemap, /feed) takes the newest date it lists.
          createSitemapItems: async ({defaultCreateSitemapItems, ...params}) =>
            withLastmod(await defaultCreateSitemapItems(params), BLOG_PATH),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'lifewell, life companion, family tree, people, memories, family and friends, notes, calendar, wellbeing, android app'},
      {name: 'twitter:card', content: 'summary_large_image'},
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
            {label: 'The seven areas', to: '/domains/overview'},
            {label: 'People', to: '/domains/people'},
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
            {label: 'Changelog', to: '/about/changelog'},
            {label: 'GitHub', href: GITHUB_REPO},
          ],
        },
        {
          title: 'The LifeWell team',
          items: [
            {label: 'Who builds LifeWell', to: '/about/the-developer'},
            {label: 'Contact the team', href: `${APP_URL}/contact`},
            {label: 'Tours and the walkthrough', to: '/getting-started/tours-and-walkthrough'},
          ],
        },
        {
          title: 'Find everything',
          items: [
            {label: 'Sitemap', to: '/sitemap'},
            {label: 'Feed', to: '/feed'},
            // Written after the build, so the link checker cannot see them: absolute addresses.
            {label: 'sitemap.xml', href: `${SITE_URL}/sitemap.xml`},
            {label: 'feed.xml', href: `${SITE_URL}/feed.xml`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} the LifeWell team. Documentation licensed CC BY 4.0. Built with Docusaurus.`,
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
