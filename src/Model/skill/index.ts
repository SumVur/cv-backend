import {CollectionInterface, ModelInterface, ResourceInterface} from "../api";
import {SkillInterface, SkillModel} from "./model";
import {SkillsCollection} from "./collection";
import {SkillRepository} from "./repository";

export * from "./model"
export * from "./collection"

export type SkillResourceInterface = ResourceInterface<SkillInterface>

export class SkillResource implements SkillResourceInterface {
    private model: ModelInterface<SkillInterface>
    private collection: CollectionInterface<SkillInterface>

    constructor() {
        const skillRepository = new SkillRepository();
        this.model = new SkillModel(skillRepository);
        this.collection = new SkillsCollection(skillRepository);
    }

    async getAllItems(): Promise<SkillInterface[]> {
        return await this.collection.getAllItems();
    }

    async getById(id: string): Promise<SkillInterface | null> {
        return await this.model.getById(id);
    }

    async modify(item: SkillInterface): Promise<SkillInterface> {
        return await this.model.modify(item);
    }

    async save(item: SkillInterface): Promise<boolean> {
        return await this.model.save(item);
    }

    async deleteById(id: string): Promise<boolean> {
        return this.model.deleteById(id);
    }
}