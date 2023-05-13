import WordForm from "./WordForm/WordForm";
import WordList from "./WordList/WordList";
import { useState } from 'react';
export const App = () => {
  const [words, setWords] = useState([])

  const addWords = (word) => {
    setWords(prevState => [word, ...prevState])
  }
  const deleteWord = (id) => {
setWords(prevState => prevState.filter(word => word.id !== id))
  }
  const editWord = (editWord) => {
    setWords(prevState => prevState.map(word => {
      if(word.id === editWord.id){
        return 
      }
    }))
  }
  return (
   <>
   <WordForm addWords={addWords}/>
   <WordList words = {words} deleteWord={deleteWord}/>
   </>
  );
};
