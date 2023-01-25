import { useEffect } from "react";
import { useLoginMutation } from "../slices/authentication/login-api";
import { useMounted } from './use-mounted';

const UseLogin = () => {
    const isMounted = useMounted();

    const [
        login,
        {
            isSuccess: isLoginSuccess,
            error: loginError,
            isError: isLoginError,
            isLoading: isLoginLoading,
            data: LoginResponse,
        },
    ] = useLoginMutation();


    useEffect(() => {
        if (isLoginSuccess && LoginResponse !== undefined) {
            localStorage.setItem('accessToken', LoginResponse.data.token.accessToken);
           
            if (isMounted()) {
                //redirect
            }
        }
    }, [isLoginSuccess]);


    return { login, loginError, isLoginError, isLoginLoading, LoginResponse, isLoginSuccess };

}

export default UseLogin
