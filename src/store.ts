import { writable } from 'svelte/store';
import { createUser } from './firebase/api';
import type { User } from './schema';

export const user = writable<User>(null);

// make sure the user has a doc in the datastore
user.subscribe((value: User) => {
  if (value) {
    createUser(value.id);
  }
})