import { Table, TableBody, TableCell, TableRow } from "@mui/material"

const rows = [{
    name: "Bldg A",
    number: 15
}, {
    name: "Bldg B",
    number: 10
}, {
    name: "Bldg C",
    number: 30
}, {
    name: "Bldg D",
    number: 20
},
{
    name: "Bldg E",
    number: 10
}]

export const CustomDenseTable = () => {
    return (<>
        <Table size="small" sx={{ marginTop: "5px" }}>
            <TableBody>
                {rows.map(row => (
                    <TableRow sx={{ minWidth: "90%", fontSize: "2px", textAlign: "center" }}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.number}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </>)
}