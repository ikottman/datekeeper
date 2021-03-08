import { Doc, collection, update, set, add, subcollection, all } from 'typesaurus';
import { timelines } from '../store';
import type { Timeline } from '../schema';

type UserDoc = { }; // we don't store any user fields, it's just a parent collection
const users = collection<UserDoc>('users');
const timelinesCollection = subcollection<Timeline, UserDoc>('timelines', users);

export async function refreshTimelines(userId: string): Promise<void> {
  const usersTimelines = timelinesCollection(userId);
  all(usersTimelines).then(timelineDocs => timelines.set(timelineDocs));
}

export async function updateTimeline(userId: string, timelineDoc: Doc<Timeline>): Promise<void> {
  const usersTimelines = timelinesCollection(userId);
  update(usersTimelines, timelineDoc.ref.id, timelineDoc.data).then(_ => refreshTimelines(userId));
}

export async function addTimeline(userId: string, name: string): Promise<void> {
  const usersTimelines = timelinesCollection(userId);
  add(usersTimelines, { name: name, events: [] }).then(_ => refreshTimelines(userId));
}

export async function createUser(userId): Promise<void> {
  return set(users, userId, {});
}