import type { Metadata } from 'next';
import { SiteEffects } from '@/components/lpz-interactive';
import { business,JsonLd,metadataFor } from '@/components/lpz-content';
import './globals.css';
export const metadata:Metadata={...metadataFor('Laveen & Phoenix Valley Plumber','Family-owned residential and commercial plumbing in Laveen and the Phoenix Valley. Available 24/7. Arizona contractor ROC-356849. Call (602) 776-8749.','/'),icons:{icon:'/assets/lpz-logo-web.png'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}<SiteEffects/><JsonLd data={business}/></body></html>}

