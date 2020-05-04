import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import Row from '../../common/layout/row'
import Table from './table/table'
import Progress from './progress'
import XLSX from 'xlsx'

class Importar extends Component {
    state = {
        lista: []
    }

    listaDeProdutos = (produtos) => {
        this.setState({ lista: produtos })
    }

    render() {
        return (
            <div>
                <ContentHeader title='Importar' small='Importação de produtos para o sistema' />
                <Content>
                    <Row></Row>
                    <input type="file" accept=".dbf" name="xlfile" id="xlf" onChange={(e) => this.onChange(e)} />
                    <Table produtos={this.state.lista}></Table>
                    <Progress></Progress>
                </Content>
            </div>
        )
    }

    onChange(e) {
        const file = e.target.files
        const reader = new FileReader()
        if (file[0]) {
            reader.readAsArrayBuffer(file[0])
            reader.onload = (e) => {
                const workbook = XLSX.read(new Uint8Array(e.target.result), { type: 'array' })
                const first_worksheet = workbook.Sheets[workbook.SheetNames[0]]
                const data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 })
                this.listaDeProdutos(data)
            }
        } else {
            this.listaDeProdutos()
        }
    }
}

export default Importar