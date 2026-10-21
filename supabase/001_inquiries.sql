-- K-BTS-WEB-1 · ตารางฟอร์มขอใบเสนอราคา (balehmstudio.com)
-- ให้พี่หยัดรันเองใน Supabase SQL Editor ครั้งเดียว · รันซ้ำได้ (if not exists)
-- แนวเดียวกับ Aiko 001_schema.sql + 002_rls.sql: เปิด RLS · ไม่มี policy ให้ anon → เขียนได้ผ่าน service role ฝั่ง server เท่านั้น
-- ต่างจาก Aiko: ไม่มี property_id/FK · ช่องเบอร์+LINE รวมเป็น contact (ฟอร์มเป็นช่องเดียว) · เพิ่ม business / package / template_code

create extension if not exists pgcrypto;

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 60),
  contact text not null check (char_length(contact) between 3 and 100),
  business text check (business is null or char_length(business) <= 100),
  package text,
  template_code text check (template_code is null or template_code ~ '^T[0-9]{2}$'),
  message text check (message is null or char_length(message) <= 2000),
  consent_at timestamptz not null,
  ip_hash text not null,
  created_at timestamptz not null default now(),
  closed_at timestamptz
);

create index if not exists inquiries_created_idx on inquiries (created_at desc);

alter table inquiries enable row level security;
