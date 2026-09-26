import { Header,Footer } from '@/components/lpz-shell';
import { AreaMap,ServicePipeline } from '@/components/lpz-interactive';
import { Breadcrumbs, metadataFor } from '@/components/lpz-content';
export const metadata=metadataFor('Residential & commercial plumbing services','Explore LPZ’s new construction, remodeling, emergency, diagnostic and specialty plumbing services in the Phoenix Valley.','/services/');
export default function Page(){return <><Header/><main id="main"><section className="page-hero"><Breadcrumbs items={[{name:'Services',path:'/services/'}]}/><p className="eyebrow">FROM THE GROUND UP</p><h1>One team.<br/>Every connection.</h1><p>Explore the plumbing services that keep homes and businesses working.</p></section><section className="section light"><ServicePipeline/></section><section className="section"><h2>Local to the Valley.</h2><AreaMap/></section></main><Footer/></>}

