import App from './model/App';

import { AxcessController, Bitrix24Controller, ShopController } from './controller';
import { 
  axcessHook,
  shopHook,
  bitrix24Hook,
  // shopHookStage,
 } from './settings';

import InstructorsService from './service/Instructors';
import FormService from './service/Form/Form';

const app = new App();

const obAxcessController = new AxcessController(axcessHook, app);
const obShopController = new ShopController(shopHook, app);
const obBitrix24Controller = new Bitrix24Controller(bitrix24Hook, app);

const obInstructorsService = new InstructorsService(
  obAxcessController,
  obShopController,
);

const obFormService = new FormService(obBitrix24Controller, app);

console.log({ obFormService });

export {
  obInstructorsService,
  obFormService,
};
