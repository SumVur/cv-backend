import { Field, InputType, ObjectType } from "type-graphql";
import { Skill } from "../skills/skills.schema";

@ObjectType()
export class SkillsDivisions {
  @Field()
  id!: number;

  @Field()
  title!: string;

  @Field((type) => [Skill])
  skills!: Skill[];
}

@InputType()
export class SkillsDivisionsInput implements Pick<SkillsDivisions, "title"> {
  @Field()
  title!: string;
}
