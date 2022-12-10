import { AbstractResource } from "@api";
import { SkillsDivisionsInterface, SkillsDivisionsModel } from "./model";
import { SkillsDivisionCollection } from "./collection";
import { SkillsDivisionsRepository } from "./repository";

export * from "./model";
export * from "./collection";

export class SkillsDivisionsResource extends AbstractResource<SkillsDivisionsInterface> {
  constructor() {
    const skillsDivisionsRepository = new SkillsDivisionsRepository();
    const model = new SkillsDivisionsModel(skillsDivisionsRepository);
    const collection = new SkillsDivisionCollection(skillsDivisionsRepository);
    super(model, collection);
  }
}
