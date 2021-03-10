module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "55Ev":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_BUCKET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_BUCKET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_BUCKET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_BUCKET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_BUCKET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_BUCKET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REMOVE_BUCKET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REMOVE_BUCKET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_BUCKET_FAILURE; });
/* unused harmony export LOG_OUT_REQUEST */
/* unused harmony export LOG_OUT_SUCCESS */
/* unused harmony export LOG_OUT_FAILURE */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
 //bucket 더미 데이터

const initialState = {
  bucket: [],
  addBucketLoading: false,
  addBucketDone: false,
  addBucketError: null,
  loadBucketLoading: false,
  loadBucketDone: false,
  loadBucketError: null,
  removeBucketLoading: false,
  removeBucketDone: false,
  removeBucketError: null
};
const LOAD_BUCKET_REQUEST = 'LOAD_BUCKET_REQUEST'; // 액션의 이름

const LOAD_BUCKET_SUCCESS = 'LOAD_BUCKET_SUCCESS'; // 액션의 이름

const LOAD_BUCKET_FAILURE = 'LOAD_BUCKET_FAILURE'; // 액션의 이름

const ADD_BUCKET_REQUEST = 'ADD_BUCKET_REQUEST'; // 액션의 이름

const ADD_BUCKET_SUCCESS = 'ADD_BUCKET_SUCCESS'; // 액션의 이름

const ADD_BUCKET_FAILURE = 'ADD_BUCKET_FAILURE'; // 액션의 이름

const REMOVE_BUCKET_REQUEST = 'REMOVE_BUCKET_REQUEST'; // 액션의 이름

const REMOVE_BUCKET_SUCCESS = 'REMOVE_BUCKET_SUCCESS'; // 액션의 이름

const REMOVE_BUCKET_FAILURE = 'REMOVE_BUCKET_FAILURE'; // 액션의 이름

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름

const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름

const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름
//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case LOAD_BUCKET_REQUEST:
      {
        draft.loadBucketDone = false;
        draft.loadBucketLoading = true;
        draft.loadBucketError = null;
        break;
      }

    case LOAD_BUCKET_SUCCESS:
      {
        draft.bucket = action.data;
        draft.loadBucketDone = true;
        draft.loadBucketLoading = false;
        break;
      }

    case LOAD_BUCKET_FAILURE:
      {
        draft.loadBucketLoading = false;
        draft.loadBucketError = action.error;
        break;
      }

    case ADD_BUCKET_REQUEST:
      {
        draft.addBucketDone = false;
        draft.addBucketLoading = true;
        draft.addBucketError = null;
        break;
      }

    case ADD_BUCKET_SUCCESS:
      {
        draft.bucket.push(action.data);
        draft.addBucketDone = true;
        draft.addBucketLoading = false;
        break;
      }

    case ADD_BUCKET_FAILURE:
      {
        draft.addBucketLoading = false;
        draft.addBucketError = action.error;
        break;
      }

    case REMOVE_BUCKET_REQUEST:
      {
        draft.removeBucketDone = false;
        draft.removeBucketLoading = true;
        draft.removeBucketError = null;
        break;
      }

    case REMOVE_BUCKET_SUCCESS:
      {
        draft.bucket = draft.bucket.filter(v => v.id !== action.data.id);
        draft.removeBucketDone = true;
        draft.removeBucketLoading = false;
        break;
      }

    case REMOVE_BUCKET_FAILURE:
      {
        draft.removeBucketLoading = false;
        draft.removeBucketError = action.error;
        break;
      }

    case LOG_OUT_REQUEST:
      {
        console.log("LOG_OUT_REQUEST"); //draft.bucket = null;

        break;
      }
  }
});

/* harmony default export */ __webpack_exports__["j"] = (reducer);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vL9u");


/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/calendar.js
var calendar = __webpack_require__("a+/U");

// EXTERNAL MODULE: ./reducers/bucket.js
var bucket = __webpack_require__("55Ev");

// EXTERNAL MODULE: ./reducers/diary.js
var diary = __webpack_require__("Eyha");

// CONCATENATED MODULE: ./reducers/index.js







const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      {
        console.log('HYDRATE', action);
        return action.payload;
      }

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: user["q" /* default */],
          calendar: calendar["i" /* default */],
          bucket: bucket["j" /* default */],
          diary: diary["t" /* default */]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/user.js





function logInAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      type: user["f" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["d" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: user["i" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: user["g" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return external_axios_default.a.post('/user/signup', data);
}

function* signUp(action) {
  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      type: user["m" /* SIGN_UP_SUCCESS */]
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["j" /* SIGN_UP_FAILURE */],
      error: error.response.data
    });
  }
}

function upDateAPI(data) {
  return external_axios_default.a.put('/user/update', data);
}

function* upDate(action) {
  try {
    const result = yield Object(effects_["call"])(upDateAPI, action.data);
    yield Object(effects_["put"])({
      type: user["p" /* UPDATE_USER_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["n" /* UPDATE_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function loadMyInfoAPI() {
  return external_axios_default.a.get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: user["c" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["a" /* LOAD_MY_INFO_FAILURE */],
      error: error.response.data
    });
  }
} // LogIn


function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["e" /* LOG_IN_REQUEST */], logIn);
} // LogOut


function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["h" /* LOG_OUT_REQUEST */], logOut);
} //Sign Up


function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["k" /* SIGN_UP_REQUEST */], signUp);
} //Update


function* watchUpdate() {
  yield Object(effects_["takeLatest"])(user["o" /* UPDATE_USER_REQUEST */], upDate);
} //Load My Info


function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["b" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* usersSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchUpdate), Object(effects_["fork"])(watchLoadMyInfo)]);
}
// CONCATENATED MODULE: ./sagas/diary.js




function uplodaImagesAPI(data) {
  return external_axios_default.a.post('/diary/images', data);
}

function* uplodaImages(action) {
  try {
    const result = yield Object(effects_["call"])(uplodaImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: diary["s" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: diary["q" /* UPLOAD_IMAGES_FAILURE */],
      error: error.response.data
    });
  }
}

function addDiaryAPI(data) {
  return external_axios_default.a.post('/diary', data);
}

function* addDiary(action) {
  try {
    const result = yield Object(effects_["call"])(addDiaryAPI, action.data);
    yield Object(effects_["put"])({
      type: diary["c" /* ADD_DIARY_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: diary["a" /* ADD_DIARY_FAILURE */],
      error: error.response.data
    });
  }
}

function updateDiaryAPI(data) {
  return external_axios_default.a.put('/diary/update', data);
}

function* updateDiary(action) {
  try {
    const result = yield Object(effects_["call"])(updateDiaryAPI, action.data);
    yield Object(effects_["put"])({
      type: diary["o" /* UPDATE_DIARY_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: diary["m" /* UPDATE_DIARY_FAILURE */],
      error: error.response.data
    });
  }
}

function loadDiaryAPI(data) {
  return external_axios_default.a.post('/diary/load', data);
}

function* loadDiary(action) {
  try {
    const result = yield Object(effects_["call"])(loadDiaryAPI, action.data);
    yield Object(effects_["put"])({
      type: diary["k" /* LOAD_DIARY_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: diary["i" /* LOAD_DIARY_FAILURE */],
      error: error.response.data
    });
  }
}

function deleteDiaryAPI(data) {
  return external_axios_default.a.delete(`/diary/${data}`);
}

function* deleteDiary(action) {
  try {
    const result = yield Object(effects_["call"])(deleteDiaryAPI, action.data);
    yield Object(effects_["put"])({
      type: diary["g" /* DELETE_DIARY_SUCCESS */]
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: diary["d" /* DELETE_DIARY_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(diary["r" /* UPLOAD_IMAGES_REQUEST */], uplodaImages);
}

function* watchAddDiary() {
  yield Object(effects_["takeLatest"])(diary["b" /* ADD_DIARY_REQUEST */], addDiary);
}

function* watchLoadDiary() {
  yield Object(effects_["takeLatest"])(diary["j" /* LOAD_DIARY_REQUEST */], loadDiary);
}

function* watchDeleteDiary() {
  yield Object(effects_["takeLatest"])(diary["e" /* DELETE_DIARY_REQUEST */], deleteDiary);
}

function* watchUpdateDiary() {
  yield Object(effects_["takeLatest"])(diary["n" /* UPDATE_DIARY_REQUEST */], updateDiary);
}

function* diarySaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchAddDiary), Object(effects_["fork"])(watchLoadDiary), Object(effects_["fork"])(watchDeleteDiary), Object(effects_["fork"])(watchUpdateDiary)]);
}
// CONCATENATED MODULE: ./sagas/calendar.js




function addCalendarAPI(data) {
  return external_axios_default.a.post('/calendar', data);
}

function* addCalendar(action) {
  try {
    const result = yield Object(effects_["call"])(addCalendarAPI, action.data);
    yield Object(effects_["put"])({
      type: calendar["c" /* ADD_CALENDAR_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: calendar["a" /* ADD_CALENDAR_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchAddCalendar() {
  yield Object(effects_["takeLatest"])(calendar["b" /* ADD_CALENDAR_REQUEST */], addCalendar);
}

function loadCalendarAPI(data) {
  return external_axios_default.a.get('/calendar');
}

function* loadCalendar(action) {
  try {
    const result = yield Object(effects_["call"])(loadCalendarAPI, action.data);
    yield Object(effects_["put"])({
      type: calendar["e" /* LOAD_CALENDAR_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: calendar["a" /* ADD_CALENDAR_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchLoadCalendar() {
  yield Object(effects_["takeLatest"])(calendar["d" /* LOAD_CALENDAR_REQUEST */], loadCalendar);
}

function removeCalendarAPI(data) {
  return external_axios_default.a.delete(`/calendar/${data.id}`);
}

function* removeCalendar(action) {
  try {
    const result = yield Object(effects_["call"])(removeCalendarAPI, action.data);
    yield Object(effects_["put"])({
      type: calendar["h" /* REMOVE_CALENDAR_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: calendar["f" /* REMOVE_CALENDAR_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchRemoveCalendar() {
  yield Object(effects_["takeLatest"])(calendar["g" /* REMOVE_CALENDAR_REQUEST */], removeCalendar);
}

function* calendarSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddCalendar), Object(effects_["fork"])(watchLoadCalendar), Object(effects_["fork"])(watchRemoveCalendar)]);
}
// CONCATENATED MODULE: ./sagas/bucket.js




function addBucketAPI(data) {
  return external_axios_default.a.post('/bucket', data);
}

function* addBucket(action) {
  try {
    const result = yield Object(effects_["call"])(addBucketAPI, action.data);
    yield Object(effects_["put"])({
      type: bucket["c" /* ADD_BUCKET_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: bucket["a" /* ADD_BUCKET_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchAddBucket() {
  yield Object(effects_["takeLatest"])(bucket["b" /* ADD_BUCKET_REQUEST */], addBucket);
}

function removebucketAPI(data) {
  return external_axios_default.a.delete(`/bucket/${data}`);
}

function* removeBucket(action) {
  try {
    const result = yield Object(effects_["call"])(removebucketAPI, action.data);
    yield Object(effects_["put"])({
      type: bucket["i" /* REMOVE_BUCKET_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: bucket["g" /* REMOVE_BUCKET_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchRemoveBucket() {
  yield Object(effects_["takeLatest"])(bucket["h" /* REMOVE_BUCKET_REQUEST */], removeBucket);
}

function loadBucketAPI() {
  return external_axios_default.a.get("/bucket");
}

function* loadBucket() {
  try {
    const result = yield Object(effects_["call"])(loadBucketAPI);
    yield Object(effects_["put"])({
      type: bucket["f" /* LOAD_BUCKET_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: bucket["d" /* LOAD_BUCKET_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchLoadBucket() {
  yield Object(effects_["takeLatest"])(bucket["e" /* LOAD_BUCKET_REQUEST */], loadBucket);
}

function* bucketSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddBucket), Object(effects_["fork"])(watchLoadBucket), Object(effects_["fork"])(watchRemoveBucket)]);
}
// CONCATENATED MODULE: ./sagas/index.js






external_axios_default.a.defaults.baseURL = 'http://localhost:3065';
external_axios_default.a.defaults.withCredentials = true; //브라우저에서 포트가 다른 백엔드 서버로 쿠키를 넘기기 위함.

function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(usersSaga), Object(effects_["fork"])(diarySaga), Object(effects_["fork"])(calendarSaga), Object(effects_["fork"])(bucketSaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.js







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Eyha":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return UPDATE_DIARY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UPDATE_DIARY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return UPDATE_DIARY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UPDATE_REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_DIARY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DELETE_DIARY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_DIARY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE_DIARY_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_DIARY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_DIARY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_DIARY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_DIARY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_DIARY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_DIARY_FAILURE; });
/* unused harmony export LOG_OUT_REQUEST */
/* unused harmony export LOG_OUT_SUCCESS */
/* unused harmony export LOG_OUT_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DIARY_ERROR_RESET; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
 //bucket 더미 데이터

const initialState = {
  post: {
    Images: []
  },
  imagePaths: [],
  removeImage: [],
  updateDiaryLoading: false,
  updateDiaryDone: false,
  updateDiaryError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  addDiaryLoading: false,
  addDiaryDone: false,
  addDiaryError: null,
  loadDiaryLoading: false,
  loadDiaryDone: false,
  loadDiaryError: null,
  deleteDiaryLoading: false,
  deleteDiaryDone: false,
  deleteDiaryError: null
};
const UPDATE_DIARY_REQUEST = 'UPDATE_DIARY_REQUEST'; // 액션의 이름

const UPDATE_DIARY_SUCCESS = 'UPDATE_DIARY_SUCCESS'; // 액션의 이름

const UPDATE_DIARY_FAILURE = 'UPDATE_DIARY_FAILURE'; // 액션의 이름

const UPDATE_REMOVE_IMAGE = "UPDATE_REMOVE_IMAGE";
const DELETE_DIARY_REQUEST = 'DELETE_DIARY_REQUEST'; // 액션의 이름

const DELETE_DIARY_SUCCESS = 'DELETE_DIARY_SUCCESS'; // 액션의 이름

const DELETE_DIARY_FAILURE = 'DELETE_DIARY_FAILURE';
const DELETE_DIARY_RESET = 'DELETE_DIARY_RESET';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST'; // 액션의 이름

const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS'; // 액션의 이름

const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE'; // 액션의 이름

const LOAD_DIARY_REQUEST = 'LOAD_DIARY_REQUEST'; // 액션의 이름

const LOAD_DIARY_SUCCESS = 'LOAD_DIARY_SUCCESS'; // 액션의 이름

const LOAD_DIARY_FAILURE = 'LOAD_DIARY_FAILURE'; // 액션의 이름

const ADD_DIARY_REQUEST = 'ADD_DIARY_REQUEST'; // 액션의 이름

const ADD_DIARY_SUCCESS = 'ADD_DIARY_SUCCESS'; // 액션의 이름

const ADD_DIARY_FAILURE = 'ADD_DIARY_FAILURE'; // 액션의 이름

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름

const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름

const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름

const REMOVE_IMAGE = 'REMOVE_IMAGE';
const DIARY_ERROR_RESET = 'DIARY_ERROR_ERSET'; //현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case UPDATE_DIARY_REQUEST:
      {
        draft.updateDiaryLoading = true;
        draft.updateDiaryDone = false;
        draft.updateDiaryError = null;
        break;
      }

    case UPDATE_DIARY_SUCCESS:
      {
        draft.updateDiaryLoading = false;
        draft.updateDiaryDone = true;
        draft.post = action.data;
        draft.removeImage = [];
        draft.imagePaths = [];
        break;
      }

    case UPDATE_DIARY_FAILURE:
      {
        draft.updateDiaryLoading = false;
        draft.updateDiaryError = action.error;
        break;
      }

    case DELETE_DIARY_RESET:
      {
        draft.deleteDiaryDone = false;
      }

    case DELETE_DIARY_REQUEST:
      {
        draft.deleteDiaryLoading = true;
        draft.deleteDiaryDone = false;
        draft.deleteDiaryError = null;
        break;
      }

    case DELETE_DIARY_SUCCESS:
      {
        draft.post = {
          Images: []
        };
        draft.imagePaths = [];
        draft.deleteDiaryLoading = false;
        draft.deleteDiaryDone = true;
        break;
      }

    case DELETE_DIARY_FAILURE:
      {
        draft.deleteDiaryLoading = false;
        draft.deleteDiaryError = action.error;
        break;
      }

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case LOG_OUT_SUCCESS:
      //Logout - Reset DiaryData
      draft.post = {
        Images: []
      };
      draft.imagePaths = [];
      break;

    case UPLOAD_IMAGES_REQUEST:
      {
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      }

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      {
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      }

    case LOAD_DIARY_REQUEST:
      {
        draft.loadDiaryLoading = true;
        draft.loadDiaryDone = false;
        draft.loadDiaryError = null;
        break;
      }

    case LOAD_DIARY_SUCCESS:
      {
        draft.loadDiaryLoading = false;
        draft.loadDiaryDone = true;
        draft.post = action.data;
        break;
      }

    case LOAD_DIARY_FAILURE:
      {
        draft.loadDiaryLoading = false;
        draft.loadDiaryError = action.error;
        break;
      }

    case ADD_DIARY_REQUEST:
      {
        draft.addDiaryLoading = true;
        draft.addDiaryDone = false;
        draft.addDiaryError = null;
        break;
      }

    case ADD_DIARY_SUCCESS:
      {
        draft.addDiaryLoading = false;
        draft.addDiaryDone = true;
        draft.post = action.data;
        break;
      }

    case ADD_DIARY_FAILURE:
      {
        draft.addDiaryLoading = false;
        draft.addDiaryError = action.error;
        break;
      }

    case UPDATE_REMOVE_IMAGE:
      {
        draft.removeImage.push(action.data);
        break;
      }

    case DIARY_ERROR_RESET:
      {
        draft.updateDiaryError = null;
        draft.uploadImagesError = null;
        draft.addDiaryError = null;
        draft.loadDiaryError = null;
        draft.deleteDiaryError = null;
        break;
      }
  }
});

/* harmony default export */ __webpack_exports__["t"] = (reducer);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UPDATE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UPDATE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return UPDATE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SIGN_UP_RESET; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");

const initialState = {
  isLoggedIn: false,
  // Log or Not Log
  isLogLoading: false,
  // Login Lodaing
  isLogError: null,
  //LogIn Error
  isSignUpDone: false,
  // Sign Up Done
  isSignUpLoading: false,
  // Sign Up Loading
  isSignUpError: null,
  // Sign Up Error
  isUpdateDone: false,
  // UPdate Done
  isUpdateLoading: false,
  // UPdate Loading
  isUpdateError: null,
  // UPdate Error
  isLoadMyInfoDone: false,
  // Load My Info Done
  isLoadMyInfoLoading: false,
  // Load My Info Loading
  isLoadMyInfoError: null,
  // Load My Info Error
  user: null // User Info

};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST'; // 액션의 이름

const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS'; // 액션의 이름

const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE'; // 액션의 이름

const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'; // 액션의 이름

const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'; // 액션의 이름

const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'; // 액션의 이름

const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름

const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름

const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름

const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름

const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; // 액션의 이름

const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; // 액션의 이름

const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; // 액션의 이름

const SIGN_UP_RESET = 'SIGN_UP_RESET'; // 액션의 이름

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    // Load My Info
    case LOAD_MY_INFO_REQUEST:
      {
        draft.isLoadMyInfoLoading = true; // LoadMyInfo Loading On

        draft.isLoadMyInfoError = null;
        draft.isLoadMyInfoDone = false;
        break;
      }

    case LOAD_MY_INFO_SUCCESS:
      {
        draft.isLoadMyInfoLoading = false; //LoadMyInfo Loading Off

        draft.isLoadMyInfoDone = true;
        draft.user = action.data; // IsUser -> Insert User Data, Not -> Insert Null

        if (action.data != null) {
          draft.isLoggedIn = true;
        }

        break;
      }

    case LOAD_MY_INFO_FAILURE:
      {
        draft.isLoadMyInfoLoading = false; //LoadMyInfo Loading Off

        draft.isLoadMyInfoError = action.error; // Error Insert

        break;
      }
    // Update

    case UPDATE_USER_REQUEST:
      {
        draft.isUpdateLoading = true; // Update Loading On

        break;
      }

    case UPDATE_USER_SUCCESS:
      {
        draft.isUpdateLoading = false; //Update Loading Off

        draft.user = action.data; // UserData Insert

        break;
      }

    case UPDATE_USER_FAILURE:
      {
        draft.isUpdateLoading = false; //Update Loading Off

        draft.isUpdateError = action.error; // Error Insert

        break;
      }
    // Login

    case LOG_IN_REQUEST:
      {
        draft.isLogLoading = true; // LogIn Loading On

        break;
      }

    case LOG_IN_SUCCESS:
      {
        draft.isLogLoading = false; //LogIn Loading Off

        draft.isLoggedIn = true; //LogIn Done

        draft.user = action.data; // UserData Insert

        break;
      }

    case LOG_IN_FAILURE:
      {
        draft.isLogLoading = false; //LogIn Loading Off

        draft.isLogError = action.error; // Error Insert

        break;
      }
    // Logout

    case LOG_OUT_REQUEST:
      {
        draft.isLogLoading = true; // LogIn Loading On

        break;
      }

    case LOG_OUT_SUCCESS:
      {
        draft.isLogLoading = false; //LogIn Loading Off

        draft.isLoggedIn = false; //LogIn Done

        draft.user = null; // UserData Insert

        break;
      }

    case LOG_OUT_FAILURE:
      {
        draft.isLogLoading = false; //LogIn Loading Off

        draft.isLogError = action.data; // Error Insert

        break;
      }
    // Sign Up

    case SIGN_UP_REQUEST:
      {
        draft.isSignUpLoading = true; // SignUp Loading On

        draft.isSignUpError = null; // SignUp Error Null

        break;
      }

    case SIGN_UP_SUCCESS:
      {
        draft.isSignUpDone = true; // SignUp Done On

        draft.isSignUpLoading = false; //SignUp Loading Off

        break;
      }

    case SIGN_UP_FAILURE:
      {
        draft.isSignUpLoading = false; //SignUp Loading Off

        draft.isSignUpError = action.error; // Error Insert

        break;
      }

    case SIGN_UP_RESET:
      {
        draft.isSignUpDone = false; //SignUp Done Null

        break;
      }
  }
});

/* harmony default export */ __webpack_exports__["q"] = (reducer);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "a+/U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_CALENDAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_CALENDAR_SUCCESS; });
/* unused harmony export LOAD_CALENDAR_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_CALENDAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_CALENDAR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CALENDAR_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_CALENDAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REMOVE_CALENDAR_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_CALENDAR_FAILURE; });
/* unused harmony export LOG_OUT_REQUEST */
/* unused harmony export LOG_OUT_SUCCESS */
/* unused harmony export LOG_OUT_FAILURE */
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ionj");
 //calender 더미 데이터

const initialState = {
  calendar: [],
  addCalendarLoading: false,
  addCalendarDone: false,
  addCalendarError: null,
  loadCalendarLoading: false,
  loadCalendarDone: false,
  loadCalendarError: null,
  removeCalendarLoading: false,
  removeCalendarDone: false,
  removeCalendarError: null
};
const LOAD_CALENDAR_REQUEST = 'LOAD_CALENDAR_REQUEST'; // 액션의 이름

const LOAD_CALENDAR_SUCCESS = 'LOAD_CALENDAR_SUCCESS'; // 액션의 이름

const LOAD_CALENDAR_FAILURE = 'LOAD_CALENDAR_FAILURE'; // 액션의 이름

const ADD_CALENDAR_REQUEST = 'ADD_CALENDAR_REQUEST'; // 액션의 이름

const ADD_CALENDAR_SUCCESS = 'ADD_CALENDAR_SUCCESS'; // 액션의 이름

const ADD_CALENDAR_FAILURE = 'ADD_CALENDAR_FAILURE'; // 액션의 이름

const REMOVE_CALENDAR_REQUEST = 'REMOVE_CALENDAR_REQUEST'; // 액션의 이름

const REMOVE_CALENDAR_SUCCESS = 'REMOVE_CALENDAR_SUCCESS'; // 액션의 이름

const REMOVE_CALENDAR_FAILURE = 'REMOVE_CALENDAR_FAILURE'; // 액션의 이름

const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; // 액션의 이름

const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; // 액션의 이름

const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 액션의 이름
//현재는 REQUEST에서 SUCCESS역활까지 하고있음, saga작성 시 구분하기!

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(state, draft => {
  switch (action.type) {
    case ADD_CALENDAR_REQUEST:
      {
        draft.addCalendarDone = false;
        draft.addCalendarLoading = true;
        draft.addCalendarError = null;
        break;
      }

    case ADD_CALENDAR_SUCCESS:
      {
        draft.calendar.unshift(action.data);
        draft.addCalendarDone = true;
        draft.addCalendarLoading = false;
        break;
      }

    case ADD_CALENDAR_FAILURE:
      {
        draft.addCalendarLoading = false;
        draft.addCalendarError = action.error;
        break;
      }

    case LOAD_CALENDAR_REQUEST:
      {
        draft.loadCalendarDone = false;
        draft.loadCalendarLoading = true;
        draft.loadCalendarError = null;
        break;
      }

    case LOAD_CALENDAR_SUCCESS:
      {
        draft.calendar = action.data;
        draft.loadCalendarDone = true;
        draft.loadCalendarLoading = false;
        break;
      }

    case LOAD_CALENDAR_FAILURE:
      {
        draft.loadCalendarLoading = false;
        draft.loadCalendarError = action.error;
        break;
      }

    case REMOVE_CALENDAR_REQUEST:
      {
        draft.removeCalendarDone = false;
        draft.removeCalendarLoading = true;
        draft.removeCalendarError = null;
        break;
      }

    case REMOVE_CALENDAR_SUCCESS:
      {
        draft.calendar = draft.calendar.filter(v => v.id !== action.data.id);
        draft.removeCalendarDone = true;
        draft.removeCalendarLoading = false;
        break;
      }

    case REMOVE_CALENDAR_FAILURE:
      {
        draft.removeCalendarLoading = false;
        draft.removeCalendarError = action.error;
        break;
      }

    case LOG_OUT_REQUEST:
      {
        console.log("LOG_OUT_REQUEST"); //draft.calenda = null;

        break;
      }
  }
});

/* harmony default export */ __webpack_exports__["i"] = (reducer);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ionj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);


const pro = (...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
};

/* harmony default export */ __webpack_exports__["a"] = (pro);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__("TpwP");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// CONCATENATED MODULE: ./components/SignUp.js








const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SignUp__ButtonWrapper",
  componentId: "fugbur-0"
})(["margin-top:10px;"]);
const FormWrapper = external_styled_components_default()(external_antd_["Form"]).withConfig({
  displayName: "SignUp__FormWrapper",
  componentId: "fugbur-1"
})(["position:absolute;top:50%;left:50%;width:300px;margin:-100px 0 0 -150px;"]);

const LoginForm = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    isSignUpLoading,
    isSignUpError,
    isSignUpDone
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])('');
  const {
    0: nickname,
    1: setNickname
  } = Object(external_react_["useState"])('');
  const {
    0: birth,
    1: setBirth
  } = Object(external_react_["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(external_react_["useState"])('');
  Object(external_react_["useEffect"])(() => {
    if (isSignUpError) {
      alert(isSignUpError);
    }
  }, [isSignUpError]);
  Object(external_react_["useEffect"])(() => {
    if (isSignUpDone) {
      router_default.a.push('/');
      dispatch({
        type: user["l" /* SIGN_UP_RESET */]
      });
    }
  }, [isSignUpDone]);
  const onChangeEmail = Object(external_react_["useCallback"])(e => {
    setEmail(e.target.value);
  }, [email]);
  const onChangePassword = Object(external_react_["useCallback"])(e => {
    setPassword(e.target.value);
  }, [password]);
  const onChangeNickname = Object(external_react_["useCallback"])(e => {
    setNickname(e.target.value);
  }, [nickname]);
  const onChangeBirth = Object(external_react_["useCallback"])(e => {
    setBirth(e.target.value);
  }, [birth]);
  const onChangePhone = Object(external_react_["useCallback"])(e => {
    setPhone(e.target.value);
  }, [phone]); //로그인 액션 보내고 성공하면 로그인 주소로 Router.replace ㄱㄱ

  const onSubmitForm = Object(external_react_["useCallback"])(() => {
    console.log(email, password, nickname, birth, phone);
    dispatch({
      type: user["k" /* SIGN_UP_REQUEST */],
      data: {
        email,
        password,
        nickname
      }
    });
  }, [email, password, nickname, birth, phone]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FormWrapper, {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "user-email",
      children: "\uC774\uBA54\uC77C"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
      name: "user-email",
      placeholder: "exmple@mju.ac.kr",
      value: email,
      type: "email",
      onChange: onChangeEmail,
      required: true
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "user-password",
      children: "\uBE44\uBC00\uBC88\uD638"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
      name: "user-password",
      type: "password",
      value: password,
      onChange: onChangePassword,
      required: true
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "user-nickname",
      children: "\uB2C9\uB124\uC784"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
      name: "user-nickname",
      value: nickname,
      onChange: onChangeNickname
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "user-password",
      children: "\uC0DD\uB144\uC6D4\uC77C"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
      name: "user-birth",
      placeholder: "980427",
      maxLength: 6,
      value: birth,
      onChange: onChangeBirth
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "user-phone",
      children: "\uC5F0\uB77D\uCC98"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
      name: "user-phone",
      type: "tel",
      placeholder: "010-1234-5678",
      maxLength: 13,
      value: phone,
      onChange: onChangePhone
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonWrapper, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
        htmlType: "submit",
        loading: isSignUpLoading,
        children: "\uD68C\uC6D0\uAC00\uC785"
      })
    })]
  });
};

/* harmony default export */ var SignUp = (LoginForm);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");

// EXTERNAL MODULE: ./store/configureStore.js + 6 modules
var configureStore = __webpack_require__("AQn3");

// CONCATENATED MODULE: ./pages/signup.js











const CustomDiv = external_styled_components_default.a.div.withConfig({
  displayName: "signup__CustomDiv",
  componentId: "md2feb-0"
})(["position:absolute;top:0;left:0;width:100%;height:100%;background:url(https://images.unsplash.com/photo-1508253640504-9096edc75163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80);background-size:cover;"]);

const SignUpPage = () => {
  const {
    isLoggedIn
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  Object(external_react_["useEffect"])(() => {
    if (isLoggedIn) {
      router_default.a.push('/');
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return '로그인 확인중...';
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CustomDiv, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SignUp, {})
  });
}; //SSR 적용 - getServerSidProps 사용


const getServerSideProps = configureStore["a" /* default */].getServerSideProps(async context => {
  //Brower 에서 요청이 아닌 Front -> Back이므로 쿠키를 전달해줘야 한다.
  const cookie = context.req ? context.req.headers.cookie : '';
  external_axios_default.a.defaults.headers.Cookie = cookie; //요청 헤더에 쿠키 넣기.

  context.store.dispatch({
    type: user["b" /* LOAD_MY_INFO_REQUEST */]
  });
  context.store.dispatch(external_redux_saga_["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ var signup = __webpack_exports__["default"] = (SignUpPage);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });