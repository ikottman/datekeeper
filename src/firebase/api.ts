import { Doc, Ref, collection, update, set, add, subcollection, all } from 'typesaurus';
import type { Timeline } from '../schema';
type User = { };
const users = collection<User>('users');
const timelines = subcollection<Timeline, User>('timelines', users);

export async function getTimelines(userId: string): Promise<Doc<Timeline>[]>{
  const usersTimelines = timelines(userId);
  return all(usersTimelines);
}

export async function updateTimeline(userId: string, timelineDoc: Doc<Timeline>): Promise<void> {
  const usersTimelines = timelines(userId);
  return update(usersTimelines, timelineDoc.ref.id, timelineDoc.data);
}

export async function addTimeline(userId: string, name: string): Promise<Ref<Timeline>> {
  const usersTimelines = timelines(userId);
  return add(usersTimelines, { name: name, events: [] });
}

export async function createUser(userId): Promise<void> {

  return set(users, userId, {});
}