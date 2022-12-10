import { AbstractResource } from "@api";
import { SkillInterface, SkillModel } from "./model";
import { SkillRepository } from "./repository";
import { SkillsCollection } from "./collection";

export * from "./model";
export * from "./collection";

export class SkillResource extends AbstractResource<SkillInterface> {
  constructor() {
    const skillRepository = new SkillRepository();
    const model = new SkillModel(skillRepository);
    const collection = new SkillsCollection(skillRepository);
    super(model, collection);
  }
}
