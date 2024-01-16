import App from './model/App';

import { AxcessController, ShopController } from './controller';
import { axcessHook, shopHook } from './settings';

import InstructorsService from './service/Instructors';

const app = new App();

const obAxcessController = new AxcessController(axcessHook, app);
const obShopController = new ShopController(shopHook, app);

console.log({ 
  obAxcessController,
  obShopController,
});

const obInstructorsService = new InstructorsService(
  obAxcessController,
  obShopController,
);

export {
  obInstructorsService,
};
