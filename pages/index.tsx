import { Auth } from "@supabase/ui";
import { GetStaticProps, NextPage } from "next";
import Image from 'next/image';
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import { useAuth } from "../lib/auth";
import Comment from '../public/comment.svg';
import CheckMark from '../public/like.svg';
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
						<div className="p-10 grid grid-cols-2 gap-15">
							{snippets?.map((snippet) => (
								<div className="flex flex-col bg-gray-100 w-max p-5 relative" key={snippet.id}>
									<span className="text-center text-lg">{snippet.title}</span>
									<code className="bg-gray-400 w-128 text-white p-4 rounded-md">{snippet.code_block}</code>
									{snippet.description && <span>{snippet.description}</span>}

									{/* https://icons.getbootstrap.com/icons/chat-right-text/ */}
									<div className="absolute -bottom-1 right-0">
										<Image src={Comment} width='30' height='30'/>
									</div>		
									
									{/* https://icons.getbootstrap.com/icons/check-circle/ */}
									<div className="absolute bottom-0 right-9">
										<Image src={CheckMark} width='27' height='27'/>
									</div>					
				
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
