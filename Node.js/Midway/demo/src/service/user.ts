/**
 * Service
 * 一般来说会有一些业务逻辑被抽象到一个特定的逻辑单元中，我们一般称为服务（Service）。
 * 优点：
 * 1、保持 Controller 中的逻辑更加简洁。
 * 2、保持业务逻辑的独立性，抽象出来的 Service 可以被多个 Controller 重复调用。
 * 3、便于写测试用例
 */
import { Provide } from '@midwayjs/decorator';

@Provide()
export class UserService {
  async getUser(id: number) {
    return {
      id,
      username: 'mockedName',
      age: 18,
    };
  }
}
