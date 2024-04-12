'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

export default function NavigationSideBarLink({ label, iconSrc, selected, href }: {
    label: string, iconSrc: string, selected: boolean, href: string,
}): JSX.Element {
    return (
        <Link href={href} className={"bg-gray w-full p-2 rounded-xl max-w-64 " +
            (href === usePathname() ? "bg-fuchsia-900/75 " : "hover:bg-fuchsia-500/25 ")
        }>
            <Image src={iconSrc} alt="" className="inline p-2" width={40} height={40} />
            {/* For dynamically changing icon in dark and light mode: */}
            {/* <picture>
                <source srcSet="/icons/dashboard_FILL0_wght400_GRAD0_opsz24_white.svg" media="(prefers-color-scheme: dark)" />
                <img src="/icons/dashboard_FILL0_wght400_GRAD0_opsz24.svg" />
            </picture> */}
            {label}
        </Link>
    );
}
