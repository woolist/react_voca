import dummy from "../db/data.json"
import { useParams } from "react-router-dom"

export default function Day(){
    const day = useParams().day
    console.log(day)
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ))

    return <>
    <h1>day{day}</h1>
    <table>
        <tbody>
            {wordList.map(word =>(
                <tr key={word.id}>
                    <td><input type="checkbox"/></td>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                    <td>
                        <button>뜻 보기</button>
                        <button>삭제</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
}