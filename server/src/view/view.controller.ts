import { Controller, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('view')
export class ViewController {
  @Put('captureOnce')
  @UseInterceptors(FileInterceptor('file'))
  captureOnce(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
