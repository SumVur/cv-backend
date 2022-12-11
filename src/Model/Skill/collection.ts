import { AbstractCollection, RepositoryInterface } from "../api";
import { SkillInterface } from "./model";

export class SkillsCollection extends AbstractCollection<SkillInterface> {
  constructor(repository: RepositoryInterface<SkillInterface>) {
    super(repository, "SkillsCollection");
  }
}
