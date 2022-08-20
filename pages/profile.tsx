import Link from 'next/link';
import Layout from '../components/Layout';
import { supabase } from "../utils/supabaseClient";

export default function Profile({ user }) {
  return (
    <Layout>
        <p className="my-4 text-lg">Email: <span className='font-bold'>{user.email}</span></p>
        <p className="my-4 text-lg">
            Last Signed In: 
            <span className="pl-2 font-bold">
            {new Date(user.last_sign_in_at).toLocaleString()}
            </span>
        </p>
        <div className="inline-flex flex-col">
            <Link href="/">
            <a className="button mt-8">Go Home</a>
            </Link>
        </div>
    </Layout>
  );
}


export async function getServerSideProps({ req, res }) {
    const { user } = await supabase.auth.api.getUserByCookie(req);
  
    if (!user) {
      console.log('Please login.');
      return { props: {}, redirect: { destination: '/', permanent: false } };
    }
  
    return { props: { user } };
  }