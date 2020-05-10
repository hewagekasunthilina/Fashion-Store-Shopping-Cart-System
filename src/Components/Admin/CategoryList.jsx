import React, {Component} from "react";
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';

const columns = [
    {
        name: 'ID',
        selector: 'category_id',
        sortable: true,
    },
    {
        name: 'Name',
        selector: 'category_name',
        sortable: true,
    },
    {
        name: 'Description',
        selector: 'category_description',
        sortable: true,
    },
];

const data = async () => {
    const response = await axios.get(
        'http://localhost:4000/api/category'
    );

    data(response.data);
    console.log(data)
};

class CategoryList extends Component {
    render() {
        return (
            <DataTable columns={columns} data={data} />
        );
    }
}

export default CategoryList;
