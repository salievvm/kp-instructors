/* eslint-disable */

import axios from 'axios';

class ShopController {

  constructor(
    hook,
    app,
  ) {
    this.hook = hook;
    this.obApp = app;
  }

  get = async (method, id) => {
    try {
      const response = await axios.get(
        `${this.hook}${method}/${id}`
      );

      const data = response.data;

      console.log('shop controller', { data });

      if (data.error) {
        throw new Error({ response });
      } else {
        return data;
      }
    } catch (err) {
      console.log({ err });

      this.obApp.setError(`Возникла ошибка, обновите страницу и попробуйте ещё раз.`);

      return err;
    }
  }
}

export default ShopController;