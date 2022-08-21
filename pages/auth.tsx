import { Auth } from "@supabase/ui";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useAuth, VIEWS } from "../lib/auth";
import { supabase } from "../utils/supabaseClient";

const AuthPage: NextPage = () => {
	const { user, view, signOut } = useAuth();

	const router = useRouter();

	const { message } = router.query;
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
					{message !== "" && (
						<div className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700" role="alert">
							{message}
						</div>
					)}
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

export default AuthPage;
