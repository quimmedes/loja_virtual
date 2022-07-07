import  {db}  from '../Db';
import { collection, query,  getDocs,where, orderBy,startAt,endAt } from "firebase/firestore";



const getItems = async ()=>{
  
        try {

            const q = query(collection(db, "novos"), orderBy("time"));
            const querySnapshot = await getDocs(q);

            var snap = querySnapshot.docChanges().map(change=> 
                ({id: change.doc.id, qt:0, item :change.doc.data()})
              
            )
                        
            console.log(snap)

            return snap;
            
            
        } catch (error) {
          console.log(error)
        }
    }

export default getItems