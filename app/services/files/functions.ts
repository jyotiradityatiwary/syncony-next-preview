import { FileType } from "./classes";

// TODO: write a unit test to check if all these files
// exist in the public folder
export const fileTypeToIconUrlMap: { [fileType in FileType]: string; } = {
    [FileType.Folder]: "/icons/64x64/places/folder.svg",
    [FileType.Zip]: "/icons/64x64/mimetypes/application-x-compress.svg",
    [FileType.Document]: "/icons/64x64/mimetypes/x-office-document.svg",
    [FileType.Presentation]: "/icons/64x64/mimetypes/x-office-presentation.svg",
    [FileType.SpreadSheet]: "/icons/64x64/mimetypes/x-office-spreadsheet.svg",
    [FileType.Pdf]: "/icons/64x64/mimetypes/application-pdf.svg",
    [FileType.Audio]: "/icons/64x64/mimetypes/audio-x-generic.svg",
    [FileType.Video]: "/icons/64x64/mimetypes/video-x-generic.svg",
    [FileType.Image]: "/icons/64x64/mimetypes/image-x-generic.svg",
  };