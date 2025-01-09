
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pcovmtxlyxpialltgqdq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjb3ZtdHhseXhwaWFsbHRncWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNTQyODQsImV4cCI6MjA1MTgzMDI4NH0.UNcqIDE2PNOdC94aM6QNpE-JP-C9FB5xOn_8mPi3Dzg"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;