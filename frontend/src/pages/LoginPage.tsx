import {Link} from "react-router"
import Alert from '../components/Alert.tsx'
import Input from '../components/Input.tsx'
import {Formik,Form} from 'formik'
import * as Yup from 'yup';

const validationSchema=Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
  
    password: Yup.string()
      .required('Password is required')
  });

const LoginPage=()=>{
    const error="error";const clearError=()=>{};const handleSubmit=()=>{}

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
                {error && (
                    <Alert
                        type="error"
                        message={error}
                        onClose={clearError}
                    />
                )}
<Formik
       initialValues={{
         email: '',
         password:''
       }}
       validationSchema={validationSchema}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           
         }, 1000);
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
                {/* <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input rounded-t-md rounded-b-none"
                        placeholder="Email address"
                    />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="input rounded-t-none rounded-b-md"
                        placeholder="Password"
                    />
                    </div>
                </div>
                
                <div>
                    <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full"
                    >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>
                </div> */}
                <button 
                    className="block w-full rounded bg-blue-600 px-3 py-1.5 font-semibold text-white shadow-xs hover:bg-blue-500 cursor-pointer" 
                    type="submit"
                    >
                        Sign in 
                    </button>
                </Form>
                </Formik>
            </div>
        </div>
    </>
}

export default LoginPage