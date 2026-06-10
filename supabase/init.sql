-- Run this entire file in your Supabase SQL editor to set up all tables.

-- ──────────────────────────────────────────
-- POLL
-- ──────────────────────────────────────────
create table if not exists poll_questions (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists poll_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid references poll_questions(id) on delete cascade,
  option_text text not null,
  vote_count integer default 0,
  display_order integer default 0
);

-- Atomic vote increment (avoids race conditions)
create or replace function vote_for_option(p_option_id uuid)
returns void language plpgsql security definer as $$
begin
  update poll_options set vote_count = vote_count + 1 where id = p_option_id;
end;
$$;

-- ──────────────────────────────────────────
-- GUESTBOOK
-- ──────────────────────────────────────────
create table if not exists guestbook_entries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  approved boolean default false,
  created_at timestamptz default now()
);

-- ──────────────────────────────────────────
-- PROBLEM SOLVER
-- ──────────────────────────────────────────
create table if not exists problems (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  problem text not null,
  solution text,
  published boolean default false,
  created_at timestamptz default now()
);

-- ──────────────────────────────────────────
-- NOTES (microblog)
-- ──────────────────────────────────────────
create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  created_at timestamptz default now()
);

-- ──────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ──────────────────────────────────────────
alter table poll_questions enable row level security;
alter table poll_options enable row level security;
alter table guestbook_entries enable row level security;
alter table problems enable row level security;
alter table notes enable row level security;

-- Poll: public read
create policy "public read poll questions" on poll_questions for select using (true);
create policy "public read poll options" on poll_options for select using (true);

-- Guestbook: anyone can submit; only approved entries are visible
create policy "anyone can submit guestbook" on guestbook_entries for insert with check (true);
create policy "read approved guestbook" on guestbook_entries for select using (approved = true);

-- Problems: anyone can submit; only published solutions are visible
create policy "anyone can submit problem" on problems for insert with check (true);
create policy "read published solutions" on problems for select using (published = true and solution is not null);

-- Notes: public read (you insert rows directly via the Supabase dashboard)
create policy "public read notes" on notes for select using (true);

-- ──────────────────────────────────────────
-- SEED: first poll question
-- ──────────────────────────────────────────
do $$
declare q_id uuid;
begin
  insert into poll_questions (question) values ('What's your favorite genre'?') returning id into q_id;
  insert into poll_options (question_id, option_text, display_order) values
    (q_id, 'Literary fiction', 1),
    (q_id, 'Sci fi', 2),
    (q_id, 'Fantasy', 3),
    (q_id, 'Horror', 4);
end;
$$;
