export type Upload = {
    save(file: File): void
}

export class UploadAWS implements Upload {
    save(file: File) {
        this.setCredentials()
        console.log('Uploading to AWS', file)
    }

    setCredentials() {
        console.log('Setting credentials')
    }
}

export class UploadGoogle implements Upload {
    save(file: File) {
        console.log('Uploading to Google', file)
    }
}

export class UploadAzure implements Upload {
    save(file: File) {
        console.log('Uploading to Azure', file)
    }
}

export class UploadHardDisk implements Upload {
    save(file: File) {
        console.log('Uploading to hard disk', file)
    }
}

type DESTINATION = 'AWS' | 'GOOGLE' | 'AZURE' | 'HARD_DISK'

const classDestination: Record<DESTINATION, Upload> = {
    AWS: new UploadAWS(),
    GOOGLE: new UploadGoogle(),
    AZURE: new UploadAzure(),
    HARD_DISK: new UploadHardDisk()
}

export function selectDestination(destination: DESTINATION): Upload {
    return classDestination[destination]
}