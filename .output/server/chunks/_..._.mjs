import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const _____ = defineEventHandler((event) => {
  console.log(event);
  return $fetch(`https://api.coinlore.net${event.node.req.url}`);
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
