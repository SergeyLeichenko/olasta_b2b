import instance from "./instance";

import authModule from "./auth";
import detailProductModule from "./product_datail";

export default {
  auth: authModule(instance),
  detail: detailProductModule(instance),
};
