import { Field, InputType, ObjectType } from "type-graphql";
import { Skill } from "../skills/skills.schema";

@ObjectType()
export class SkillsDivision {
  @Field()
  id!: number;

  @Field()
  title!: string;

  @Field((type) => [Skill])
  skills!: Skill[];
}

@InputType()
export class SkillsDivisionInput implements Pick<SkillsDivision, "title"> {
  @Field()
  title!: string;
}
