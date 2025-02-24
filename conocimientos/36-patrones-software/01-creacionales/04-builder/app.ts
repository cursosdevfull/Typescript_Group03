import { UploadOptions, UploadOptionsBuilder } from './builder';

const uploadOptions: UploadOptions = new UploadOptionsBuilder()
    .addFiles([new File([''], 'file.jpg')])
    .addMimeTypesAllowed(['image/jpeg'])
    .addMaxSize(1024)
    .addIsPublic(true)
    .addHasCors(true)
    .addHasAuthToUpload(true)
    .addHasAuthToDelete(true)
    .addHasAuthToShare(true)
    .addHasAuthToUnshare(true)
    .addHasAuthToCreateFolder(true)
    .addHasAuthToDeleteFolder(true)
    .addHasAuthToShareFolder(true)
    .addHasAuthToEditFolder(true)
    .addDirectory('my-directory')
    .build();

console.log(uploadOptions);
