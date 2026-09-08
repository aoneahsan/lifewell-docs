/**
 * Ejected from `@docusaurus/theme-classic` for ONE reason: the blog list page
 * rendered no `<h1>` at all — the theme uses `blogTitle` for the document
 * `<title>` only. That was reported as `fnd-h1-missing-46f4283ae1`.
 *
 * ── Why an eject and not a `--wrap`, which is the cheaper tool ──────────────
 * Both wrapper routes were tried and neither works:
 *   1. Wrapping `BlogListPage` renders the heading *around* the component, and
 *      the component renders the whole `<Layout>` — so the `<h1>` lands above
 *      the navbar, outside the `<main>` landmark.
 *   2. Wrapping `BlogPostItems` (the first component inside `<main>`) cannot
 *      reach the blog's title: `useBlogMetadata()` throws on `/blog` and on
 *      every tag page, because `blogMetadata` is only in route context on
 *      author pages. The build failed on five paths proving it.
 * Here, `metadata.blogTitle` arrives in props, so the heading needs no context,
 * no route guard and no second copy of the title string.
 *
 * ── What was changed, and what was not ─────────────────────────────────────
 * The ONLY edit against the theme's own source is the `<header>` block in
 * `BlogListPageContent`, which copies the markup `BlogTagsPostsPage` already
 * uses for its heading. `BlogListPageMetadata` is untouched, and the
 * `StructuredData` half of the eject was deleted so `@theme/` resolves it back
 * to the theme's original — a forked `<Head>` renderer is how a page acquires a
 * second `rel="canonical"`, and this site has just finished removing one.
 *
 * `rel="canonical"` is emitted by `@theme/SiteMetadata` alone. Nothing in this
 * file touches it; every built HTML file still carries exactly one.
 *
 * ⚠️ This is forked theme code. Re-check it against
 * `node_modules/@docusaurus/theme-classic/lib/theme/BlogListPage/index.js`
 * whenever Docusaurus is upgraded.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const {metadata, items, sidebar} = props;
  return (
    <BlogLayout sidebar={sidebar}>
      <header className="margin-bottom--xl">
        <Heading as="h1">{metadata.blogTitle}</Heading>
      </header>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
