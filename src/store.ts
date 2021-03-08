import { writable } from 'svelte/store';
import type { Doc } from 'typesaurus';
import { createUser, refreshTimelines } from './firebase/api';
import type { EventType, Timeline, User } from './schema';

export const user = writable<User>(null);
// make sure the user has a doc in the datastore
user.subscribe((value: User) => {
  if (value) {
    createUser(value.id);
  }
});

export const timelines = writable<Doc<Timeline>[]>([]);
export const selectedTimeline = writable<Doc<Timeline>>(null);
export const events = writable<EventType[]>([]);

// update events when the timelines get updated or the user selects a different timeline
let selectedId;
selectedTimeline.subscribe(value => {
  events.set(value?.data?.events);
  selectedId = value?.ref?.id;
});
timelines.subscribe((value: Doc<Timeline>[]) => {
  const refreshedSelected = value.find(timeline => timeline.ref.id === selectedId)
  selectedTimeline.set(refreshedSelected);
});

// fill in state based on the logged in user
user.subscribe((value: User) => {
  if (value) {
    refreshTimelines(value.id);
  } else {
    timelines.set([]);
  }
});