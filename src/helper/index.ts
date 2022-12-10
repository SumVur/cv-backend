import {createClient} from "@supabase/supabase-js";
import { createClient as redisCreateClient } from "redis";

import dotenv from "dotenv";

dotenv.config()

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(`${supabaseUrl}`, `${supabaseKey}`);

const url = process.env.REDIS_URL;

const redis = redisCreateClient({ url });
export default redis;
