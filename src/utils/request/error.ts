import { ElMessage } from 'element-plus'

import router from "@/router"
function showErrorInfo(status: number): void {
    switch (status) {
        case 400: {
            ElMessage.error('请求失败(400)');
            break;
        }

        case 401: {
            ElMessage.error('身份认证失败（401）');
            setTimeout(() => {
                router.replace("/login")
                localStorage.clear()
            }, 1000);
            break;
        }

        case 404: {
            ElMessage({
                showClose: true,
                message: '请求地址不存在（404）',
                center: true,
                type:"error"
              })
            setTimeout(() => {
                router.replace("/login")
            }, 1000);
            break;
        }

        case 500: {

            ElMessage({
                showClose: true,
                message: '服务器发生了未知错误, 请联系管理员（500）',
                center: true,
                type:"error"
              })
            break;
        }

        default: {
            ElMessage.error('请求失败, 请稍后重试.');
        }
    }
}

export default showErrorInfo;