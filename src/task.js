import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
border: 1px solid black;
padding:4px;
border-radius: 2px;
marting-bottom: 8px
background-color: ${props => (props.isDragging ? `white` : `rgb(240, 240, 240)`)};
color: black;
font-size: 20px
font-weight: bold;

display: flex;
`;

const Handle = styled.div`
width: 10px;
height: 40px;
background-color: rgb(87, 155, 252);
margin-right: 8px;

`

export default class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                    <Handle />
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}