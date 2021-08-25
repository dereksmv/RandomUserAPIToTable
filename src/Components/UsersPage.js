import { react, useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from './Table';
import { flattenObject } from "../methods/methods"


export const UserPage = (props) => {
    const [ locations, setLocations ] = useState("");
    useEffect(() => {
        const url = 'https://randomuser.me/api/?results=20'
        axios.get(url)
             .then(res => {
                let data = res.data.results;
                let formattedData = data.map(element => {
                    return flattenObject(element.location)
                })
                setLocations(formattedData);
             })
    }, [])

    const sort = function handleSort(column) {
        const arr = [...locations];
        arr.sort((a, b) => {
            let x = a[column];
            let y = b[column];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        })
    }

    return(
        <div>
            <h1>Hello Mendel.ai</h1>
            <Table data={locations} sort={sort}/>
            
        </div>
    )
}