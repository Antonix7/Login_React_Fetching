import { Router } from "express";
import { sqlConnect } from "../controllers/autho.controller";

const router = Router();

router.get('/', sqlConnect);

export default router;