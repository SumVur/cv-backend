import {SkillRepositoryInterface} from "./repository";
import {ModelInterface, RepositoryInterface} from "../api";

export type SkillInterface = SkillRepositoryInterface

export class SkillModel implements ModelInterface<SkillInterface> {

    constructor(private SkillRepository: RepositoryInterface<SkillInterface>) {
    }

    async deleteById(id: string): Promise<boolean> {
        return await this.SkillRepository.deleteById(id);
    }

    async getById(id: string): Promise<SkillInterface | null> {
        return await this.SkillRepository.getById(id);
    }

    async modify(item: SkillInterface): Promise<SkillInterface> {
        return await this.SkillRepository.modify(item);
    }

    async save(item: SkillInterface): Promise<boolean> {
        return await this.SkillRepository.save(item);
    }

}
