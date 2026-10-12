import { Router } from "express";
import { experienciaController } from "../controllers/index.js";

const router = Router();

router.get("/", experienciaController.listar);
router.get("/:id", experienciaController.buscar);
router.post("/", experienciaController.criar);
router.put("/:id", experienciaController.atualizar);
router.delete("/:id", experienciaController.apagar);

export default router;
