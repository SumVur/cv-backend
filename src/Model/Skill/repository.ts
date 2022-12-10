import { SkillInterface } from "./model";
import { RepositoryInterface } from "@api";
import { supabase } from "@helpers";

export interface SkillRepositoryInterface {
  id: number;
  title: string;
  link: string;
}

export class SkillRepository implements RepositoryInterface<SkillInterface> {
  private skillsTable = "skills";

  async getAll(): Promise<SkillInterface[]> {
    const { data, error } = await supabase.from(this.skillsTable).select("*");
    if (!error) {
      return data;
    }
    return [];
  }

  async getById(id: string): Promise<SkillInterface | null> {
    const { data, error } = await supabase
      .from(this.skillsTable)
      .select("*")
      .match({ id: id });
    if (!error && data?.length > 0) {
      return data[0];
    }
    return null;
  }

  async deleteById(id: string): Promise<boolean> {
    const { data, error } = await supabase
      .from(this.skillsTable)
      .delete()
      .match({ id: id });

    return !error;
  }

  async modify(item: SkillInterface): Promise<SkillInterface> {
    const { error } = await supabase
      .from(this.skillsTable)
      .update({
        title: item.title,
        link: item.link,
      })
      .eq("id", item.id);

    return item;
  }

  async save(item: SkillInterface): Promise<boolean> {
    const { error } = await supabase.from(this.skillsTable).insert({
      title: item.title,
      link: item.link,
    });
    return !error;
  }
}
