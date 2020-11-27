import React, { useEffect } from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Link } from "react-router-dom";



export const Notice = ({ _id, title, category, dictionary, language, word, onDeleteClick }) => {


    // const fetchInitialData = async () => {
    //     const response = await fetch("http://localhost:3000/NoticeList");
    //     const initialData = await response.json();
    //     console.log(initialData);
    // }
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        title,
            category,
            dictionary,
            language,
            word
    }, [title, category, dictionary, language, word]);

    // useEffect(() => {
    //     fetchInitialData();
    // }, []);
    return (
        <TableRow>
            <Link to={`/NoticeDetails/${_id}`}>
                <TableCell>{_id}</TableCell>
            </Link >
            <TableCell>{title}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{dictionary}</TableCell>
            <TableCell>{language}</TableCell>
            <TableCell>{word}</TableCell>
            <br></br>
            <button onClick={() => onDeleteClick(_id)}>&times;</button>
        </TableRow >
    )
};
