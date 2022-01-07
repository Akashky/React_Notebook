import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
    {
      "_id": "61d68ef646e258ccece9fb1e",
      "user": "61d571dc460f2f58fb780e56",
      "title": "My Title updated",
      "description": "Please do workout updated",
      "tag": "personal",
      "date": "1641451254352",
      "__v": 0
    },
    {
      "_id": "61d68ef746e258ccece9fb22",
      "user": "61d571dc460f2f58fb780e56",
      "title": "My Title",
      "description": "Please do workout",
      "tag": "personal",
      "date": "1641451255366",
      "__v": 0
    },
    {
        "_id": "61d68ef646e258ccece9fb1e",
        "user": "61d571dc460f2f58fb780e56",
        "title": "My Title updated",
        "description": "Please do workout updated",
        "tag": "personal",
        "date": "1641451254352",
        "__v": 0
      },
      {
        "_id": "61d68ef746e258ccece9fb22",
        "user": "61d571dc460f2f58fb780e56",
        "title": "My Title",
        "description": "Please do workout",
        "tag": "personal",
        "date": "1641451255366",
        "__v": 0
      },
      {
        "_id": "61d68ef646e258ccece9fb1e",
        "user": "61d571dc460f2f58fb780e56",
        "title": "My Title updated",
        "description": "Please do workout updated",
        "tag": "personal",
        "date": "1641451254352",
        "__v": 0
      },
      {
        "_id": "61d68ef746e258ccece9fb22",
        "user": "61d571dc460f2f58fb780e56",
        "title": "My Title",
        "description": "Please do workout",
        "tag": "personal",
        "date": "1641451255366",
        "__v": 0
      },
      {
        "_id": "61d68ef646e258ccece9fb1e",
        "user": "61d571dc460f2f58fb780e56",
        "title": "My Title updated",
        "description": "Please do workout updated",
        "tag": "personal",
        "date": "1641451254352",
        "__v": 0
      },
      {
        "_id": "61d68ef746e258ccece9fb22",
        "user": "61d571dc460f2f58fb780e56",
        "title": "My Title",
        "description": "Please do workout",
        "tag": "personal",
        "date": "1641451255366",
        "__v": 0
      }
  ]
  const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;