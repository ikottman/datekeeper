import { Doc, collection, update, query, where } from 'typesaurus';
import type { Timeline } from '../schema';
const timelines = collection<Timeline>('timelines');

export async function getTimelines(userId: string): Promise<Doc<Timeline>[]>{
  return query(timelines, [where('userId', '==', userId)]);
}

export async function updateTimeline(timelineDoc: Doc<Timeline>): Promise<void>{
  return update(timelines, timelineDoc.ref.id, timelineDoc.data);
}