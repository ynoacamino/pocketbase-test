routerAdd("GET", "/hola", (c) => {

  return c.json(200, { "message": "Hello " })
})