import { Header,Footer } from '@/components/lpz-shell';
import { AreaMap } from '@/components/lpz-interactive';
import { Breadcrumbs,metadataFor } from '@/components/lpz-content';
export const metadata=metadataFor('Phoenix Valley service areas','Explore LPZ Plumbing Solutions service areas from Laveen throughout the Phoenix Valley. Call to confirm service at your address.','/service-areas/');
export default function Page(){return <><Header/><main id="main"><section className="page-hero"><Breadcrumbs items={[{name:'Service areas',path:'/service-areas/'}]}/><p className="eyebrow">LAVEEN ROOTS. VALLEY CONNECTIONS.</p><h1>Your neighborhood.<br/>Our kind of work.</h1><p>Choose your area to explore local service information. Contact LPZ with your address to confirm availability.</p></section><section className="section"><AreaMap/></section></main><Footer/></>}

