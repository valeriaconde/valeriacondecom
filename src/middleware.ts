import { defineMiddleware } from 'astro:middleware';
import { langOf, localizeLinks } from '@/i18n';

// Runs while the site is built: Spanish pages get their internal links pointed at /es/…
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (langOf(context.url) !== 'es' || !response.headers.get('content-type')?.includes('text/html')) return response;
  const html = localizeLinks(await response.text());
  return new Response(html, { status: response.status, headers: response.headers });
});
