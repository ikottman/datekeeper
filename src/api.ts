import type {Timeline } from './schema';

export async function getTimelines(): Promise<Timeline[]> {
  return [
        {
          "name": "Birthdays",
          "events": [
            {
              "event": "Ian's Birthday",
              "date": "1989-09-06"
            },
            {
              "event": "Haley's Birthday",
              "date": "1989-12-25"
            }
          ]
        },
        {
          "name": "Anniversaries",
          "events": [
            {
              "event": "Wedding Anniversary",
              "date": "2015-03-14"
            }
          ]
        }
      ];
}