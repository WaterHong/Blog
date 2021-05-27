import { Controller, Get, Provide, Query, SetHeader, ContentType, Inject } from "@midwayjs/decorator";
import { UserService } from "../service/user";


@Provide()
@Controller("/api/user")
export class UserController {
    /**
     * 返回可以是一个html页面
     */
    @Get('/login')
    @ContentType('html')
    @SetHeader({
        'x-bbb': '123',
        'x-ccc': '234'
        })
    async login() {
        return '<body>hello world</body>';
    }

    /**
     * 引用service
     * 使用服务的过程分为几部分：
     * 1、使用 @Provide 装饰器暴露你的服务
     * 2、在调用的代码处，使用 @Inject 装饰器注入你的服务
     * 3、调用注入服务，执行对应的方法
     */
    @Inject()
    UserService: UserService;

    @Get('/')
    async getUser(@Query('id') id) {
        console.log("mark id:", id);
        const user = await this.UserService.getUser(id);
        return {
            code: 0,
            message: "ok",
            data: user
        }
    }

}