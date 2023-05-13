import { useState } from 'react'
const WordListItem = ({id, ukrWord, engWord, itemNumber, deleteWord}) => {
    const [isEdit, setEdit] = useState(false)
    return (
        <li>
            <p>{itemNumber}</p>
            <input type="text" /><input type="text" />
            <p>{ukrWord}</p>
            <p>{engWord}</p>
            <button type='button' onClick={()=> deleteWord(id)}>Delete</button>
            <button type = 'button'>Edit</button>
        </li>
    )
}
export default WordListItem;