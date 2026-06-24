const SUPABASE_URL =
  "https://dltkipdidogxcqwsytaq.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdGtpcGRpZG9neGNxd3N5dGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyOTc1NTMsImV4cCI6MjA5Nzg3MzU1M30.-5Z7Z-H-QGLcXW1fMtCksjITnA2W7WaXjUsEv66JQbQ";

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );