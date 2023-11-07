export default defineEventHandler((event) => {
  console.log(event);

  return $fetch(`https://api.coinlore.net${event.node.req.url}`)
})
