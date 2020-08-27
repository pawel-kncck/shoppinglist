import React, { useState } from 'react';
import { Card, CardHeader, ListItem, CardContent, CardActions, TextField, FormControl, Button } from '@material-ui/core';

const ListCard = ({ listObject }) => {
    const [newItem, setNewItem] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <Card>
            <CardHeader>
                {listObject.name}
            </CardHeader>
            <CardContent>
                {listObject.items.map(itemObject => {
                    return <ListItem key={itemObject.id}>{itemObject.name}</ListItem>
                })}
            </CardContent>
            <CardActions>
                <FormControl onSubmit={(e) => handleSubmit(e)}>
                    <TextField placeholder="New item" value={newItem} onChange={setNewItem}></TextField>
                    <Button type="submit">Add</Button>
                </FormControl>
            </CardActions>
        </Card>
    );
}

export default ListCard;