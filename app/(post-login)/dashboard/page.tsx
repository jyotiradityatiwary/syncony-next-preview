import { root_url_prefix, sampleFileList } from '@/app/constants';
import { FileEntry } from '@/app/services/files/classes';
import { fileTypeToIconUrlMap } from '@/app/services/files/functions';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='max-w-6xl px-6 m-auto h-content min-h-screen'>
      <p className='text-xl py-16 text-center' >
        Welcome back Jyotir!
      </p>
      <h2 className='py-6 text-2xl font-bold'>Your files</h2>
      <FilesPreviewGrid />
    </div>
  );
}

function FilesPreviewGrid(): JSX.Element {
  const limit: number = 5 * 2 - 1;

  return <div className='w-full p-6 flex flex-row flex-wrap justify-center'>
    {
      sampleFileList.slice(0, limit).map((fileEntry, idx) =>
        <FilesGridEntry key={idx} file={fileEntry} />)
    }
    {sampleFileList.length > limit && <FilesGridEntryViewAll />}
  </div>
}

function FilesGridEntry({ file }: {
  file: FileEntry,
}): JSX.Element {
  return <div className='w-44 hover:bg-rose-200/40 dark:hover:bg-rose-500/25 p-3 m-2 rounded-lg'>
    <Image src={fileTypeToIconUrlMap[file.type]} alt='' width={80} height={80}
      className='m-auto' />
    <p className='text-center p-2 text-ellipsis overflow-hidden' >{file.name}</p>
  </div>;
}

function FilesGridEntryViewAll(): JSX.Element {
  return <Link href={root_url_prefix + "/files"} className='w-44 p-3 m-2 rounded-lg opacity-50 hover:opacity-100'>
    <picture>
      <source srcSet={root_url_prefix + '/icons/expand_circle_right_FILL0_wght400_GRAD0_opsz24_white.svg'} media='(prefers-color-scheme: dark)' />
      <Image src={root_url_prefix + '/icons/expand_circle_right_FILL0_wght400_GRAD0_opsz24.svg'}
        alt='' width={80} height={80} className='m-auto p-4' />
    </picture>
    <p className='text-center p-2' >View All</p>
  </Link>;
}
