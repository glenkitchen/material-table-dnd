import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { DndItem } from "./dnd";
import DndListItem from "./DndListItem";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin: 8px;
  width: 200px;
`;

const Title = styled(Typography)`
  padding: 8px;
`;

interface ColumnsProps {
  isDraggingOver: boolean;
}

const Columns = styled.div<ColumnsProps>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  transition: background-color 0.2s ease;
`;

interface DndListProps {
  items: DndItem[];
  setItems: React.Dispatch<React.SetStateAction<DndItem[]>>;
}

const DndList: FC<DndListProps> = ({ items, setItems }) => {
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const newItem = { ...items[source.index] };
    const newItems = [...items];
    newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, newItem);

    setItems(newItems);
  };
  if (items?.length === 0) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {<Title>Columns Order</Title>}
        <Droppable droppableId="columns">
          {(provided, snapshot) => (
            <Columns
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {items.map((item, index) => (
                <DndListItem key={index} item={item} index={index} />
              ))}
              {provided.placeholder}
            </Columns>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
};

export default DndList;
