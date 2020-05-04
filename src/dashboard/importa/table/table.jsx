import React from 'react'
import Tbody from './tbody'

export default props => (
    <div className="box">
        <div className="box-header">
            <h3 className="box-title">Dados do Arquivo</h3>
        </div>
        <div className="box-body">
            <div id="example2_wrapper" className="dataTables_wrapper form-inline dt-bootstrap">
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                            <thead>
                                <tr role="row">
                                    <th>Código</th>
                                    <th>Código de Barras</th>
                                    <th>Descrição</th>
                                    <th>Preço de Custo</th>
                                    <th>Preço de Venda</th>
                                    <th>Balança</th>
                                    <th>Estoque</th>
                                </tr>
                            </thead>
                            <Tbody produtos={props.produtos}></Tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5">
                        <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">
                            Registros de 1 a 10 (fictício)
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                            {/* <ul className="pagination">
                                <li className="paginate_button previous disabled" id="example2_previous">
                                    <a href="true" aria-controls="example2" data-dt-idx="0" >Previous</a>
                                </li>
                                <li className="paginate_button active">
                                    <a href="true" aria-controls="example2" data-dt-idx="1" >1</a>
                                </li>
                                <li className="paginate_button ">
                                    <a href="true" aria-controls="example2" data-dt-idx="2" >2</a>
                                </li>
                                <li className="paginate_button ">
                                    <a href="true" aria-controls="example2" data-dt-idx="3" >3</a>
                                </li>
                                <li className="paginate_button ">
                                    <a href="true" aria-controls="example2" data-dt-idx="4" >4</a>
                                </li>
                                <li className="paginate_button ">
                                    <a href="true" aria-controls="example2" data-dt-idx="5" >5</a>
                                </li>
                                <li className="paginate_button ">
                                    <a href="true" aria-controls="example2" data-dt-idx="6" >6</a>
                                </li>
                                <li className="paginate_button next" id="example2_next">
                                    <a href="true" aria-controls="example2" data-dt-idx="7" >Next</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)