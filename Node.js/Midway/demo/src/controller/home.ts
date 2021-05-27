import { Controller, Get, Post, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  @Get('/home')
  async home() {
    return 'Hello HONG!';
  }

  @Post('/update')
  async updateData() {
    return 'This is a post method'
  }
}
