import Layout from "components/Layout";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { supabase } from "utils/supabase";

const SignUpElements = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	async function handleSignUp() {
		setLoading(true);

		const response = await fetch("/api/signup", {
			method: "POST",
			body: JSON.stringify({
				email: emailRef.current?.value,
				username: usernameRef.current?.value,
				password: passwordRef.current?.value,
			}),
		});

		const json = await response.json();
		const { error, user } = json;

		if (error) {
			setErrorMessage(error);
		}

		if (user) {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: emailRef.current?.value ?? "",
				password: passwordRef.current?.value ?? "",
			});

			console.log(data);
			console.log(error);

			// router.push("/");
		}

		setLoading(false);
	}

	return (
		<>
			{errorMessage && (
				<div className="rounded-sm bg-red-50 p-2 text-center text-sm">
					<span className="text-red-600">{errorMessage}</span>
				</div>
			)}
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="required text-gray-400">
					Email
				</label>
				<input ref={emailRef} id="email" type="email" className="bg-gray-100 p-2 text-black" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="username" className="required text-gray-400">
					Username
				</label>
				<input ref={usernameRef} id="username" type="text" className="bg-gray-100 p-2 text-black" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="password" className="required text-gray-400">
					Password
				</label>
				<input ref={passwordRef} id="password" type="password" className="bg-gray-100 p-2 text-black" />
			</div>
			<button onClick={handleSignUp} disabled={loading} className={`w-full rounded-md py-2 text-white ${loading ? "bg-indigo-400" : "bg-indigo-500"}`}>
				Sign Up
			</button>
		</>
	);
};

const Login: NextPage = () => {
	return (
		<Layout>
			<div className="flex flex-1 items-center justify-center">
				<div className="rounded-md bg-white p-10 shadow-sm">
					<div className="flex w-96 flex-col gap-8">
						<div className="flex flex-col gap-2 text-center">
							<h1 className="text-5xl font-bold text-black sm:text-3xl">Code Share</h1>
							<span className="text-gray-400">Create an account to continue</span>
						</div>
						<SignUpElements></SignUpElements>
						<span className="text-center text-sm text-gray-400">
							Already have an account?{" "}
							<Link href="/login">
								<a className="text-indigo-400">Login!</a>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
