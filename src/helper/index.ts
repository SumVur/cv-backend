import {createClient} from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config()

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(`${supabaseUrl}`, `${supabaseKey}`);