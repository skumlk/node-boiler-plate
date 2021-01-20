
import { Service } from "typedi";
import { Survey } from "../schemas/Survey";

@Service()
export default class SurveyModelService {

    async create(data: { name: String} ){
        const survey = new Survey(data);
        await survey.save();
        return survey
    }
}