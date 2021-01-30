import { writable } from 'svelte/store';

// User authentication
export const user = writable(0);
export const authenticated = writable(0);
export const token = writable(0);
