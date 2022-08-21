import { Auth } from "@supabase/ui";
import type { NextPage } from "next";
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
					{router.push(`/index`)}
				</>
			)}

			{!user && <Auth view={view} supabaseClient={supabase} />}
		</Layout>
	);
};

export default AuthPage;
