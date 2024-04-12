'use client'

import { root_url_prefix } from "../constants";
import Image from "next/image";

export default function UploadFileButton(): JSX.Element {
    return <>
        <input id="uploadFileButtonAuxInput" type="file" className="collapse" />

        <button onClick={() => { document.getElementById('uploadFileButtonAuxInput')?.click(); }} className="px-6 py-2 text-center bg-rose-400/60 hover:bg-rose-500 rounded-lg">
            <Image src={root_url_prefix + "/icons/cloud_upload_FILL0_wght400_GRAD0_opsz24_white.svg"} width={40} height={40} alt="" className="inline p-2" />
            Upload File
        </button>
    </>;
}