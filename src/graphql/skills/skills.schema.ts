import {Field, InputType, ObjectType} from "type-graphql";

@ObjectType()
export class Skill {
    @Field()
    id!: number
    @Field()
    title!: string
    @Field()
    link!: string
}

@InputType()
export class SkillInput implements Pick<Skill, "title" | "link"> {
    @Field()
    title!: string
    @Field()
    link!: string
}