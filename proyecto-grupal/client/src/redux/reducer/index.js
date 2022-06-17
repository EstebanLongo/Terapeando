
import {
  GET_ALL_USERCLIENTS,
  GET_USERCLIENT,
  GET_USER_CLIENTS_BY_NAME,
  CREATE_CLIENT,
  GET_ALL_PSYCHOLOGIST,
  GET_USER_PSYCHOLOGISTS_BY_NAME,
  CLEAR_PSYCHOLOGIST_LIST,
  FILTER_PSICHOLOGIST_BY_SPECIALTIES,
  ORDER_PSICHOLOGIST_BY_RATING,
  GET_POSTS,
  CLEAR_CLIENT,
  CLEAR_PSYCHOLOGIST,
  CLEAR_CLIENT_LIST,
  ADMIN_SEARCHBAR
} from "../actions/types";

const initialState = {
  userPsichologistDetail: {},
  allUsersPsichologists: [], // actual 
  UserPsichologists: [], // nuevo
  userClientDetail: [],
  usersClients: [],
  posts: [],
  postsCopy: [],
  categories: [],
  postDetail: {},
  schedule: {},
  email: {},
  adminSearchbar: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    /*-----------CLIENTS-----------*/
    case GET_ALL_USERCLIENTS:
      return {
        ...state,
        usersClients: action.payload,
      };
    case GET_USER_CLIENTS_BY_NAME:
      return {
        ...state,
        usersClients: action.payload,
      };
    case GET_USERCLIENT:
      return {
        ...state,
        userClientDetail: action.payload,
      };
    case CREATE_CLIENT:
      return {
        ...state,
        posts: action.payload,
        postsCopy: action.payload,
      };

    /*-----------PSYCHOLOGISTS-----------*/
    case GET_ALL_PSYCHOLOGIST:
      return {
        ...state,
        allUsersPsichologists: action.payload,
      };
    case GET_USER_PSYCHOLOGISTS_BY_NAME:
      return {
        ...state,
        allUsersPsichologists: action.payload,
      };

    case "FILTER_POSTS_BY_AUTHOR":
      const filterPost = state.postsCopy;
      //filterByAuthor = array de obj con first y last Name
      const actFiltered =
        action.payload === "All"
          ? filterPost
          : filterPost.filter(
              (a) => a.firstName + a.lastName === action.payload
            );
      return {
        ...state,
        posts: actFiltered,
      };

    case "GET_POSTS_AUTHORS":
      return {
        ...state,
        allUsersPsichologists: action.payload,
      };
    case "SEARCH_POSTS_BY_TITLE":
    case "GET_PSYCHOLOGISTS_ONE":
      return {
        ...state,
        userPsichologistDetail: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_BY_CATEGORY_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "CLEAR_POST_DETAIL":
      return {
        ...state,
        postDetail: {},
        posts: [],
      }
    case "CREATE_PSYCHOLOGIST":
      return {
        ...state,
      };
    case "GET_EMAIL_PSY":
      return {
        ...state,
        email: action.payload,
      };
    case FILTER_PSICHOLOGIST_BY_SPECIALTIES:
      const psichologists = state.UserPsichologists
      const filterBySpecialties = psichologists.filter(el => {
        let specialties = el.Specialties.map(el => el)
        return specialties.includes(action.payload)
      })
      return {
        ...state,
        allUsersPsichologists: action.payload === "Todas" ? psichologists : filterBySpecialties,
      };
    case ORDER_PSICHOLOGIST_BY_RATING:

      return {
        ...state,
        allUsersPsichologists: action.payload
      }

    /*-----------POSTS-----------*/
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case "GET_POST_DETAIL":
      return {
        ...state,
        postDetail: action.payload,
      };
    case "ORDER_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "SEARCH_POSTS_BY_TITLE":
      return {
        ...state,
        posts: action.payload,
      };
    case "CLEAR_POST_DETAIL":
      return {
        ...state,
        postDetail: {},
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_BY_CATEGORY_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "DELETE_POST":
      return{
          ...state,
          posts: state.posts.filter(posts => posts.id !== action.payload)
      }

    /*-----------CLEAR-----------*/
    case CLEAR_CLIENT:
      return {
        ...state,
        userClientDetail: [],
      };
    case CLEAR_PSYCHOLOGIST:
      return {
        ...state,
        userPsichologistDetail: {},
      };
    case CLEAR_CLIENT_LIST:
      return {
        ...state,
        allUsersPsichologists: [],
      };
    case CLEAR_PSYCHOLOGIST_LIST:
      return {
        ...state,
        allUsersPsichologists: [],
      };
    case ADMIN_SEARCHBAR:
      return {
        ...state,
        adminSearchbar: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
