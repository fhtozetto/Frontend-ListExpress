import React, { Component } from 'react'
//import ReactDOM from 'react-dom'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Row from '../../common/layout/row'
//import XLSX from 'xlsx'

class Importar extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Importar' small='Importação de produtos para o sistema' />
                <Content>
                    <Row>
                        <input type="file" accept=".dbf" name="xlfile" id="xlf"/>
                    </Row>
                </Content>
            </div>
        )
        //const teste = document.getElementById(xlf)
        //const dbf = XLSX.readFile(document.getElementById(xlf))
        //console.log('teste')
        //var first_worksheet = workbook.Sheets[workbook.SheetNames[0]]
        //var data = XLSX.utils.sheet_to_json(first_worksheet, {header:1})
    }

}

export default Importar