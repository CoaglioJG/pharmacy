import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class PharmacyGet{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(cnpj: string){
        try{ 
            const phamacy = await this.pharmacyRepository.findById(cnpj);

            if(!phamacy) return 'phamacy not found';

            return phamacy;
        }catch(error){
            throw new Error(error.message)
        }

    }
}