import {createClient} from '@supabase/supabase-js';
const url='https://jgnceigrhrhgrixgponu.supabase.co';
const publishableKey='sb_publishable_6h0Ivc0xFByMWgVEzRY4ZQ_FJuwkW5I';
export const supabase=createClient(url,publishableKey);