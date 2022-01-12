import { BadRequestException } from "@nestjs/common";
import { Pharmacy } from "../modules/entities/pharmacy";
import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class SavePharmacy{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(pharmacy:Pharmacy){
        try{ 
            const alreadyExistPhamacy = await this.pharmacyRepository.findById(pharmacy.cnpj)

            if(!alreadyExistPhamacy){
                return await this.pharmacyRepository.save(pharmacy)
            }else{
                return 'Pharmacy already exists'
            }
        }catch(error){
            throw new BadRequestException(error.message)
        }
    }
}