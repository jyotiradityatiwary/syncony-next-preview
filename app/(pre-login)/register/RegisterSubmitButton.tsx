'use client'

import { root_url_prefix } from "@/app/constants";
import { useRouter } from "next/navigation";

export default function RegisterSubmitButton({disabled} : {
    disabled: boolean
}): JSX.Element {
    const router = useRouter();
    return (
        <input
            className="px-6 py-3 rounded-cm-lg bg-violet-200/50 dark:bg-violet-950/50 shadow-lg
                focus:shadow-[0_0_5px_1px] focus:shadow-violet-950 dark:focus:shadow-violet-600
                focus:outline-none focus:transition-all
                hover:transition-all hover:duration-500 hover:shadow-[0_0_8px_2px]
                hover:shadow-violet-950/50 hover:bg-violet-950/50 hover:text-white
                dark:hover:shadow-violet-200/50 dark:hover:bg-violet-200/50 dark:hover:text-black
                disabled:bg-gray-300/50 disabled:text-gray-600 disabled:shadow-none disabled:hover:shadow-none
                disabled:hover:text-gray-600 disabled:hover:bg-gray-300/50
                dark:disabled:bg-gray-600/50 dark:disabled:text-gray-200 dark:disabled:hover:text-gray-200
                dark:disabled:hover:bg-gray-600/50"
            type="submit"
            value="Submit"
            disabled={disabled}
            onClick={(event) => {
                event.preventDefault();
                router.push(root_url_prefix + "/dashboard");
            }}
        />
    );
}