import { Service } from "typedi";
import SurveyValidationService from "../validation/SurveyValidationService";
import SurveyModelService from "../models/SurveyModelService";

import UnauthorizedError from "../errors/UnauthorizedError";
import * as ErrorCodes from "../errors/ErrorCodes"
import BadRequestError from "../errors/BadRequestError";

@Service()
export default class SurveyService {

    constructor(private surveyValidationService: SurveyValidationService,
        private surveyModelService: SurveyModelService) { }

    async createSurvey(name: string) {

        this.surveyValidationService.createSurvey({ name })  //Validates and throw errors if there is     

        const survey = await this.surveyModelService.create({name})
        return { "id": survey._id };
    }
}