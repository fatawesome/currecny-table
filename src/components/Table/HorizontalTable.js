import React from "react";
import PropTypes from "prop-types";
import "./horizontal-table.css";

const HorizontalTable = ({tableData}) => {
  const rows = tableData.headData.map((el, rowIdx) =>
    <tr key={`row-${rowIdx}`}>
      <th>{el}</th>
      {tableData.rowsData.map((el, colIdx) =>
        <td key={`col-${colIdx}`}>{el[rowIdx]}</td>
      )}
    </tr>
  )

  return (
    <table>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

HorizontalTable.propTypes = {
  tableData: PropTypes.exact({
    headData: PropTypes.array,
    rowsData: PropTypes.arrayOf(
      PropTypes.array
    )
  })
}

export default HorizontalTable;
