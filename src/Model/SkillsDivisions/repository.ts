import { RepositoryInterface } from "@api";
import { SkillRepositoryInterface } from "../Skill/repository";
import { supabase } from "@helpers";

export interface SkillsDivisionsRepositoryInterface {
  id: number;
  title: string;
  skills: SkillRepositoryInterface[];
}

export class SkillsDivisionsRepository
  implements RepositoryInterface<SkillsDivisionsRepositoryInterface>
{
  private skillsDivisionsTable = "divisionsOfSkills";

  async getAll(): Promise<SkillsDivisionsRepositoryInterface[]> {
    const { data, error } = await supabase
      .from(this.skillsDivisionsTable)
      .select(" *, skills:skillsInDivisions!inner ( skill(*) ) ");

    data?.map((x) => {
      x.skills = x.skills.map((item: any) => {
        return {
          ...item.skill,
        };
      });
      return x;
    });

    if (!error) {
      return data;
    }
    return [];
  }

  async deleteById(id: string): Promise<boolean> {
    return false;
  }

  async getById(
    id: string
  ): Promise<SkillsDivisionsRepositoryInterface | null> {
    const { data, error } = await supabase
      .from(this.skillsDivisionsTable)
      .select(" *, skills:skillsInDivisions!inner ( skill(*) ) ")
      .match({ id: id });

    data?.map((x) => {
      x.skills = x.skills.map((item: any) => {
        return {
          ...item.skill,
        };
      });
      return x;
    });

    if (!error && data?.length > 0) {
      return data[0];
    }
    return null;
  }

  async modify(
    item: SkillsDivisionsRepositoryInterface
  ): Promise<SkillsDivisionsRepositoryInterface> {
    return {
      id: 0,
      title: "",
      skills: [],
    };
  }

  async save(item: SkillsDivisionsRepositoryInterface): Promise<boolean> {
    return false;
  }
}
