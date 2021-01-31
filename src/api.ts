import type { Events } from './schema';

export async function getEvents(url: string, secret: string): Promise<Events> {
  const latestBin = `${url}/latest`;
  const response = await fetch(latestBin, {
    headers: {
      'secret-key': secret
    }
  });

  return response.json();
}
