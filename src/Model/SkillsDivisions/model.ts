import { SkillsDivisionsRepositoryInterface } from "./repository";
import { ModelInterface, redisGetOrSave, RepositoryInterface } from "@api";

export type SkillsDivisionsInterface = SkillsDivisionsRepositoryInterface;

export class SkillsDivisionsModel
  implements ModelInterface<SkillsDivisionsInterface>
{
  constructor(
    private SkillRepository: RepositoryInterface<SkillsDivisionsInterface>,
    private key = "SkillsDivisionsModel"
  ) {}

  async deleteById(id: string): Promise<boolean> {
    return await this.SkillRepository.deleteById(id);
  }

  async getById(id: string): Promise<SkillsDivisionsInterface | null> {
    const key = `${this.key}${id}`;

    return redisGetOrSave(key, () => {
      return this.SkillRepository.getById(id);
    });
  }

  async modify(
    item: SkillsDivisionsInterface
  ): Promise<SkillsDivisionsInterface> {
    return await this.SkillRepository.modify(item);
  }

  async save(item: SkillsDivisionsInterface): Promise<boolean> {
    return await this.SkillRepository.save(item);
  }
}
