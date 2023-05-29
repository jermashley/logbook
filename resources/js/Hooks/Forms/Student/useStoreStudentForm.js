import { useForm, yupResolver } from '@mantine/form'
import * as Yup from 'yup'

const studentSchema = Yup.object().shape({
  first_name: Yup.string().required(`A first name is required`),
  last_name: Yup.string().required(`A last name is required`),
  grade_id: Yup.number().required(`A grade is required`),
})

export const useStoreStudentForm = ({ config = {} } = {}) =>
  useForm({
    initialValues: {
      first_name: ``,
      last_name: ``,
      grade_id: ``,
    },

    validate: yupResolver(studentSchema),

    ...config,
  })
