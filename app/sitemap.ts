import type { MetadataRoute } from 'next';
import { services,categories,areas } from '@/lib/lpz-data';
import { articles } from '@/lib/journal';
import { origin } from '@/components/lpz-content';
export default function sitemap():MetadataRoute.Sitemap{return ['/',...['services','service-areas','about','reviews','blog','contact','schedule-service'].map(s=>'/'+s+'/'),...[...categories,...services].map(s=>'/services/'+s.slug+'/'),...areas.map(a=>'/service-areas/'+a.slug+'-az/'),...articles.map(a=>'/blog/'+a.slug+'/')].map(path=>({url:origin+path,changeFrequency:path==='/'?'monthly':'yearly',priority:path==='/'?1:.7}))}
