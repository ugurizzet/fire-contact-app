import firebase from './firebase'
import { getDatabase, onValue, push, ref, set } from 'firebase/database'
import { useEffect, useState } from 'react';

export const AddUser =(name , phone , gender)=>{
    const db = getDatabase();
    const userRef = ref(db,'baglanti');
    const newUserRef = push(userRef)
    set((newUserRef),{
        username:name,
        phoneNumber:phone,
        Gender:gender,

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