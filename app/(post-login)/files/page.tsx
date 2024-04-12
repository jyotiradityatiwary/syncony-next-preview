import { root_url_prefix, sampleFileList } from "@/app/constants";
import { FileEntry } from "@/app/services/files/classes";
import { fileTypeToIconUrlMap } from "@/app/services/files/functions";
import Image from "next/image";

export default function Home() {
  return (
    <div className='max-w-6xl px-6 m-auto h-content min-h-screen'>
      <h2 className='py-12 text-2xl font-bold'>Your files</h2>
      <FilesList />
    </div>
  );
}

function FilesList(): JSX.Element {
  return (
    <table className="m-auto border-spacing-56 w-full">
      <tbody>
        <tr>
          <th className="p-8 "> </th>
          <th className="p-8 "> </th>
          <th className="text-start p-8">Name</th>
          <th className="text-center p-8">Type</th>
          <th className="text-center p-8">Size</th>
          <th className="text-center p-8">Last Modified</th>
          <th className="p-8"> </th>
        </tr>
        {
          sampleFileList.map((entry: FileEntry, idx: number) =>
            <tr key={idx} className="group hover:bg-rose-200/40 dark:hover:bg-rose-500/25 rounded-md">
              <td className="p-2">
                <picture>
                  <source srcSet={root_url_prefix + "/icons/star_FILL0_wght400_GRAD0_opsz24_white.svg"} media="(prefers-color-scheme: dark)" />
                  <Image className="invisible group-hover:visible opacity-50 hover:opacity-100 inline" src={root_url_prefix + "/icons/star_FILL0_wght400_GRAD0_opsz24.svg"} height={30} width={30} alt="favorite" />
                </picture>
              </td>
              <td>
                <Image className="p-2"
                  src={fileTypeToIconUrlMap[entry.type]}
                  width={50}
                  height={50}
                  alt=""
                />
                {/* yo */}
              </td>
              <td className="text-start px-8 py-2">{entry.name}</td>
              <td className="text-center px-8 py-2">{entry.type}</td>
              <td className="text-center px-8 py-2">11 MB</td>
              <td className="text-center px-8 py-2">11th November 2011</td>
              <td className="p-2">
                <picture>
                  <source srcSet={root_url_prefix + "/icons/download_FILL0_wght400_GRAD0_opsz24_white.svg"} media="(prefers-color-scheme: dark)" />
                  <Image className="invisible group-hover:visible opacity-50 hover:opacity-100 inline" src={root_url_prefix + "/icons/download_FILL0_wght400_GRAD0_opsz24.svg"} height={30} width={30} alt="download" />
                </picture>
                <picture>
                  <source srcSet={root_url_prefix + "/icons/delete_FILL0_wght400_GRAD0_opsz24_white.svg"} media="(prefers-color-scheme: dark)" />
                  <Image className="invisible group-hover:visible opacity-50 hover:opacity-100 inline" src={root_url_prefix + "/icons/delete_FILL0_wght400_GRAD0_opsz24.svg"} height={30} width={30} alt="delete" />
                </picture>
              </td>
            </tr>)
        }
      </tbody>
    </table>
  );
}