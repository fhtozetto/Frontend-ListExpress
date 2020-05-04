import React from 'react'

export default props => {
    const lista = props.produtos || []
    let key = 0
    
    const listaProdutos = itens => {
        return itens.map(item => (
            <tr key={key++}>
                <td>{item[6]}</td>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[7]}</td>
                <td>{item[8]}</td>
            </tr>
        ))
    }

    return (
        <tbody>
            {listaProdutos(lista)}
        </tbody>
    )
}