import { SkillRepositoryInterface } from "./repository";
import { AbstractModel, RepositoryInterface } from "@api";

export type SkillInterface = SkillRepositoryInterface;

export class SkillModel extends AbstractModel<SkillInterface> {
  constructor(repository: RepositoryInterface<SkillInterface>) {
    super(repository, "SkillModel");
  }
}
