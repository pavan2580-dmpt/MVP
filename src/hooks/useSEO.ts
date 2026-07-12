import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

function upsertMeta(key: 'name' | 'property', keyValue: string, content: string) {
  const selector = `meta[${key}="${keyValue}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(key, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export default function useSEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://www.mvpinnovations.in/og-image.png',
}: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:url', canonical ?? window.location.href);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    if (canonical) upsertCanonical(canonical);

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, canonical, ogType, ogImage]);
}
