import  {db}  from '../Db';
import { doc, getDoc} from 'firebase/firestore';

const getItemById = async (id)=>{
  
        try {

          const docRef = doc(db, "novos", id);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            return {id: docSnap.id, qt:0, item: docSnap.data()};
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
              
        } catch (error) {
          console.log(error)
        }
    }

export default getItemById