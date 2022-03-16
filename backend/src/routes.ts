import { IncomingMessage, ServerResponse } from 'http';

export function handler(request: IncomingMessage, response: ServerResponse) {
  return response.end('Hello');
}
