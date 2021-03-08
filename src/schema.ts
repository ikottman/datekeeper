// avoid collision with DOM Events type
export interface EventType {
  name: string;
  date: string;
}

export interface Timeline {
  name: string;
  events: EventType[];
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