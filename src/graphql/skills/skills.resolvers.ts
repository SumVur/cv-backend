import { Skill, SkillInput } from "./skills.schema";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { SkillInterface, SkillResource } from "@Model/Skill";
import { AbstractResource } from "@api";

@Resolver(() => Skill)
export class SkillsResolver {
  private resource: AbstractResource<SkillInterface>;

  constructor() {
    this.resource = new SkillResource();
  }

  @Query(() => [Skill], { nullable: true })
  async getSkills(): Promise<Skill[] | null> {
    const data = await this.resource.getAllItems();

    return data.map((item) => {
      const skill: Skill = {
        id: item.id,
        title: item.title,
        link: item.link,
      };
      return skill;
    });
  }

  @Query(() => Skill, { nullable: true })
  async getSkill(@Arg("id") id: number): Promise<Skill | null> {
    const data = await this.resource.getById(`${id}`);
    if (data) {
      return {
        id: data.id,
        title: data.title,
        link: data.link,
      };
    }
    return null;
  }

  @Mutation(() => Boolean, { nullable: true })
  async createSkill(@Arg("input") input: SkillInput): Promise<boolean | null> {
    return await this.resource.save({
      id: 0,
      title: input.title,
      link: input.link,
    });
  }
}
