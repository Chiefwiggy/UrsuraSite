import LogLayout from '../layouts/LogLayout';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import LOGIN_USER from '../queries/LOGIN_USER';
import {useEffect} from 'react'
import useUser from '../../../shared/hooks/user-hook/useUser';
import { useNavigate } from 'react-router-dom';
import LogInput from '../components/LogInput';
import LogButton from '../components/LogButton';
import '../styles/LogStyles.scss'

const LoginPage = () => {

    const [submitLogin, { data: user_data }] = useMutation(LOGIN_USER);
    const {LoginUser, loggedIn} = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if(user_data) {
            LoginUser(user_data.auth.SignInUser);
        }
    }, [user_data])

    useEffect(() => {
        if (loggedIn) {
            navigate('/')
        }
    }, [loggedIn]);
    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (data) => {
            let errors = {};

            if (data.email.length === 0) {
                errors.email = "Please enter your email."
            } 
            else if (!data.email.includes("@")) {
                errors.email = "Please enter a valid email"
            }

            if (data.password.length < 8) {
                errors.password = "Invalid Password"
            }


            return errors;
        },
        onSubmit: (data) => {
            submitLogin({
                variables: {
                    email: data.email,
                    password: data.password
                }
            })
        }
    })


    return (
        <LogLayout>
            <form className="LoginPage" onSubmit={loginForm.handleSubmit}>
                <div className="LoginPageDivider">
                    <LogInput 
                        name={"Email Address"}
                        id={"email"}
                        formik={loginForm}
                    />
                    <LogInput 
                        name={"Password"}
                        id={"password"}
                        formik={loginForm}
                        password={true}
                    />
                    <LogButton/>
                </div>
            </form>
        </LogLayout>
    )
}

export default LoginPage;