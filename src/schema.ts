export interface Event {
  event: string;
  date: string;
}

export interface Events {
  events: Event[];
}

export interface AuthConfig {
  domain: string;
  clientId: string;
  audience: string;
  scope: string;
}