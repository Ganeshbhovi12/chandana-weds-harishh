/**
 * Supabase Shared Database Configuration for Chandana & Harish Wedding Wishes
 * 
 * Instructions to connect your shared guestbook:
 * 1. Create a free account & project at https://supabase.com
 * 2. In your Supabase project dashboard -> SQL Editor, run the setup SQL (provided below).
 * 3. Go to Project Settings -> API, copy your Project URL and public 'anon' Key.
 * 4. Paste them into the fields below:
 */

window.SUPABASE_CONFIG = {
  url: "",       // e.g. "https://abcdefghijkl.supabase.co"
  anonKey: ""    // e.g. "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey..."
};

/*
-- =========================================================================
-- SQL TABLE CREATION SCRIPT (Copy and run in Supabase SQL Editor)
-- =========================================================================

CREATE TABLE IF NOT EXISTS wedding_wishes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  message TEXT NOT NULL CHECK (char_length(message) <= 250),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE wedding_wishes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view wishes (public read)
CREATE POLICY "Public can view wishes"
ON wedding_wishes FOR SELECT
TO anon, authenticated
USING (true);

-- Allow anyone to insert wishes without logging in (public write)
CREATE POLICY "Public can insert wishes"
ON wedding_wishes FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- (Notice: No update or delete policy is added, so visitors cannot edit or delete others' wishes!)
*/

