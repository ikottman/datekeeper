import type { ApiResponse, Timeline } from './schema';

export async function getTimelines(url: string, secret: string): Promise<Timeline[]> {
  const latestBin = `${url}/latest`;
  const response = await fetch(latestBin, {
    headers: {
      'secret-key': secret
    }
  });

  if (response.ok) {
    return await response.json().then((data: ApiResponse) => data.timelines);
  } else {
    console.error('Failed to retrieve timelines');
    throw new Error();
  }
}