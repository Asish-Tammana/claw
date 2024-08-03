
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ozopxoaaslysqdrxaoku.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96b3B4b2Fhc2x5c3Fkcnhhb2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0OTk0MDQsImV4cCI6MjAzODA3NTQwNH0.jTYuWcGHbByucr7WY9VbsMa4Lf3zgXR7Gj7d3EVTCp8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase