import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { i18n } from '@/lib/i18n';
import type { InferMetaType, InferPageType } from 'fumadocs-core/source';


export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  i18n,
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
