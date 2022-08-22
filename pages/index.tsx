import type { InferGetStaticPropsType, NextPage } from "next";
import { supabase } from "utils/supabase";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ snippets }) => {
	console.log(snippets);

	return (
		<>
			{snippets?.map((snippet) => (
				<div key={snippet.id}>{snippet.code_block}</div>
			))}
		</>
	);
};

export const getStaticProps = async () => {
	const { data, error } = await supabase.from("snippets").select();

	console.log(data);
	console.log(error);

	const snippets = data!;

	return {
		props: {
			snippets,
		},
	};
};

export default Home;
