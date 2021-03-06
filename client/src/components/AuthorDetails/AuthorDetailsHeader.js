import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const AuthorDetailsHeader = ({ handleBack, handleOpen, authorName }) => {
  const classes = useStyles();
  return (
    <div>
      <TableContainer>
        <Table>
          <TableRow>
            <TableCell className={classes.tableCell}>
              <IconButton onClick={handleBack}>
                <Icon className={classes.iconStyle} id="addIcon">chevron_left</Icon>
              </IconButton>
            </TableCell>
            <TableCell align="center" className={classes.tableCell}>
              <h1>{authorName}</h1>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <IconButton onClick={handleOpen}>
                <Icon style={{ color: 'black' }} id="addIcon">add_circle</Icon>
              </IconButton>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  tableCell: {
    borderBottom: 0
  },
  iconStyle: {
    fontSize: 50, 
    color: 'black'
  }
}));

export default AuthorDetailsHeader;