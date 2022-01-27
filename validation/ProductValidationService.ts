import Validation from "./Validation";
import Joi from "joi";
import { Service } from "typedi";

@Service()
export default class ProductValidationService extends Validation {

    createSurvey(data: { name: string }, isThrowError = true) {

        const schema = Joi.object({
            name: Joi.string().required()
        })

        return this.validate(schema, data, isThrowError)
    }
}