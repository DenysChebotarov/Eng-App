import WordListItem from "components/WordListItem/WordListItem";
const WordList = ({words}) => {
    return (
        <ul>
            {words.map(({id, ukrWord, engWord}, index) =>{
return <WordListItem id = {id} key= {id} ukrWord = {ukrWord} engWord = {engWord} itemNumber = {index+1} deleteWord = {deleteWord} />;
            })}
        </ul>
    )
}
export default WordList