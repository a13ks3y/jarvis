import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('.')
export class AppController {
  @Get('.')
  @Redirect('/jarvis/', 200)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  redirect() {}
}
