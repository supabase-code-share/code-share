import { Auth } from "@supabase/ui";
import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import { useAuth } from "../lib/auth";
import { supabase } from "../utils/supabaseClient";

const LikedSnips: NextPage = () => {
	
	const { user, view } = useAuth();

	return (		
		<div>
			{user && typeof window !== "undefined" ? (
				<>
					<Header/>
						<h1 className="text-3xl text-center pt-6">Your liked Snippets</h1>
						<div>

						</div>
					<Footer/>
				</>
			) : (
				<Layout>
					{!user && <Auth view={view} supabaseClient={supabase} />}
				</Layout>
			)}
		
		</div>
	);
};

export default LikedSnips;
