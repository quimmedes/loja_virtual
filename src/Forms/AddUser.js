import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddUser = (props) => {

return(
    <div className="form">
       <Formik
       initialValues={{ email: '', password: '', confirmPassword: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Necessário informar o email';	
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'endereço de email invalido';
         }

         if(!values.password){
            errors.password = 'Não pode ser vazio';
         }
         else
            if(values.password.length < 6){
                errors.password = 'Deve ter no mínimo 6 caracteres';
            }

           if(!values.confirmPassword){
            errors.confirmPassword = 'Não pode ser vazio';
           }
           else if(values.confirmPassword.length < 6){
                errors.confirmPassword = 'Deve ter no mínimo 6 caracteres';
            }
           else if(values.confirmPassword !== values.password){
            errors.confirmPassword = 'Senhas não conferem';
              }
     
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <ErrorMessage name="email" component="div" />
          Email: 
          <Field type="email" name="email" />
          <ErrorMessage name="password" component="div" />
           Senha:
           <Field type="password" name="password" />
           <ErrorMessage name="confirmPassword" component="div" />
           Confirmar Senha:
           <Field type="password" name="confirmPassword" />
           <button type="submit" disabled={isSubmitting}>
             Salvar
           </button>
         </Form>
       )}
     </Formik>
        </div>
)    

}

export default AddUser;