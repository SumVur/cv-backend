import { CollectionInterface, ModelInterface, ResourceInterface } from "../api";
import { SkillsDivisionsInterface, SkillsDivisionsModel } from "./model";
import { SkillsDivisionCollection } from "./collection";
import { SkillsDivisionsRepository } from "./repository";

export * from "./model";
export * from "./collection";

export type SkillsDivisionsResourceInterface =
  ResourceInterface<SkillsDivisionsInterface>;

export class SkillsDivisionsResource
  implements SkillsDivisionsResourceInterface
{
  private model: ModelInterface<SkillsDivisionsInterface>;
  private collection: CollectionInterface<SkillsDivisionsInterface>;

  constructor() {
    const skillRepository = new SkillsDivisionsRepository();
    this.model = new SkillsDivisionsModel(skillRepository);
    this.collection = new SkillsDivisionCollection(skillRepository);
  }

  async getAllItems(): Promise<SkillsDivisionsInterface[]> {
    return await this.collection.getAllItems();
  }

  async getById(id: string): Promise<SkillsDivisionsInterface | null> {
    return await this.model.getById(id);
  }

  async modify(
    item: SkillsDivisionsInterface
  ): Promise<SkillsDivisionsInterface> {
    return await this.model.modify(item);
  }

  async save(item: SkillsDivisionsInterface): Promise<boolean> {
    return await this.model.save(item);
  }

  async deleteById(id: string): Promise<boolean> {
    return this.model.deleteById(id);
  }
}
