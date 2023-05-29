import { useForm, yupResolver } from '@mantine/form'
import * as Yup from 'yup'

const registerUserSchema = Yup.object().shape({
  first_name: Yup.string().required(`First name is required`),
  last_name: Yup.string().required(`Last name is required`),
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
    )
    .required(`Email is required`),
  // type: Yup.string().oneOf([`teacher`, `student`]).required(`Type is required`),
  password: Yup.string().required(`Password is required`),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref(`password`), null],
    `Passwords must match`,
  ),
})

export const useRegisterUserForm = ({ config = {} } = {}) =>
  useForm({
    initialValues: {
      first_name: ``,
      last_name: ``,
      email: ``,
      // type: ``,
      password: ``,
      password_confirmation: ``,
    },

    validate: yupResolver(registerUserSchema),

    ...config,
  })
