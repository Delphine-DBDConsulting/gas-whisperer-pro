CREATE TABLE public.contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text NOT NULL,
  job_title text,
  email text NOT NULL,
  phone text,
  site_location text,
  offer text,
  message text NOT NULL,
  ip_address text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.brochure_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  ip_address text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.brochure_leads TO service_role;
ALTER TABLE public.brochure_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX contact_requests_created_at_idx ON public.contact_requests (created_at DESC);
CREATE INDEX brochure_leads_created_at_idx ON public.brochure_leads (created_at DESC);