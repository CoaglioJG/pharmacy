import { InjectRepository } from "@nestjs/typeorm";
import { PharmacyRepository } from "src/domain/repositories/pharmacy.repository";
import { Repository } from "typeorm";
import { PharmacyEntity } from "../entities/pharmacyEntity";

export class PharmacyImpl implements PharmacyRepository {
    constructor(
      @InjectRepository(PharmacyEntity)
      private readonly pharmacyRepository: Repository<PharmacyEntity>,
    ) {}
    async save(pharmacy: PharmacyEntity): Promise<PharmacyEntity> {
      return await this.pharmacyRepository.save(pharmacy);
    }
  
    async findById(cnpj: string): Promise<PharmacyEntity> {
      return await this.pharmacyRepository.findOne(cnpj);
    }

    async delete(cnpj:string): Promise<any>{
      return await this.pharmacyRepository.delete(cnpj);
    }

    async update(cnpj:string, elements: Object): Promise<any>{
      return await this.pharmacyRepository.update(cnpj, elements);
    }

  }