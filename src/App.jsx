import "./App.css";
import { LargeListBook } from "./components/list/books/LargeListItems";
import { Modal } from "./components/modal/Modal";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <LargeListBook book={books[0]} />
      </Modal>
      {/* <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComponent />
        <RightSideComponent />
      </SplitScreen>
      <hr />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallListAuthor}
      />
      <hr />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeListAuthor}
      />
      <hr />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallListBook}
      />
      <hr />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={LargeListBook}
      /> */}
    </>
  );
}

export default App;
