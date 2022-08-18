import type { NextPage } from "next";
import { FormEvent, useRef } from "react";
import { supabase } from "../utils/supabaseClient";

const Upload: NextPage = () => {
	const titleRef = useRef<HTMLInputElement>(null);
	const codeBlockRef = useRef<HTMLTextAreaElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);

	async function handleCreateSnippet(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const { data, error } = await supabase.from("Snippet").insert({
			title: titleRef.current?.value,
			code_block: codeBlockRef.current?.value,
			description: descriptionRef.current?.value,
		});
	}

	return (
		<div className="h-screen flex justify-center items-center">
			<form onSubmit={handleCreateSnippet} className="flex flex-col gap-3 bg-white p-10 rounded-md shadow-md">
				<input ref={titleRef} placeholder="Add a title to your snippet" className="p-2 bg-gray-100 placeholder:text-gray-400" />
				<textarea ref={codeBlockRef} className="w-128 h-96 bg-gray-200" />
				<textarea ref={descriptionRef} placeholder="Add a description" className="h-max bg-gray-100 p-2 placeholder:text-gray-400" />
				<input type="submit" value="Post" className="bg-indigo-500 text-white p-2 rounded-md"></input>
			</form>
		</div>
	);
};

export default Upload;
