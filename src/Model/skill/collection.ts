import {CollectionInterface, RepositoryInterface} from "../api";
import {SkillInterface} from "./model";


export class SkillsCollection implements CollectionInterface<SkillInterface> {

    constructor(private SkillRepository: RepositoryInterface<SkillInterface>) {
    }

   async getAllItems(): Promise<SkillInterface[]> {
        return this.SkillRepository.getAll();
    }

}