import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {
  SkillsDivisionsInterface,
  SkillsDivisionsResource,
} from "../../Model/SkillsDivisions";
import {
  SkillsDivision,
  SkillsDivisionInput,
} from "./SkillsDivisions.schema";
import {AbstractResource} from "../../Model/api";

@Resolver(() => SkillsDivision)
export class SkillsDivisionsResolver {
  private resource: AbstractResource<SkillsDivisionsInterface>;

  constructor() {
    this.resource = new SkillsDivisionsResource();
  }

  @Query(() => [SkillsDivision], { nullable: true })
  async getSkillsDivisions(): Promise<SkillsDivision[] | null> {
    const data = await this.resource.getAllItems();

    return data.map((item) => {
      const skill: SkillsDivision = {
        id: item.id,
        title: item.title,
        skills: item.skills,
      };
      return skill;
    });
  }

  @Query(() => SkillsDivision, { nullable: true })
  async getSkillsDivision(
    @Arg("id") id: number
  ): Promise<SkillsDivision | null> {
    const data = await this.resource.getById(`${id}`);

    if (data) {
      return {
        id: data.id,
        title: data.title,
        skills: data.skills,
      };
    }
    return null;
  }

  @Mutation(() => Boolean, { nullable: true })
  async createSkillsDivision(
    @Arg("input") input: SkillsDivisionInput
  ): Promise<boolean | null> {
    return await this.resource.save({ id: 0, title: input.title, skills: [] });
  }
}
