import { Router } from "express";
import { sqlConnect } from "../controllers/autho.controller";

const router = Router();

router.get('/connect/usuarios', sqlConnect);

export default router;