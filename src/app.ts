import {expressive} from "./../deps.ts"

const port = 3000;
const app = new expressive.App();
app.use(expressive.simpleLog());

app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());

app.get("/", async (req: expressive.Request, res: expressive.Response) => {
    await res.json({text: "hello from deno!"});
});

const server = await app.listen(port);
console.log("app listening on port " + server.port);
