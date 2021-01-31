import { writable } from 'svelte/store';

// User authentication
export const user = writable({});
export const authenticated = writable(false);
