import {SanityClient} from '@sanity/client'
import groq from 'groq'
import {from, Observable, of, throwError} from 'rxjs'
import {mergeMap} from 'rxjs/operators'

import {HttpError} from '../types'

const checkTemplateName = (client: SanityClient, title: string) => {
  return function <T>(source: Observable<T>): Observable<boolean> {
    return source.pipe(
      mergeMap(() => {
        return from(
          client.fetch(groq`count(*[_type == "template" && title == $title])`, {
            title,
          }),
        ) as Observable<number>
      }),
      mergeMap((existingTemplateCount: number) => {
        if (existingTemplateCount > 0) {
          return throwError(
            () =>
              ({
                message: 'Template already exists',
                statusCode: 409,
              }) as HttpError,
          )
        }

        return of(true)
      }),
    )
  }
}

export default checkTemplateName
