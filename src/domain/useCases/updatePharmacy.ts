import { BadRequestException } from "@nestjs/common";
import { PharmacyEntity } from "src/infra/database/entities/pharmacyEntity";
import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class PharmacyUpdate{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(cnpj: string,elements: Object): Promise<PharmacyEntity>{
        try{ 
            return await this.pharmacyRepository.update(cnpj,elements);
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }
}