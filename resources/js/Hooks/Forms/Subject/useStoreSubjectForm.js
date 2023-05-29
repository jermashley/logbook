import { useForm } from '@mantine/form'
import * as Yup from 'yup'

const subjectSchema = Yup.object().shape({
  name: Yup.string().required(`Name is required`),
  type: Yup.string().oneOf([`Core`, `Elective`]).required(`Type is required`),
})

export const useStoreSubjectForm = ({ config = {} } = {}) =>
  useForm({
    initialValues: {
      name: ``,
      type: ``,
    },

    ...config,
  })
