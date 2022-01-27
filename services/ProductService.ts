import { Service } from "typedi";
import ProductValidationService from "../validation/ProductValidationService";
import ProductModelService from "../models/ProductModelService";

import UnauthorizedError from "../errors/UnauthorizedError";
import * as ErrorCodes from "../errors/ErrorCodes"
import BadRequestError from "../errors/BadRequestError";

@Service()
export default class ProductService {

    constructor(private productValidationService: ProductValidationService,
        private productModelService: ProductModelService) { }

    async listProducts() {
        const products = await this.productModelService.list()
        return products;
    }

    async getProduct(id: number) {
        //this.productValidationService.getProduct({ id })  //Validates and throw errors if there is     
        const product = await this.productModelService.get(id)
        return product;
    }

    async deleteProduct(id: number) {
        //this.productValidationService.deleteProduct({ id })  //Validates and throw errors if there is     
        const product = await this.productModelService.delete(id)
        return { "data": product };
    }

    async importProducts() {
        return { "id": "Not implememnted" };
    }
}