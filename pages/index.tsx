import { Auth } from "@supabase/ui";
import { GetStaticProps, NextPage } from "next";
import Image from 'next/image';
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import { useAuth } from "../lib/auth";
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
	const [like, setLike] = useState(false)
	const [dislike, setdilike] = useState(false)

	// let readSnippet = async (_snippet_id) => {	

	// 	let { data, error } = await supabase
	// 									.from('like')
	// 									.select('*')
	// 									.eq('snippet_id', _snippet_id)


	// 	return data;

	// }


	// let likeSnippet = async (_snippet_id) => {

	// 	let checkIfTheyLiked = await readSnippet(_snippet_id)

	// 	setLike(!like)

	// 	if (checkIfTheyLiked?.length === 0){
	// 		const { data, error } = await supabase.from("like").insert({
	// 			snippet_id: _snippet_id,
	// 			user_id: user.id
	// 		});
	// 	} 
	// }


	let handleLike = () => {
		setLike()
	}

	return (
		<div>
			{user ? (
				<>
					<Header/>
						<div className="p-10 grid grid-cols-2 gap-16 gap-x-16">
							{snippets?.map((snippet) => (
								<div className="flex flex-col bg-gray-100 w-max p-5 relative" key={snippet.id}>
									<span className="text-center text-lg">{snippet.title}</span>
									<code className="bg-gray-400 w-128 text-white p-4 rounded-md">{snippet.code_block}</code>
									{snippet.description && <span>{snippet.description}</span>}	
									
									{/* https://icons.getbootstrap.com/icons/check-circle/ */}
									<div className="absolute bottom-0 right-0" >
										<button type="button" onClick={() => handleLike} id={"snippet" + snippet.id} disabled={like}>
											<Image src={CheckMark} width='27' height='27'/>
										</button>										
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
	const query = await supabase.from<Snippet>("snippet").select();
	const snippets = query.data;

	return {
		props: {
			snippets,
		},
	};
};

export default IndexPage;