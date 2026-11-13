import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  '';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    typeof supabaseUrl === 'string' &&
    supabaseUrl.startsWith('http')
);

const noopAuth = {
  getSession: async () => ({ data: { session: null }, error: null }),
  onAuthStateChange: () => ({
    data: { subscription: { unsubscribe: () => {} } },
  }),
  signUp: async () => ({
    data: { user: null, session: null },
    error: new Error('Supabase Auth environment variables are not configured on this host.'),
  }),
  signInWithPassword: async () => ({
    data: { user: null, session: null },
    error: new Error('Supabase Auth environment variables are not configured on this host.'),
  }),
  setSession: async () => ({ data: { user: null, session: null }, error: null }),
  signOut: async () => ({ error: null }),
};

const supabase: SupabaseClient = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({ auth: noopAuth } as unknown as SupabaseClient);

export default supabase;
