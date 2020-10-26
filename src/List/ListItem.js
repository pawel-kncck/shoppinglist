import { makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react'

const useStyles = makeStyles({
    nameContainer: {
        flexGrow: 1,
    },
})

const ListItem = ({ itemObject }) => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(itemObject.name)
    const classes = useStyles();

    return (<>
        {active 
            ?   <TextField value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => setActive(false)}></TextField>   
            :   <div className={classes.nameContainer} onClick={() => setActive(true)}>{itemObject.name}</div> 
        }
    </>)
}

export default ListItem;