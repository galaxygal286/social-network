import {Link, useLocation, useNavigate} from "react-router"
import Alert from '../components/Alert.tsx'
import Input from '../components/Input.tsx'
import {Formik,Form} from 'formik'
import * as Yup from 'yup';
import useAuthStore from "../store/authStore"
import { useEffect } from "react";

const validationSchema=Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
  
    password: Yup.string()
      .required('Password is required')
  });

const LoginPage=()=>{

    const {login, authenticated, error, clearError} = useAuthStore()
    const navigate = useNavigate();

    const location = useLocation();
    const successMessage = location.state?.successMessage;

    useEffect(() => {
        if (authenticated) {
          navigate('/');
        }
      }, [authenticated, navigate]);

    return <>
        <div className="min-h-screen flex items-center justify-center bg-ultraLight py-12 px-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-gray-600">
                        <span>Or </span>
                        <Link to="/register" className=" text-primary hover:text-primary-dark">
                            create a new account
                        </Link>
                    </p>
                </div>
                
                <Formik
                    initialValues={{
                        email: '',
                        password:''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        login(values)
                    }}
                >
                <Form className="mt-8 space-y-5" >
                    <Input
                        name="email"
                        type="email"
                        label="Email"
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Password"
                    />
                
                <button 
                    className="block w-full rounded bg-blue-600 px-3 py-1.5 font-semibold text-white shadow-xs hover:bg-blue-500 cursor-pointer" 
                    type="submit"
                    >
                        Sign in 
                    </button>
                </Form>
                </Formik>
                {successMessage && (
                    <Alert
                        type="success"
                        message={successMessage}
                        onClose={clearError}
                    />
                )}
                {error && (
                    <Alert
                        type="error"
                        message={error}
                        onClose={clearError}
                    />
                )}
            </div>
        </div>
    </>
}

export default LoginPage