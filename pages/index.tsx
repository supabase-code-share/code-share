import { Auth } from "@supabase/ui";
import { GetStaticProps, NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import { useAuth } from "../lib/auth";
import { supabase } from "../utils/supabaseClient";

type Snippet = {
	id: number;
	title: string;
	code_block: string;
	description: string;
	user_id: string;
};

type props = {
	snippets: Snippet[] | null;
};

const IndexPage: NextPage<props> = (props) => {
	const { snippets } = props;
	const { user, view } = useAuth();

	return (
		<div>
			{user ? (
				<>
					<Header/>
						<div className="p-10 flex gap-3">
							{snippets?.map((snippet) => (
								<div className="flex flex-col bg-gray-100 w-max p-4" key={snippet.id}>
									<span className="text-center text-lg">{snippet.title}</span>
									<code className="bg-gray-400 w-128 text-white p-4 rounded-md">{snippet.code_block}</code>
									{snippet.description && <span>{snippet.description}</span>}
								</div>
							))}
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

export const getStaticProps: GetStaticProps<props> = async (context) => {
	const query = await supabase.from<Snippet>("Snippet").select();
	const snippets = query.data;

	return {
		props: {
			snippets,
		},
	};
};

export default IndexPage;
