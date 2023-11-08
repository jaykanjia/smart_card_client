import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import style from './style.module.css';

const links = [
    {
        title: 'get started',
        url: '/login',
        description: 'get started by Create your own personalized card',
    },
    {
        title: 'why?',
        url: '/features',
        description:
            "why to use our service?, what we provide and it's features",
    },
    {
        title: 'about',
        url: '/about',
        description: 'about SmartBizCard',
    },
    {
        title: 'download app',
        url: '/',
        description: 'Comming Soon!',
    },
];

export default function Home() {
    return (
        <div className="flex gap-8 min-h-screen flex-col items-center justify-between p-24">
            <Header />

            <main className="relative min-h-[300px] flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <div
                    className={`${style.cardWrapper} relative max-w-md w-[90vw] aspect-[7/4] rounded-2xl`}
                >
                    <div
                        className={`${style.cardFront} relative gap-8 w-full h-full border transition-colors border-gray-300  dark:border-neutral-700 dark:bg-neutral-950/90 rounded-2xl overflow-hidden`}
                    >
                        <Image
                            className="object-cover dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                            src="/images/dummyCard.png"
                            alt="smart card image"
                            fill
                            size="100vw"
                            priority
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full -z-10">
                        <div
                            className={`${style.cardBack} relative  gap-8 w-full h-full border transition-colors border-gray-300 dark:border-neutral-700 dark:bg-neutral-950/90 rounded-2xl overflow-hidden`}
                        >
                            <Image
                                className="object-cover dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src="/images/dummyCardBack.png"
                                alt="smart card image"
                                fill
                                size="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </main>
            <div className="grid text-center md:text-left mb-16 lg:mb-0 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-0">
                {links?.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={item.url}
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            <h2 className="mb-3 text-2xl font-semibold capitalize flex gap-2 items-center justify-center md:justify-start">
                                <span>{item.title}</span>
                                <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </span>
                            </h2>
                            <p className="m-0 max-w-[30ch] text-sm opacity-50 capitalize">
                                {item.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
