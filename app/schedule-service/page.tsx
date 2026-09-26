import { Header,Footer } from '@/components/lpz-shell';
import { Breadcrumbs,metadataFor } from '@/components/lpz-content';
import ScheduleWizard from '@/components/schedule-wizard';
export const metadata=metadataFor('Schedule plumbing service','Request residential or commercial plumbing service from LPZ. Choose a preferred date and time. For urgent help call (602) 776-8749.','/schedule-service/');
export default function Page(){return <><Header/><main id="main"><div className="schedule-heading"><Breadcrumbs items={[{name:'Schedule service',path:'/schedule-service/'}]}/><h1>Let’s take care of it.</h1></div><ScheduleWizard/></main><Footer/></>}

