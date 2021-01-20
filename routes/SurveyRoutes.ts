import * as express from "express";
import SurveyController from "../controllers/SurveyController";

const router = express.Router();

router.post("/create", SurveyController.createSurvey)

export default router