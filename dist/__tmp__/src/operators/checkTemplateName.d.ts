import { SanityClient } from '@sanity/client';
import { Observable } from 'rxjs';
declare const checkTemplateName: (client: SanityClient, title: string) => <T>(source: Observable<T>) => Observable<boolean>;
export default checkTemplateName;
