import { root_url_prefix } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className='max-w-6xl px-6 m-auto h-content min-h-screen'>
            <h2 className='py-12 text-2xl font-bold'>Account Details</h2>
            <AccountDetailsTable />
            <div className="m-10 text-center">
                <Link href={root_url_prefix + "/"} className="px-6 py-3 bg-red-700 text-white text-xl text-center  hover:bg-red-500 rounded-lg">
                    Logout
                </Link>
            </div>
        </div>
    );
}

function AccountDetailsTable() {
    return (
        <table className="m-auto border-spacing-56">
            <tbody>
                {
                    accountDetails.map((entry, idx) => <tr className="group" key={idx}>
                        <th className="px-6 py-3">{entry[0]}</th>
                        <td className="px-6 py-3">{entry[1]}</td>
                        <td>
                            <picture>
                                <source srcSet={root_url_prefix + "/icons/edit_FILL0_wght400_GRAD0_opsz24_white.svg"} media="(prefers-color-scheme: dark)" />
                                <Image className="invisible group-hover:visible opacity-50 hover:opacity-100 inline p-1" src={root_url_prefix + "/icons/edit_FILL0_wght400_GRAD0_opsz24.svg"} height={30} width={30} alt="favorite" />
                            </picture>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    )
}

const accountDetails = [
    ['Name', 'Jyotiraditya Tiwary'],
    ['Username', "jyotiraditya"],
    ["Password", "**********"],
]
