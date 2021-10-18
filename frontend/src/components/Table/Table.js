import React, { useState, useEffect } from "react";
import './Table.css';

const Table = ({ content }) => {
    const [ columns, setColumns ] = useState([]);

    useEffect(() => {
        if (content.length > 0) setColumns(Object.keys(content[0]));
    }, [content]);

    return (
        <table>
            <tr>
                {columns.map((column, i) => (
                    <th key={`${column}-${i}`}>
                        {column}
                    </th>
                ))}
            </tr>
            {content.map((row, i) => (
                <tr key={`row-${i}`}>
                    {columns.map((column, j) => (
                        <td key={`${column}-item-${j}`}>
                            {row[column]}
                        </td>
                    ))}
                </tr>
            ))}
        </table>
    )
}

export default Table;