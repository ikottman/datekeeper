export interface Event {
  name: string;
  date: string;
}

export interface Timeline {
  name: string;
  events: Event[];
}

export interface AuthConfig {
  domain: string;
  clientId: string;
  audience: string;
  scope: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}