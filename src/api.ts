import { collection, query, where } from 'typesaurus'
import type { Timeline } from './schema';

export async function getTimelines(userId: string): Promise<Timeline[]>{
  const events = collection<Timeline>('timelines')
  return query(events, [where('userId', '==', userId)])
  .then(docs => docs.map(doc => doc.data))
}