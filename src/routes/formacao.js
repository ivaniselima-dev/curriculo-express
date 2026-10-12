import { Router } from "express";
import { formacaoController } from "../controllers/index.js";

const router = Router();

router.get("/", formacaoController.listar);
router.get("/:id", formacaoController.buscar);
router.post("/", formacaoController.criar);
router.put("/:id", formacaoController.atualizar);
router.delete("/:id", formacaoController.apagar);

export default router;
