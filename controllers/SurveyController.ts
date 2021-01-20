import "reflect-metadata";
import * as express from "express";
import Container from "typedi";
import SurveyService from "../services/SurveyService";
import * as httpHelpers from "../helpers/http";

export default class SurveyController{

    static async createSurvey(req: express.Request, res: express.Response, next: express.NextFunction) {
        
        try {
            const { name } = req.body;
            const surveyService = Container.get(SurveyService) // Service locator
            const data = await surveyService.createSurvey(name)
            return httpHelpers.successResponse(res, data)
        } catch (e) {
            next(e)
        }
    } 
}