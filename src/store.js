import { writable } from 'svelte/store';

// User authentication
let storedUser = localStorage.getItem('dateKeeperUser');
export const user = writable(storedUser ? JSON.parse(storedUser) : null);
user.subscribe((value) => {
  if (value) {
    localStorage.setItem('dateKeeperUser', JSON.stringify(value));
  } else {
    localStorage.removeItem('dateKeeperUser');
  }
});

export const authenticated = writable(false);
