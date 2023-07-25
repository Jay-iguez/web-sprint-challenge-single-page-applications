import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("You must attach a name to this order.")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("You must select a size."),
    pupperoni: yup.boolean(),
    mooshroom: yup.boolean(),
    licorice: yup.boolean(),
    bagelbites: yup.boolean(),
    special: yup
        .string()
        .notRequired()
})



export default formSchema
