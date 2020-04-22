import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Row from '../../common/layout/row'
import XLSX from 'xlsx'

class Importar extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Importar' small='Importação de produtos para o sistema' />
                <Content>
                    <Row>
                        <input type="file" accept=".dbf" name="xlfile" id="xlf" onChange={ (e)=>this.onChange(e) }/>
                    </Row>
                </Content>
            </div>
        )
    }

    onChange(e) {
        const file = e.target.files
        const reader = new FileReader()
        if (file[0]) {
            reader.readAsArrayBuffer(file[0])
        }    
        reader.onload = (e) => {
            const workbook = XLSX.read(new Uint8Array(e.target.result), {type: 'array'} )
            const first_worksheet = workbook.Sheets[workbook.SheetNames[0]]
            const data = XLSX.utils.sheet_to_json(first_worksheet, {header:1})
            console.log(data)
        }
    }
}

export default Importar