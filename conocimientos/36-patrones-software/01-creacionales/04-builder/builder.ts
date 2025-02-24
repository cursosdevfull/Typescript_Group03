export class UploadOptionsBuilder {
    private files: File[] = [];
    private mimeTypesAllowed: string[] = [];
    private maxSize: number = 0;
    private isPublic: boolean = false;
    private hasCors: boolean = false;
    private hasAuthToUpload: boolean = false;
    private hasAuthToDelete: boolean = false;
    private hasAuthToShare: boolean = false;
    private hasAuthToUnshare: boolean = false;
    private hasAuthToCreateFolder: boolean = false;
    private hasAuthToDeleteFolder: boolean = false;
    private hasAuthToShareFolder: boolean = false;
    private hasAuthToEditFolder: boolean = false;
    private directory: string = '';

    addFiles(files: File[]): UploadOptionsBuilder {
        if (files.length === 0) throw new Error("No files to upload");
        this.files = files;
        return this;
    }

    addMimeTypesAllowed(mimeTypesAllowed: string[]): UploadOptionsBuilder {
        if (mimeTypesAllowed.length === 0) throw new Error("No mime types allowed");

        const mimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp', 'image/svg+xml', 'image/tiff', 'image/x-icon', 'image/vnd.microsoft.icon', 'image/vnd.wap.wbmp', 'image/x-xbitmap', 'image/x-jg', 'image/x-ms-bmp', 'image/x-bmp', 'image/x-win-bitmap', 'image/x-windows-bmp', 'image/x-ms-bmp', 'image/x-xbitmap', 'image/x-jg', 'image/x-emf', 'image/x-wmf', 'image/x-png', 'image/x-portable-bitmap', 'image/x-portable-graymap', 'image/x-portable-pixmap', 'image/x-xpixmap', 'image/x-xbitmap', 'image/x-xbm', 'image/x-xwd', 'image/x-rgb', 'image/x-tga', 'image/x-targa', 'image/x-tiff', 'image/x-jng', 'image/x-canon-crw', 'image/x-cmu-raster', 'image/x-cmx', 'image/x-icon', 'image/x-jg', 'image/x-ms-bmp', 'image/x-niff', 'image/x-pcx', 'image/x-portable-anymap', 'image/x-portable-bitmap', 'image/x-portable-graymap', 'image/x-portable-pixmap', 'image/x-quicktime', 'image/x-rgb', 'image/x-targa', 'image/x-tga', 'image/x-xbitmap', 'image/x-xbm', 'image/x-xpixmap', 'image/x-xwd', 'image/x-xwindowdump', 'image/x-jps', 'image/x-jpeg', 'image/x-jps', 'image/x-jutvision', 'image/x-kodak-dcr', 'image/x-kodak-k25', 'image/x-kodak-kdc', 'image/x-lwo', 'image/x-lwo', 'image/x-lws', 'image/x-macpaint', 'image/x-mrsid-image', 'image/x-nikon-nef', 'image/x-olympus-orf', 'image/x-panasonic-raw', 'image/x-panasonic-raw2', 'image/x-panasonic-raw3', 'image/x-pcx', 'image/x-photoshop']

        mimeTypesAllowed.forEach(mimeType => {
            if (!mimeTypes.includes(mimeType)) throw new Error("Mime type not allowed");
        });

        this.mimeTypesAllowed = mimeTypesAllowed
        return this;
    }

    addMaxSize(maxSize: number): UploadOptionsBuilder {
        if (maxSize <= 0) throw new Error("Max size must be greater than 0");
        this.maxSize = maxSize;
        return this;
    }

    addIsPublic(isPublic: boolean): UploadOptionsBuilder {
        this.isPublic = isPublic;
        return this;
    }

    addHasCors(hasCors: boolean): UploadOptionsBuilder {
        this.hasCors = hasCors;
        return this;
    }

    addHasAuthToUpload(hasAuthToUpload: boolean): UploadOptionsBuilder {
        this.hasAuthToUpload = hasAuthToUpload;
        return this;
    }

    addHasAuthToDelete(hasAuthToDelete: boolean): UploadOptionsBuilder {
        this.hasAuthToDelete = hasAuthToDelete;
        return this;
    }

    addHasAuthToShare(hasAuthToShare: boolean): UploadOptionsBuilder {
        this.hasAuthToShare = hasAuthToShare;
        return this;
    }

    addHasAuthToUnshare(hasAuthToUnshare: boolean): UploadOptionsBuilder {
        this.hasAuthToUnshare = hasAuthToUnshare;
        return this;
    }

    addHasAuthToCreateFolder(hasAuthToCreateFolder: boolean): UploadOptionsBuilder {
        this.hasAuthToCreateFolder = hasAuthToCreateFolder;
        return this;
    }

    addHasAuthToDeleteFolder(hasAuthToDeleteFolder: boolean): UploadOptionsBuilder {
        this.hasAuthToDeleteFolder = hasAuthToDeleteFolder;
        return this;
    }

    addHasAuthToShareFolder(hasAuthToShareFolder: boolean): UploadOptionsBuilder {
        this.hasAuthToShareFolder = hasAuthToShareFolder;
        return this;
    }

    addHasAuthToEditFolder(hasAuthToEditFolder: boolean): UploadOptionsBuilder {
        this.hasAuthToEditFolder = hasAuthToEditFolder;
        return this;
    }

    addDirectory(directory: string): UploadOptionsBuilder {
        this.directory = directory;
        return this;
    }

    build(): UploadOptions {
        return new UploadOptions(this);
    }
}

export class UploadOptions {
    private files: File[] = [];
    private mimeTypesAllowed: string[] = [];
    private maxSize: number = 0;
    private isPublic: boolean = false;
    private hasCors: boolean = false;
    private hasAuthToUpload: boolean = false;
    private hasAuthToDelete: boolean = false;
    private hasAuthToShare: boolean = false;
    private hasAuthToUnshare: boolean = false;
    private hasAuthToCreateFolder: boolean = false;
    private hasAuthToDeleteFolder: boolean = false;
    private hasAuthToShareFolder: boolean = false;
    private hasAuthToEditFolder: boolean = false;
    private directory: string = '';

    constructor(builder: UploadOptionsBuilder) {
        Object.assign(this, builder);
    }
}