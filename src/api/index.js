import ajax from "./axios";

// import jsonp from "jsonp";

// import { message } from "antd";

const BASE = "";

 /**
  * 查找分类
  * @param parentId
  */

 export const getCategory = (parentId) => ajax(BASE + "/api/book/bookCategory/cateList",{parentId})
