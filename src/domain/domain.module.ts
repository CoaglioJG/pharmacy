import { Module } from "@nestjs/common";
import { SavePharmacy } from "./useCases/savePharmacy";

@Module({
    providers: [SavePharmacy],
    exports: [SavePharmacy],
  })
  export class DomainModule {}