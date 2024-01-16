/* eslint-disable */

import axios from 'axios';

class AxcessController {

  constructor(
    hook,
    app,
  ) {
    this.hook = hook;
    this.obApp = app;
  }

  get = async (params) => {
    try {
      const _params = this.HTTPBuild(params);
      console.log(`${this.hook}${_params}`);
      const response = await axios.get(`${this.hook}?${_params}`);

      const data = response.data;

      console.log('axcess controller', { data });

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

  HTTPBuild = (obj, prefix) => {
    const params = [];

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const paramKey = prefix ? `${prefix}[${key}]` : key;

        if (typeof value === 'object') {
          params.push(this.HTTPBuild(value, paramKey));
        } else {
          params.push(paramKey + '=' + value);
        }
      }
    }

    return params.join('&');
  }
}

export default AxcessController;