import { SkillsDivisionsRepositoryInterface } from "./repository";
import { AbstractModel, RepositoryInterface } from "../api";

export type SkillsDivisionsInterface = SkillsDivisionsRepositoryInterface;

export class SkillsDivisionsModel extends AbstractModel<SkillsDivisionsInterface> {
  constructor(repository: RepositoryInterface<SkillsDivisionsInterface>) {
    super(repository, "SkillsDivisionsModel");
  }
}
