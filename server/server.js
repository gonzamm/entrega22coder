import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const colores = []

const router = new Router();
router
  .get("/", async (context) => {
    context.response.body = colores
  })
  .post("/colors/:color", (context) => {
    const unColor = context.params.color
    colores.push(unColor)
    context.response.body = colores
  })

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());

await app.listen({ port: 8080 });