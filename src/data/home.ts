import type { Text } from '@/i18n';

/** The frosted "peek" card on the homepage that leads to Lately. */
export const latelyTeaser: Record<'whisper' | 'title' | 'body' | 'button' | 'aria', Text> = {
  whisper: { en: 'Psst…' },
  title: { en: 'Lately' },
  body: { en: "Little pieces of my life. You'll have to look closer.", es: '¿Qué he hecho últimamente?' },
  button: { en: 'Take a peek', es: 'Descúbrelo' },
  aria: { en: 'Lately: see my latest life updates' },
};
