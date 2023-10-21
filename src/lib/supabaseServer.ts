import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';


const createServerClient = () => createServerComponentClient({ headers, cookies });
export default createServerClient;