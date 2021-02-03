import { combineReducers } from "redux";
import MemeReducer from "./meme_reducer";
import TemplateReducer from "./template_reducer";
import TagsReducer from "./tags_reducer";

const EntitiesReducer = combineReducers({
  memes: MemeReducer,
  templates: TemplateReducer,
  tags: TagsReducer,
});

export default EntitiesReducer;