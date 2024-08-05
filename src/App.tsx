import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  defaultLightTheme,
  defaultDarkTheme,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import BookIcon from "@mui/icons-material/Book";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import PostList from "./posts/PostList";
import PostEdit from "./posts/PostEdit";
import PostCreate from "./posts/PostCreate";

export const App = () => (
  <Admin layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    lightTheme={defaultLightTheme} darkTheme={defaultDarkTheme}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
show={ShowGuesser}
      recordRepresentation="title"
      icon={BookIcon}
/>
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
      icon={ChatBubbleIcon}
      />
      <Resource name="tags" recordRepresentation={tag => tag.name.es} />
      </Admin>
);
