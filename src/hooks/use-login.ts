import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../slices/authentication/login-api";
import { useMounted } from './use-mounted';
import Cookies from 'js-cookie';
import { useAuth } from "./use-auth";

const UseLogin = () => {
    const isMounted = useMounted();
    const router = useRouter();
    const [showError, setShowError] = useState(false);
    const { basicLogin } = useAuth();

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
            basicLogin(LoginResponse.token.accessToken);
            
            if (isMounted()) {
                router.replace('/home');
            }
        }
    }, [isLoginSuccess]);

    useEffect(() => {

        if (isLoginError) {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
            return;
        }
    }, [isLoginError]);


    return { login, loginError, isLoginError, isLoginLoading, LoginResponse, isLoginSuccess,showError };

}

export default UseLogin
