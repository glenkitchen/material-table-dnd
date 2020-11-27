import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { DndItem } from "./dnd";

interface ContainerProps {
  isDragging: boolean;
}

const Container = styled.div<ContainerProps>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

interface DndListItemProps {
  item: DndItem;
  index: number;
}

const DndListItem: FC<DndListItemProps> = ({ item, index }) => {
  if (!item.id || !item.label) {
    return null;
  }

  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {item.label}
        </Container>
      )}
    </Draggable>
  );
};

export default DndListItem;
