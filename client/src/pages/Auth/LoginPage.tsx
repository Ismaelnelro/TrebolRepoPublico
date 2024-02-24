/*Redux*/
import { useAppDispatch, useAppSelector } from '../../store/redux-reducer';

/*Formik*/
import { useFormik } from 'formik';
import * as Yup from 'yup';

/*Hook*/
import { useAuthStore } from '../../hooks/useAuthStore';

/*Components*/
import LayoutAuth from './LayoutAuth';
import Loader from '../../components/ui/Loader';
import { InputComponent } from '../../components/ui/InputComponent';

/*Toastify*/
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginPage: React.FC = () => {

    const { loading } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const { startLogin } = useAuthStore();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
        }),
        onSubmit: values => {
            try {
                dispatch(startLogin({ ...values }))
            } catch (error) {
                toast.error("Something went wrong! :(")
            }
        },
    });

    return (
        <>
            <ToastContainer />
            {loading && <Loader />}
            <LayoutAuth handleSubmit={formik.handleSubmit} title='welcome' accion='login'>

                <InputComponent
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    touched={formik.touched.email}
                    error={formik.errors.email}
                />

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

            </LayoutAuth>
        </>

    );
};

export default LoginPage;

