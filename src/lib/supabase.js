import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://bjnmfncsevyqmonmwmqq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqbm1mbmNzZXZ5cW1vbm13bXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMjMyMjMsImV4cCI6MjA5NTY5OTIyM30.anpbCBrJgxZaoFRUWMUEE8vM99Nn0tD8IsUsnzqCnGY'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
