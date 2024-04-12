import { FileEntry, FileType } from "./services/files/classes";

export const root_url_prefix: string = '';

export const sampleFileList: FileEntry[] = [
    { name: 'Documents', type: FileType.Folder, sizeInBytes: 8000 },
    { name: 'Music', type: FileType.Folder, sizeInBytes: 8000 },
    { name: 'My Pictures', type: FileType.Folder, sizeInBytes: 8000 },
    { name: 'Projects', type: FileType.Folder, sizeInBytes: 8000 },
    { name: 'Presentation.pptx', type: FileType.Presentation, sizeInBytes: 8000 },
    { name: 'Letter.docx', type: FileType.Document, sizeInBytes: 8000 },
    { name: 'Book.pdf', type: FileType.Pdf, sizeInBytes: 8000 },
    { name: 'Table.xlsx', type: FileType.SpreadSheet, sizeInBytes: 8000 },
    { name: 'Over the Horizon.mp3', type: FileType.Audio, sizeInBytes: 8000 },
    { name: 'Funny Meme.mp4', type: FileType.Video, sizeInBytes: 8000 },
    { name: 'Screenshot.png', type: FileType.Image, sizeInBytes: 8000 },
    { name: 'Top Secret', type: FileType.Folder, sizeInBytes: 8000 },
    { name: 'Documents.zip', type: FileType.Zip, sizeInBytes: 8000 },
];