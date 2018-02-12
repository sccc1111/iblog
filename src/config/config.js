import Env from './env';
import path from './path';

let config = {
    build: { 
        env: Env 
    },
    // dev 环境
    dev: { 
        env: Env, 
        port: 8088, 
        proxyTable: {}, 
    }
};
export default config;