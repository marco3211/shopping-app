import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import CreateListCard from '../components/CreateListCard'
import ListCard from '../components/ListCard'
import { updateListsInDB } from '../utils/indexedDB'

const Home = () => {
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return
  
    const reorderedLists = Array.from(lists)
    const [movedList] = reorderedLists.splice(result.source.index, 1)
    reorderedLists.splice(result.destination.index, 0, movedList)
  
    // Save the new order to IndexedDB
    await updateListsInDB(reorderedLists)
  
    // Dispatch an action to update the order in the store
    dispatch({ type: 'REORDER_LISTS', payload: reorderedLists })
  } 

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={"lists"} direction="horizontal">
        {(provided) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          > 
            <CreateListCard /> 
            {lists && lists.map((list, index) => (
              <Draggable key={list.name} draggableId={list.name} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ListCard list={list} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Home