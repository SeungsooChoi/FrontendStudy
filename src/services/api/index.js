import * as auth from './auth';
import * as board from './board';
// 다른 API 모듈들 import...

export default {
  ...auth,
  ...board,
  // 다른 API 모듈들 spread...
};
