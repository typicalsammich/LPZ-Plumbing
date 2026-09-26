import type { MetadataRoute } from 'next';
import { origin } from '@/components/lpz-content';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:'/api/'},sitemap:origin+'/sitemap.xml'}}
