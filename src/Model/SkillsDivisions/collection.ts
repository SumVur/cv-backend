import { AbstractCollection, RepositoryInterface } from "@api";
import { SkillsDivisionsInterface } from "./model";

export class SkillsDivisionCollection extends AbstractCollection<SkillsDivisionsInterface> {
  constructor(repository: RepositoryInterface<SkillsDivisionsInterface>) {
    super(repository, "SkillsDivisionCollection");
  }
}
