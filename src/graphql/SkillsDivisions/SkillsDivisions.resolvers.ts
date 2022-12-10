import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {
  SkillsDivisionsResource,
  SkillsDivisionsResourceInterface,
} from "Model/SkillsDivisions";
import {
  SkillsDivisions,
  SkillsDivisionsInput,
} from "./SkillsDivisions.schema";

@Resolver(() => SkillsDivisions)
export class SkillsDivisionsResolver {
  private resource: SkillsDivisionsResourceInterface;

  constructor() {
    this.resource = new SkillsDivisionsResource();
  }

  @Query(() => [SkillsDivisions], { nullable: true })
  async getSkillsDivisions(): Promise<SkillsDivisions[] | null> {
    const data = await this.resource.getAllItems();

    return data.map((item) => {
      const skill: SkillsDivisions = {
        id: item.id,
        title: item.title,
        skills: item.skills,
      };
      return skill;
    });
  }

  @Query(() => SkillsDivisions, { nullable: true })
  async getSkillsDivision(
    @Arg("id") id: number
  ): Promise<SkillsDivisions | null> {
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
    @Arg("input") input: SkillsDivisionsInput
  ): Promise<boolean | null> {
    return await this.resource.save({ id: 0, title: input.title, skills: [] });
  }
}
