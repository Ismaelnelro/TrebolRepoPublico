import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*Formik-Yup*/
import { useFormik } from 'formik';
import * as Yup from 'yup';

/*Hooks*/
import { useAuthStore } from '../../hooks/useAuthStore';

/*Components- layouts*/
import { InputComponent } from '../../components/ui/InputComponent'
import Loader from '../../components/ui/Loader';
import LayoutAuth from './LayoutAuth'


/*Toast- toastStyles*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterPage = () => {

    const navigate = useNavigate()
    const { startRegister } = useAuthStore();
    const [isFetch, setIsFetch] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4, 'Name must be at least 4 characters').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async values => {
            try {
                const resp = await startRegister({ ...values })
                setIsFetch(true);
                if (resp) {
                    toast.success(resp.msg || "Register Successfully", { position: "top-center", autoClose: 2000 });
                }

                setTimeout(() => {
                    setIsFetch(false);
                    navigate("/auth/login")
                }, 4000);

            } catch (error) {
                toast.error("Something went wrong! :(")
            }
        },
    });


    return (
        <>
            <ToastContainer />
            {isFetch && <Loader />}
            <LayoutAuth handleSubmit={formik.handleSubmit} title='Be a TrebolNET' accion='register'>

                <InputComponent
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    touched={formik.touched.name}
                    error={formik.errors.name} />

                <InputComponent
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    touched={formik.touched.email}
                    error={formik.errors.email} />

                <InputComponent
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    touched={formik.touched.password}
                    error={formik.errors.password}
                />

                <InputComponent
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    touched={formik.touched.confirmPassword}
                    error={formik.errors.confirmPassword}
                />


            </LayoutAuth>
        </>
    )
}

export default RegisterPage