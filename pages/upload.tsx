import { Auth } from "@supabase/ui";
import type { NextPage } from "next";
import router from "next/router";
import { FormEvent, useRef } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/Layout";
import { useAuth } from "../lib/auth";
import { supabase } from "../utils/supabaseClient";

const UploadPage: NextPage = () => {
	
	const { user, view } = useAuth();

	const titleRef = useRef<HTMLInputElement>(null);
	const codeBlockRef = useRef<HTMLTextAreaElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	

	async function handleCreateSnippet(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const { data, error } = await supabase.from("Snippet").insert({
			title: titleRef.current?.value,
			code_block: codeBlockRef.current?.value,
			description: descriptionRef.current?.value,
			user_id: user.id,
		});

		if (error === null) router.push(`/auth/?message=successfully created snipppet`);
	}

	return (		
		<div>
			{user && typeof window !== "undefined" ? (
				<>
					<Header/>
						<h1 className="text-3xl text-center pt-6">Create A Snippet</h1>
						<div className="h-screen flex justify-center items-center" id='create-snippet-div'>
							<form onSubmit={handleCreateSnippet} className="flex flex-col gap-3 bg-slate-300 p-10 rounded-md shadow-md">
								<input ref={titleRef} placeholder="Add a title to your snippet" className="p-2 bg-gray-100 placeholder:text-gray-400" required />
								<textarea ref={codeBlockRef} placeholder="Add your code..." className="w-128 h-48 bg-gray-200 p-2" required />
								<textarea ref={descriptionRef} placeholder="Add a description" className="h-max bg-gray-100 p-2 placeholder:text-gray-400" required />
								<input type="submit" value="Post" className="bg-indigo-500 text-white p-2 rounded-md"></input>
							</form>
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

export default UploadPage;
