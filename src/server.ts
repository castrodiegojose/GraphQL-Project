import express from "express";
import compression from "compression";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import expressPlayGround from "graphql-playground-middleware-express";

const app = express();

app.use(cors({
    origin:'*'
}));
app.use(compression());

(async () => {
    const server = new ApolloServer({
    schema,
    introspection: true,
    });
    await server.start();
    server.applyMiddleware({app});
})();


app.get('/', expressPlayGround({
    endpoint: '/graphql'
}))

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`GraphQL API on http://localhost:${PORT}`);
});