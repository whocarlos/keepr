
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://vmlvfeazkdzaqqiseoux.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbHZmZWF6a2R6YXFxaXNlb3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NjcwNTAsImV4cCI6MjAxOTE0MzA1MH0.mwMmJkI_TlFWUNiWsNgRo2CesoX0Lb_haK6P8kDRte0');

export default supabase;