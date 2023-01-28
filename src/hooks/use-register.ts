import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRegisterUserMutation } from "../slices/authentication/login-api";
import { useMounted } from './use-mounted';

const UseRegister = () => {
    const isMounted = useMounted();
    const router = useRouter();
    const [showError, setShowError] = useState(false);

    const [
        registerUser,
        {
            isSuccess: isRegisterSuccess,
            error: registerError,
            isError: isRegisterError,
            isLoading: isRegisterLoading,
            data: registerResponse,
        },
    ] = useRegisterUserMutation();


    useEffect(() => {
        if (isRegisterSuccess && registerResponse !== undefined) {
            if (isMounted()) {
                router.replace('/');
            }
        }
    }, [isRegisterSuccess]);

    useEffect(() => {

        if (isRegisterError) {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
            return;
        }
    }, [isRegisterError]);


    return { registerUser, registerError, isRegisterError, isRegisterLoading, registerResponse, isRegisterSuccess,showError };

}

export default UseRegister
function useRegisterMutation(): [any, { isSuccess: any; error: any; isError: any; isLoading: any; data: any; }] {
    throw new Error("Function not implemented.");
}

