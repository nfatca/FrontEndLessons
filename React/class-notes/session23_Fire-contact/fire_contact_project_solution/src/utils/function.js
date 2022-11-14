//? ADD USER
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import firebase from "./firebase";
import { useEffect, useState } from "react";
import toastify from "./toastify";

export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  toastify("Added succesful");
  console.log("Add userda bilgiler kaydedildi");
};

//? READ INFO

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  //   const userRef = ref(db, "users/");
  remove(ref(db, "users/" + id));
  toastify("Deleted succesful");
};

export const updateUser = (info) => {
  const db = getDatabase(firebase);
  //   const userRef = ref(db, "users/");

  const updates = {};

  updates["users/" + info.id] = info;
  toastify("Updated succesful");
  return update(ref(db), updates);
};
