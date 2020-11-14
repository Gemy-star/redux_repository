import React, {Component} from 'react';
import MenuComponent from "../../Component/MenuComponent/MenuComponent";
import {Button} from 'primereact/button';
import {connect} from "react-redux";
import {InputNumber} from 'primereact/inputnumber';
import {ListBox} from 'primereact/listbox';
import './HomePage.css'
import {
    CounterAdd, CounterDecrement,
    CounterIncrement, fetchEmployee,
    resultAdd, resultRemoved
} from "../../Redux/actions/actions";
import TableComponent from "../../Component/TableComponent/TableComponent";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            city: null
        }

    }
    componentDidMount() {
        this.props.getEmployee()
        console.log(this.props)
    }


    render() {
        return (
            <div>
                <MenuComponent/>
                <br/>
                <br/>
                <div className="badges">
                    <span className="p-badge">{this.props.ctr}</span>
                </div>
                <hr/>
                <Button icon="pi pi-minus" className="p-button-rounded p-button-secondary"
                        onClick={this.props.onDecrement}/>
                <Button icon="pi pi-plus" className="p-button-rounded p-button-success"
                        onClick={this.props.onIncrement}/>
                <br/>
                <hr/>
                <InputNumber value={this.state.value} onValueChange={(e) => this.setState({value: e.value})}/>
                <Button icon="pi pi-check" className="p-button-rounded p-button-primary"
                        onClick={()=>this.props.onPushResult(this.props.ctr)}/>
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger"
                        onClick={() => this.props.onAddValue(this.state.value)}/>
                <hr/>
                <ListBox value={this.state.city} options={this.props.results}
                         onChange={(e) => this.setState({city: e.value})}/>
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger"
                        onClick={() => this.props.onRemoveResult(this.state.city)}/>

                        <br/>
                        <br/>
                        <hr/>
                        <TableComponent employees = {this.props.employees}/>

            </div>
        );
    }

}

const MapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        results: state.results.results ,
        employees : state.employees.employees
    };
};


const MapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(CounterIncrement()),
        onDecrement: () => dispatch(CounterDecrement()),
        onAddValue: (value) => dispatch(CounterAdd(value)),
        onPushResult: (counter) => dispatch(resultAdd(counter)),
        onRemoveResult: (selected) => dispatch(resultRemoved(selected)),
        getEmployee : () => dispatch(fetchEmployee())

    };
};

export default connect(MapStateToProps, MapDispatchToProps)(HomePage);
