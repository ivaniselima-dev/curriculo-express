import "dotenv/config";
import express from "express";
import { sequelize } from "./models/index.js";
import {
  corsMiddleware,
  logMiddleware,
  erroMiddleware,
} from "./middlewares/index.js";
import * as routes from "./routes/index.js";
import criarCurriculos from "./utils/seed.js";

const app = express();

app.set("trust proxy", true);

// middlewares
app.use(corsMiddleware);
app.use(express.json());
app.use(logMiddleware);

// rotas
app.get("/", (req, res) => {
  return res.send("API do currículo no ar");
});
app.use("/pessoas", routes.pessoa);
app.use("/experiencias", routes.experiencia);
app.use("/formacoes", routes.formacao);
app.use("/projetos", routes.projeto);

// tratamento de erros (sempre depois das rotas)
app.use(erroMiddleware);

const port = process.env.PORT || 3000;

// SYNC_DATABASE=true: cria as tabelas que faltam
// ERASE_DATABASE_ON_SYNC=true: apaga tudo, recria e cadastra os dois currículos
const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC === "true";
const syncDatabase =
  process.env.SYNC_DATABASE === "true" || eraseDatabaseOnSync;

const startServer = () => {
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
};

if (syncDatabase) {
  sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    if (eraseDatabaseOnSync) {
      await criarCurriculos();
      console.log("Banco recriado com os dois currículos");
    }
    startServer();
  });
} else {
  startServer();
}

export default app;