import Link from "next/link";
import RegisterSubmitButton from "./RegisterSubmitButton";

export default function Page() {
    return (
        <main
            className="flex h-content min-h-screen w-content min-w-screen flex-col
                items-center justify-evenly p-2 bg-cloud
                dark:bg-cloud-dark bg-fixed bg-bottom bg-cover"
        >
            <form
                className="backdrop-blur-lg bg-white/50 dark:bg-stone-800/50 rounded-cm-lg
                    flex flex-col items-center justify-evenly w-96 min-h-96 w-content p-2"
            >
                <h1 className="text-4xl">
                    Register
                </h1>
                {/* <p className="text-center text-red-600 dark:text-red-300">
                    ** New registrations are currently disabled by the administrator **
                </p> */}
                <input
                    className="px-6 py-3 bg-white/50 dark:bg-black/25 rounded-cm-lg
                        focus:shadow-[0_0_5px_1px] focus:shadow-violet-950
                        dark:focus:shadow-violet-600
                        focus:outline-none
                        transition-all duration-500
                        hover:bg-white
                        dark:hover:bg-black
                        disabled:bg-gray-300/50 disabled:hover:bg-gray-300/50
                        disabled:dark:bg-gray-600/50 disabled:hover:dark:bg-gray-600/50"
                    type="text"
                    placeholder="Username"
                    // disabled
                />
                <input
                    className="px-6 py-3 bg-white/50 dark:bg-black/25 rounded-cm-lg
                        focus:shadow-[0_0_5px_1px] focus:shadow-violet-950
                        dark:focus:shadow-violet-600
                        focus:outline-none
                        transition-all duration-500
                        hover:bg-white
                        dark:hover:bg-black
                        disabled:bg-gray-300/50 disabled:hover:bg-gray-300/50
                        disabled:dark:bg-gray-600/50 disabled:hover:dark:bg-gray-600/50"
                    type="password"
                    placeholder="Password"
                    // disabled
                />
                <RegisterSubmitButton disabled={false} />
                <div className="flex flex-col justify-evenly items-center">
                    <Link
                        className="trasition-all duration-500 text-sm opacity-60 hover:opacity-90"
                        href="/login"
                    >
                        Login with existing acount
                    </Link>
                    <Link
                        className="trasition-all duration-500 text-sm opacity-60 hover:opacity-90"
                        href="/reset-password"
                    >
                        Reset password
                    </Link>
                    <Link
                        className="trasition-all duration-500 text-sm opacity-60 hover:opacity-90"
                        href="/"
                    >
                        Back home
                    </Link>
                </div>
            </form>

        </main>
    )
}