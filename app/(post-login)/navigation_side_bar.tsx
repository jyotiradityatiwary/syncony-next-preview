import { root_url_prefix } from "../constants";
import NavigationSideBarLink from "./navigation_side_bar_link";
import localFont from 'next/font/local'
import UploadFileButton from "./UploadFileButton";

const madimi = localFont({src : '../MadimiOne-Regular.ttf'});

export default function NavigationSideBar(): JSX.Element {
    return (
        <nav className="w-1/5 min-w-60 h-screen bg-black/90 text-white flex flex-col items-center p-6 space-y-2 overflow-y-auto overflow-x-visible">
            <h1 className={`${madimi.className} text-3xl text-center p-6`}>Syncony</h1>
            <UploadFileButton />
            <div className="flex-1"></div>
            <NavigationSideBarLink
                label="Dashboard"
                iconSrc= {root_url_prefix+"/icons/dashboard_FILL0_wght400_GRAD0_opsz24_white.svg"}
                selected={true}
                href={root_url_prefix + "/dashboard"}
            />
            <NavigationSideBarLink
                label="Files"
                iconSrc={root_url_prefix + "/icons/folder_FILL0_wght400_GRAD0_opsz24_white.svg"}
                selected={true}
                href={root_url_prefix + "/files"}
            />
            <NavigationSideBarLink
                label="Favorites"
                iconSrc={root_url_prefix + "/icons/favorite_FILL0_wght400_GRAD0_opsz24_white.svg"}
                selected={true}
                href={root_url_prefix + "/favorites"}
            />
            <NavigationSideBarLink
                label="Deleted"
                iconSrc={root_url_prefix + "/icons/delete_FILL0_wght400_GRAD0_opsz24_white.svg"}
                selected={true}
                href={root_url_prefix + "/deleted"}
            />
            <div className="flex-1"></div>
            <NavigationSideBarLink
                label="Account"
                iconSrc={root_url_prefix + "/icons/person_FILL0_wght400_GRAD0_opsz24_white.svg"}
                selected={true}
                href={root_url_prefix + "/account"}
            />
        </nav>
    );
}

