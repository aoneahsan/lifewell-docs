import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = 'https://lifewell-docs.aoneahsan.com';
const APP_URL = 'https://lifewell.aoneahsan.com';
const GITHUB_REPO = 'https://github.com/aoneahsan/lifewell-docs';
const AUTHOR_URL = 'https://aoneahsan.com';

const config: Config = {
  title: 'LifeWell Documentation',
  tagline: 'A private health & wellness companion — web, Android, browser extension.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: true,
  },

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'aoneahsan',
  projectName: 'lifewell-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
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
    {
      tagName: 'link',
      attributes: {
        rel: 'canonical',
        href: SITE_URL,
      },
    },
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
              'Public documentation for LifeWell — a private health & wellness companion built by Ahsan Mahmood.',
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
            sameAs: [GITHUB_REPO, AUTHOR_URL, 'https://linkedin.com/in/aoneahsan'],
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
      {name: 'keywords', content: 'lifewell, health tracking, wellness app, vitals, medications, period tracker, family tree, ahsan mahmood, capacitor, firebase'},
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
        {to: '/about', label: 'About', position: 'left'},
        {
          href: APP_URL,
          label: 'Open LifeWell',
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
            {label: 'Get started', to: '/docs/intro'},
            {label: 'Health module', to: '/docs/health/overview'},
            {label: 'Tools', to: '/docs/tools/overview'},
            {label: 'Privacy & security', to: '/docs/concepts/privacy-and-security'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Open LifeWell', href: APP_URL},
            {label: 'About this site', to: '/about'},
            {label: 'Changelog', to: '/docs/about/changelog'},
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
