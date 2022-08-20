import type { AppProps } from "next/app";
import { AuthProvider } from '../lib/auth';
import "../styles/globals.css";
import { supabase } from "../utils/supabaseClient";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider supabase={supabase}>
			<Component {...pageProps} />
		</AuthProvider>		
	);
}

export default MyApp;
