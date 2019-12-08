# admin

## 有用的知识

- 视频, 图片资源的方式
  + `import img from 'img的地址'`
  + 资源放到 public, 通过`./img地址`引入
- react class 组件 函数的摆放位置
  +  state
  +  自定义函数
  +  computedData
  +  生命周期
  +  render
- 统一处理错误
  + api/ajax.ts
    ```
    import axios from 'axios';
    import { message } from 'antd';

    const CODE_MAP: {[key: number]: string} = {
      404: '请求地址错误',
    };

    export const req: (method: string, url: string, data: any)=>Promise<any> = (method, url, data)=>{
      return new Promise((resolve)=>{
        let promise;
        if(method === 'get'){
          promise = axios({
            method: 'get',
            url: url,
            params: data,
          });
        } else {
          promise =  axios({
            method: 'post',
            url: url,
            data: data,
          });
        }
        promise.then((response)=>{
          resolve(response.data);
        }).catch((error)=>{
          message.error(`${CODE_MAP[error.response.status]}`)
        });
      });

    };
    ```
  + api/index.ts
    ```
    import {req} from './ajax';
    import jsonp from 'jsonp';
    import {message} from 'antd';

    export const reqCategoryList = (parentId: string)=>req('get', '/manage/category/list', {parentId});

    ```
  + 使用
    `const result = await reqCategoryList(this.state.selectCategoryKey);`

 
 
