import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {

    const router = useRouter();
    const path = router.pathname;
    return (
        <div className="w-full h-12 bg-emerald-400 rounded-sm flex flex-row items-center justify-center fixed top-0">
            <Link href={'/'} className='flex flex-row justify-center items-center m-4'>
                <svg className="w-6 h-6" fill="none" stroke={(path === '/' ? 'white' : 'black')} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                </svg>
                <span>Home</span>
            </Link>
            <Link href={'/checkout'} className='flex flex-row justify-center items-center m-4'>
                <svg className="w-6 h-6" fill="none" stroke={(path === '/checkout' ? 'white' : 'black')} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                    </path>
                </svg>
                <span>Cart 0</span>
            </Link>
        </div>
    )
}

export default Navigation;