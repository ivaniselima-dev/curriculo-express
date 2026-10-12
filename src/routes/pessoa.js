import { Router } from "express";
import {
  pessoaController,
  experienciaController,
  formacaoController,
  projetoController,
} from "../controllers/index.js";

const router = Router();

router.get("/", pessoaController.listar);
router.get("/:id", pessoaController.buscar);
router.post("/", pessoaController.criar);
router.put("/:id", pessoaController.atualizar);
router.delete("/:id", pessoaController.apagar);

// Relacionamentos
router.get("/:id/curriculo", pessoaController.buscarCurriculo);
router.get("/:id/experiencias", experienciaController.listarPorPessoa);
router.get("/:id/formacoes", formacaoController.listarPorPessoa);
router.get("/:id/projetos", projetoController.listarPorPessoa);

export default router;
