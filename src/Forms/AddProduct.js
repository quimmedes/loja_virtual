import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addDoc, collection, query, orderBy, onSnapshot} from 'firebase/firestore';
import {db} from '../Db';
import { useEffect, useState, useCallback } from 'react';
import getItems from '../Functions/getItems';

const AddProduct = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)	

    const fetchData = useCallback(async () => {
     
      const snap = await getItems();
      setTodos(snap)
      setLoading(false)


    }, [])

    useEffect(() => {
      if(loading){
      fetchData()
      console.log("chamou")
      }
    }, [loading])


    


async function saveMessage(props) {
  // Add a new message entry to the Firebase database.
  try {
    await addDoc(collection(db, 'novos'), props);
  }
  catch(error) {
    console.error('Error writing new message to Firebase Database', error);
  }
  finally {
    setLoading(true)
  }
}


function handleClick(event){
  console.log(event.currentTarget.dataset.id)
  event.currentTarget.classList.toggle("active");
    var content = event.currentTarget.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

}
        
const ProductList = () => {
  return(
      <div className="product-list">

<table>
  <tbody>
<tr>
  <th>Nome</th>
  <th>Imagem</th>
  <th>Categoria</th>
  <th>SubCategoria</th>
  <th>Cor</th>
  <th>Codigo</th>
  <th>Preço</th>
  <th>Peso</th>
  <th>Tamanho</th>
  <th>Quantidade</th>
  <th>Descrição</th>
</tr>

  {todos.map(todo => (

  <tr className="collapsible" onClick={handleClick}  key={todo.id} data-id={todo.id}>
  <td>{todo.item.name}<input className="update_row"  type="text" /></td>
  <td>{todo.item.image}</td>
  <td>{todo.item.category}</td>
  <td>{todo.item.subcategory}</td>
  <td>{todo.item.color}</td>
  <td>{todo.item.sku}</td>
  <td>{todo.item.price}</td>
  <td>{todo.item.weight}</td>
  <td>{todo.item.size}</td>
  <td>{todo.item.quantity}</td>
  <td>{todo.item.content}</td>
  </tr>
  ))}
</tbody>
</table>
          </div>
  )
}


return(
    <div className="form">
       <Formik

       initialValues={{ name: '', image: '' , content: '', category: 'padrao', subcategory: 'nenhum'}} 
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = 'Não pode ser vazio';	
         }
         return errors;
       }}

       onSubmit={(values, { setSubmitting }) => {
          
            values.time = new Date();
            saveMessage(values)
            setSubmitting(false);

       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <ErrorMessage name="name" component="div" />
          Nome: 
          <Field name="name" />

       
          <ErrorMessage name="image" component="div" />
           Imagem:
           <Field name="image" />
           Codigo:
           <Field name="sku" />
            Categoria:
           <Field name="category" as="select" >
           <option value="padrao">padrao</option>
           <option value="saab">Saab</option>
           <option value="fiat">Fiat</option>
           <option value="audi">Audi</option>
            </Field>

          
            Sub Categoria:
           <Field name="subcategory" as="select" >
           <option value="nenhum">nenhum</option>
           <option value="saab">Saab</option>
           <option value="fiat">Fiat</option>
           <option value="audi">Audi</option>
            </Field>
            <br />
            Cor:
           <Field name="color" />
            Tamanho:
           <Field name="size" />
            Preço:
            <Field name="price" />
            Peso:
            <Field name="weight" />
            Quantidade:
            <Field name="quantity" />
              

           Descrição: 
          <Field name="content" as="textarea" rows="4" cols="50"/>
      
           <button type="submit" disabled={isSubmitting}>
             Salvar
           </button>
         </Form>
       )}
     </Formik>
        {todos && <ProductList /> }
        </div>
)    

}






export default AddProduct;