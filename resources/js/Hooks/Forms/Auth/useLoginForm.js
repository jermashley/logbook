import { useForm, yupResolver } from '@mantine/form'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
    )
    .required(`Email is required`),
  password: Yup.string().required(`Password is required`),
})

export const useLoginForm = ({ config = {} } = {}) =>
  useForm({
    initialValues: {
      email: ``,
      password: ``,
      remember: ``,
    },

    validate: yupResolver(loginSchema),

    ...config,
  })
