import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { startFetch, editData, stopFetching } from '../../actions/tableActions';

import style from './style.js';

const useStyles = makeStyles(style);

function DataTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stockData = useSelector((state) => state.stockData);

  useEffect(() => {
    dispatch(startFetch());
  }, []);

  const handleChange = (event, index, stockType) => {
    const payload = {
      value: Number(event.target.value),
      index,
      stockType,
    };
    dispatch(editData(payload));
    dispatch(startFetch());
  };

  const focus = () => {
    dispatch(stopFetching());
  };

  const handleKeyDown = (event, index, stockType) => {
    if (event.key === 'Enter') handleChange(event, index, stockType);
  };

  return (
    <>
      <Table aria-label="simple table" className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell>CAC40</TableCell>
            {stockData?.map((stockItem) => (
              <TableCell key={stockItem.index}>
                <input
                  defaultValue={stockItem.stocks.CAC40.toFixed(1)}
                  className={classes.input}
                  onFocus={focus}
                  onBlur={(event) => handleChange(event, stockItem.index, 'CAC40')}
                  onKeyDown={(event) => handleKeyDown(event, stockItem.index, 'CAC40')}
                />
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>NASDAQ</TableCell>
            {stockData?.map((stockItem) => (
              <TableCell key={stockItem.index}>
                <input
                  defaultValue={stockItem.stocks.NASDAQ.toFixed(1)}
                  className={classes.input}
                  onFocus={focus}
                  onBlur={(event) => handleChange(event, stockItem.index, 'NASDAQ')}
                  onKeyDown={(event) => handleKeyDown(event, stockItem.index, 'NASDAQ')}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default DataTable;
