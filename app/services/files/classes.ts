export interface FileEntry {
    name: string,
    type: FileType,
    sizeInBytes: number,
}

export enum FileType {
    Folder = "Folder",
    Zip = "Zip",
    Document = "Word Document",
    Presentation = "Presentation",
    SpreadSheet = "Spreadsheet",
    Pdf = "PDF",
    Audio = "Audio",
    Video = "Video",
    Image = "Image",
}