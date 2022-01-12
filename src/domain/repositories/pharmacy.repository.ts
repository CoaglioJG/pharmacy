import { Pharmacy } from "../modules/entities/pharmacy";

export abstract class PharmacyRepository{
  save: (pharmacy: Pharmacy) => Promise<Pharmacy>;
  findById: (cnpj: string) => Promise<Pharmacy>;
  delete:(cnpj: string)=> Promise<any>;
  update:(cnpj: string, elements: Object)=> Promise<Pharmacy>;
}