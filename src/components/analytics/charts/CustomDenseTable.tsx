import { Table, TableBody, TableCell, TableRow } from "@mui/material"

const rows = [{
    name: "Bldg A",
    number: 60
},{
    name: "Bldg B",
    number: 110
},{
    name: "Bldg C",
    number: 50
},{
    name: "Bldg D",
    number: 70
},{
    name: "Bldg E",
    number: 90
},{
    name: "Bldg F",
    number: 20
}]
export const CustomDenseTable = () => {
    return (<>
        <Table size="small">
            <TableBody>
                    {rows.map(row => (
                        
                <TableRow sx={{minWidth: "90%", fontSize: "2px", textAlign: "center"}}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.number}</TableCell>
                </TableRow>
                    ))}
            </TableBody>
        </Table>
    </>)
}