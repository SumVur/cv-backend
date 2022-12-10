import { CollectionInterface, redisGetOrSave, RepositoryInterface } from "@api";
import { SkillsDivisionsInterface } from "./model";

export class SkillsDivisionCollection
  implements CollectionInterface<SkillsDivisionsInterface>
{
  constructor(
    private SkillRepository: RepositoryInterface<SkillsDivisionsInterface>,
    private key = "SkillsDivisionCollection"
  ) {}

  async getAllItems(): Promise<SkillsDivisionsInterface[]> {
    return redisGetOrSave(this.key, () => {
      return this.SkillRepository.getAll();
    });
  }
}
