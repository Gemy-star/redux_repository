import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
 const TableComponent = props => {
        return (
            <div>
                <div className="card">
                    <DataTable value={props.employees}>
                        <Column field="name" header="الأسم"></Column>
                        <Column field="address" header="العنوان"></Column>
                        <Column field="email" header="البريد الألكترونى"></Column>
                        <Column field="phone" header="الهاتف"></Column>
                    </DataTable>
                </div>
            </div>
        );
}

export default TableComponent;