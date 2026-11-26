import {translate} from '@docusaurus/Translate';

/** Shared navigation and action copy for the LifeWell ecosystem pages. */
export function ecosystemWords() {
  return {
    title: translate({id: 'ecosystem.title', message: 'Products from Zaions'}),
    meta: translate({id: 'ecosystem.meta', message: 'The other products Ahsan Mahmood builds at Zaions, with a clear way to visit each one.'}),
    kicker: translate({id: 'ecosystem.kicker', message: 'The other places'}),
    showcase: translate({id: 'ecosystem.showcase', message: 'More from Zaions'}),
    intro: translate({id: 'ecosystem.intro', message: 'Ahsan Mahmood builds more than LifeWell. Each of these Zaions products has its own job. Find the one you came for, or look around.'}),
    all: translate({id: 'ecosystem.all', message: 'See all products from Zaions'}),
    details: translate({id: 'ecosystem.details', message: 'Details'}),
    visit: (name: string) => translate({id: 'ecosystem.visit', message: 'Visit {name}'}, {name}),
    docs: (name: string) => translate({id: 'ecosystem.read_docs', message: 'Read {name} docs'}, {name}),
    glance: translate({id: 'ecosystem.glance', message: 'At a glance'}),
    sourceChecked: (date: string) => translate({id: 'ecosystem.source_checked', message: 'Source checked {date}'}, {date}),
    breadcrumb: translate({id: 'ecosystem.breadcrumb', message: 'Breadcrumb'}),
    docsHome: translate({id: 'ecosystem.docs_home', message: 'LifeWell docs'}),
    chooseView: translate({id: 'ecosystem.choose_view', message: 'Choose a view'}),
    grid: translate({id: 'ecosystem.view.grid', message: 'Grid'}),
    list: translate({id: 'ecosystem.view.list', message: 'List'}),
    table: translate({id: 'ecosystem.view.table', message: 'Table'}),
    product: translate({id: 'ecosystem.table.product', message: 'Product'}),
    purpose: translate({id: 'ecosystem.table.purpose', message: 'What it does'}),
    platforms: translate({id: 'ecosystem.table.platforms', message: 'Platforms'}),
    links: translate({id: 'ecosystem.table.links', message: 'Links'}),
    whoBuilt: translate({id: 'ecosystem.who_built', message: 'Who built LifeWell'}),
    carousel: translate({id: 'ecosystem.carousel', message: 'carousel'}),
    slide: translate({id: 'ecosystem.slide', message: 'slide'}),
    previous: translate({id: 'ecosystem.previous', message: 'Previous product'}),
    next: translate({id: 'ecosystem.next', message: 'Next product'}),
    play: translate({id: 'ecosystem.play', message: 'Play carousel'}),
    pause: translate({id: 'ecosystem.pause', message: 'Pause carousel'}),
    playLabel: translate({id: 'ecosystem.play_label', message: 'Play'}),
    pauseLabel: translate({id: 'ecosystem.pause_label', message: 'Pause'}),
    count: (index: number, total: number) => translate({id: 'ecosystem.count', message: '{index} of {total}'}, {index, total}),
    categories: {
      'web-app': translate({id: 'ecosystem.category.web_app', message: 'Web app'}),
      'mobile-app': translate({id: 'ecosystem.category.mobile_app', message: 'Mobile app'}),
      package: translate({id: 'ecosystem.category.package', message: 'Package'}),
      'wordpress-plugin-saas': translate({id: 'ecosystem.category.wordpress_plugin_saas', message: 'WordPress plugin and web app'}),
      'desktop-app-cli': translate({id: 'ecosystem.category.desktop_app_cli', message: 'Desktop app and CLI'}),
      'saas-package': translate({id: 'ecosystem.category.saas_package', message: 'Web app and package'}),
      'browser-extension': translate({id: 'ecosystem.category.browser_extension', message: 'Browser extension'}),
    },
    platformNames: {
      playStore: 'Google Play',
      npm: 'npm',
      chromeWebStore: translate({id: 'ecosystem.platform.chrome_web_store', message: 'Chrome Web Store'}),
    },
  };
}

/** Translate the roster's stable category code. */
export function ecosystemCategory(category: string): string {
  const labels = ecosystemWords().categories;
  const label = labels[category as keyof typeof labels];
  if (!label) throw new Error(`Unknown ecosystem category: ${category}`);
  return label;
}

/** Translate the roster's released platform code. */
export function ecosystemPlatform(platform: string): string {
  const labels = ecosystemWords().platformNames;
  const label = labels[platform as keyof typeof labels];
  if (!label) throw new Error(`Unknown ecosystem platform: ${platform}`);
  return label;
}
