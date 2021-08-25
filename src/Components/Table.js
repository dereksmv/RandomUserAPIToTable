import { react } from "react";
import { Icon } from "./Icon"

export const Table = (props) => {
    const { data, sort } = props
    function createTableHeaders() {
        if (data) {
        const header = Object.keys(data[0]);
           return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}<Icon></Icon></th>
      })
        }
    }

    function createTableRows() {
        if (data) {
            return data.map((item, key) => {
                return (<tr key={key}>
                    <td>{item.number}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.country}</td>
                    <td>{item.postcode}</td>
                    <td>{item.latitude}</td>
                    <td>{item.longitude}</td>
                    <td>{item.offset}</td>
                    <td>{item.description}</td>
                </tr>)
            })
        }
    }
        
    
    return (
        
        <table>
            <tbody>
                {createTableHeaders()}
                {createTableRows()}
            </tbody>
        </table>
    )
}