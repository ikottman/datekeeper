import { writable } from 'svelte/store';
import type { Doc } from 'typesaurus';
import { createUser, refreshTimelines } from './firebase/api';
import type { Timeline, User } from './schema';

export const user = writable<User>(null);
// make sure the user has a doc in the datastore
user.subscribe((value: User) => {
  if (value) {
    createUser(value.id);
  }
});

export const timelines = writable<Doc<Timeline>[]>([]);

// fill in state based on the logged in user
user.subscribe((value: User) => {
  if (value) {
    refreshTimelines(value.id);
  } else {
    timelines.set([]);
  }
});