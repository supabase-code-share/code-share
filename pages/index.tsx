import { Auth } from '@supabase/ui';
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { useAuth, VIEWS } from '../lib/auth';
import { supabase } from "../utils/supabaseClient";

const Home: NextPage = () => {

	const { user, view, signOut } = useAuth();

	if (view === VIEWS.UPDATE_PASSWORD) {
		return (
		  <Layout>
			<Auth.UpdatePassword supabaseClient={supabase} />
		  </Layout>
		);
	  }

	return (
		<Layout>
			{user && (
				<>
				<h2>Welcome!</h2>
				<code className="highlight">{user.role}</code>
				<Link href="/profile">
					<a className="button">Go to Profile</a>
				</Link>
				<Link href="/upload">
					<a className="button">Create a new snippet</a>
				</Link>
				<button type="button" className="button-inverse" onClick={signOut}>
					Sign Out
				</button>
				</>
			)}

			{!user && <Auth view={view} supabaseClient={supabase} />}
	  </Layout>
	);
};

export default Home;
