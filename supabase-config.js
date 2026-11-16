/**
 * Supabase Configuration for Chandana & Harish Private Wedding Wishes
 * 
 * Instructions to connect Supabase:
 * 1. Create a free project at https://supabase.com
 * 2. In SQL Editor, run the SQL script below.
 * 3. In Authentication -> Users, create accounts for Chandana and Harish.
 * 4. In Project Settings -> API, copy your Project URL and public 'anon' Key.
 * 5. Paste them below:
 */

window.SUPABASE_CONFIG = {
  url: "",       // e.g. "https://abcdefghijkl.supabase.co"
  anonKey: ""    // e.g. "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey..."
};

/*
-- =========================================================================
-- SECURE SUPABASE SQL SETUP (Run in Supabase SQL Editor)
-- =========================================================================

-- 1. Create wishes table with is_read status
CREATE TABLE IF NOT EXISTS wedding_wishes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  message TEXT NOT NULL CHECK (char_length(message) <= 250),
  is_read BOOLEAN DEFAULT false NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE wedding_wishes ENABLE ROW LEVEL SECURITY;

-- 3. Public guests can ONLY INSERT wishes (Guests can NEVER view or retrieve others' wishes!)
CREATE POLICY "Public can insert wishes"
ON wedding_wishes FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 4. Only authenticated couple accounts (Chandana & Harish) can view wishes
CREATE POLICY "Authenticated couple can view wishes"
ON wedding_wishes FOR SELECT
TO authenticated
USING (true);

-- 5. Only authenticated couple accounts can mark wishes as read
CREATE POLICY "Authenticated couple can update wishes"
ON wedding_wishes FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 6. Only authenticated couple accounts can delete wishes
CREATE POLICY "Authenticated couple can delete wishes"
ON wedding_wishes FOR DELETE
TO authenticated
USING (true);
*/
