import { Header,Footer } from '@/components/lpz-shell';
import { Breadcrumbs,metadataFor } from '@/components/lpz-content';
import { JournalBrowser } from '@/components/journal-browser';
export const metadata=metadataFor('The LPZ plumbing journal','Practical planning guides for plumbing repairs, remodeling, water heaters, water quality and commercial projects.','/blog/');
export default function Page(){return <><Header/><main id="main"><section className="page-hero"><Breadcrumbs items={[{name:'Journal',path:'/blog/'}]}/><p className="eyebrow">THE LPZ JOURNAL</p><h1>A little knowledge.<br/>A better decision.</h1><p>Useful questions and practical planning for the plumbing in your home or business.</p></section><section className="section light"><JournalBrowser/></section></main><Footer/></>}

