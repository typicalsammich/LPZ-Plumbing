import { Header,Footer } from '@/components/lpz-shell';
import { Breadcrumbs,metadataFor } from '@/components/lpz-content';
import { ReviewExperience } from '@/components/lpz-interactive';
export const metadata=metadataFor('Customer reviews','Read customer testimonials published by LPZ Plumbing Solutions about communication, diagnosis and workmanship.','/reviews/');
export default function Page(){return <><Header/><main id="main"><section className="page-hero"><Breadcrumbs items={[{name:'Reviews',path:'/reviews/'}]}/><p className="eyebrow">THE PEOPLE BEHIND THE FEEDBACK</p><h1>Service, in our<br/>customers’ words.</h1><p>Customer testimonials from LPZ’s existing website. Select a name to read their experience.</p></section><ReviewExperience/></main><Footer/></>}

