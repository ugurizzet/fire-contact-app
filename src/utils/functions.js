import firebase from './firebase'
import { getDatabase, onValue, push, ref, remove, set, update } from 'firebase/database'
import { useEffect, useState } from 'react';

export const AddUser =(info)=>{
    const db = getDatabase();
    const userRef = ref(db,'baglanti');
    const newUserRef = push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber, //!dikkart
        gender:info.gender,

    })
}

export const GetUser =()=>{
    const [contactList, setContactList] = useState();
    useEffect(() => {
      const db = getDatabase();
      const userRef = ref(db,'baglanti');
      onValue(userRef,(snapshot)=>{
        const data = snapshot.val();
        const baglantiArray=[];

        for(let id in data){
            baglantiArray.push({id,...data[id]})
        }
        setContactList(baglantiArray);
        
      })
    }, [])
    return {contactList}
}
export const DeleteUser=(id)=>{
  const db = getDatabase();
  const userRef=ref(db,"baglanti");
  remove(ref(db,"baglanti/"+id))

  // Toastify("Kullanıcı bilgisi silindi")
}

export const EditUser=(info)=>{
  const db = getDatabase();
  const updates = {};
  

  updates["baglanti/"+info.id]=info;
  return update(ref(db),updates);

}