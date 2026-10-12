import { Router } from "express";
import { projetoController } from "../controllers/index.js";

const router = Router();

router.get("/", projetoController.listar);
router.get("/:id", projetoController.buscar);
router.post("/", projetoController.criar);
router.put("/:id", projetoController.atualizar);
router.delete("/:id", projetoController.apagar);

export default router;
