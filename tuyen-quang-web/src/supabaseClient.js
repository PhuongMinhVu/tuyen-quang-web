import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzwfqhtxhtercpzciurv.supabase.co";
const supabaseKey = "sb_publishable_Wj6AoI7I-few-n2YzFsnnQ_hDZqRT3k";

export const supabase = createClient(supabaseUrl, supabaseKey);