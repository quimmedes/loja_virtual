import  {db}  from '../Db';
import { collection, query,  getDocs,where, orderBy,startAt,endAt } from "firebase/firestore";




const getItemsByTitle = async (titulo)=>{
  
        try {
            //const q = query(collection(db, "lojanova"), orderBy("titulo"),where("titulo", ">=", titulo),where("titulo", "<=", titulo+"\uf8ff"));
            const q = query(collection(db, "lojanova"), where ("titulos","array-contains",titulo), orderBy("titulos"),startAt(titulo), endAt(titulo+"\uf8ff"));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot.docChanges())

            var snap = querySnapshot.docChanges().map(change=> 
                ({id: change.doc.id, qt:0, item :change.doc.data()})
              
            )
                        
            console.log(snap)
            
        } catch (error) {
          console.log(error)
        }
    }

export default getItemsByTitle