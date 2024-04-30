"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/my-files";
exports.ids = ["pages/api/my-files"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/my-files.js":
/*!*******************************!*\
  !*** ./pages/api/my-files.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _src_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/src/db */ \"(api)/./src/db.js\");\n/* harmony import */ var _src_models_MyFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/models/MyFile */ \"(api)/./src/models/MyFile.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    try {\n        await (0,_src_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n        const files = await _src_models_MyFile__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n        // await disconnectDB()\n        return res.status(200).json(files);\n    } catch (e) {\n        return res.status(500).json({\n            message: \"error fetching files\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbXktZmlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBRTVCO0FBQ0g7QUFFL0IsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsSUFBSTtRQUNILE1BQU1MLGtEQUFTQTtRQUNmLE1BQU1NLFFBQVEsTUFBTUosK0RBQWdCLENBQUMsQ0FBQztRQUN0Qyx1QkFBdUI7UUFDdkIsT0FBT0csSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7SUFDN0IsRUFBRSxPQUFPSSxHQUFHO1FBQ1gsT0FBT0wsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDRSxTQUFTO1FBQXNCO0lBQzdEO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGVyYm90Ly4vcGFnZXMvYXBpL215LWZpbGVzLmpzP2IwODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuaW1wb3J0IHtjb25uZWN0REIsIGRpc2Nvbm5lY3REQn0gZnJvbSBcIkAvc3JjL2RiXCI7XG5pbXBvcnQgTXlGaWxlTW9kZWwgZnJvbSBcIkAvc3JjL21vZGVscy9NeUZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHR0cnkge1xuXHRcdGF3YWl0IGNvbm5lY3REQigpXG5cdFx0Y29uc3QgZmlsZXMgPSBhd2FpdCBNeUZpbGVNb2RlbC5maW5kKHt9KVxuXHRcdC8vIGF3YWl0IGRpc2Nvbm5lY3REQigpXG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZpbGVzKVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHttZXNzYWdlOiAnZXJyb3IgZmV0Y2hpbmcgZmlsZXMnfSlcblx0fVxufVxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsImRpc2Nvbm5lY3REQiIsIk15RmlsZU1vZGVsIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/my-files.js\n");

/***/ }),

/***/ "(api)/./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectDB\": () => (/* binding */ connectDB),\n/* harmony export */   \"disconnectDB\": () => (/* binding */ disconnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        // If a connection is already established, reuse it\n        console.log(\"existing connection available\");\n        return;\n    }\n    const MONGO_URI = `mongodb+srv://adityasuryawanshi21:qObHGEK4HuERhOZP@intellidocs.cglclul.mongodb.net/?retryWrites=true&w=majority`;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, {\n            // Replace 'mydatabase' with your actual database name\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error.message);\n        process.exit(1); // Exit the Node.js process on connection error\n    }\n}\nasync function disconnectDB() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n        console.log(\"Disconnected from MongoDB\");\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUVoQyxlQUFlQyxZQUFZO0lBQ3pCLElBQUlELDJFQUFrQyxFQUFFO1FBQ3RDLG1EQUFtRDtRQUNuREksUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRixDQUFDO0lBRUYsTUFBTUMsWUFBWSxDQUFDLCtHQUErRyxDQUFDO0lBRWxJLElBQUk7UUFDRixNQUFNTix1REFBZ0IsQ0FBQ00sV0FBVztZQUNoQyxzREFBc0Q7WUFDdERFLGlCQUFpQixJQUFJO1lBQ3JCQyxvQkFBb0IsSUFBSTtRQUMxQjtRQUNBTCxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9LLE9BQU87UUFDZE4sUUFBUU0sS0FBSyxDQUFDLGdDQUFnQ0EsTUFBTUMsT0FBTztRQUMzREMsUUFBUUMsSUFBSSxDQUFDLElBQUksK0NBQStDO0lBQ2xFO0FBQ0Y7QUFFQSxlQUFlQyxlQUFlO0lBQzVCLElBQUlkLDJFQUFrQyxFQUFFO1FBQ3RDLE1BQU1BLDBEQUFtQjtRQUN6QkksUUFBUUMsR0FBRyxDQUFDO0lBQ2QsQ0FBQztBQUNIO0FBRW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFwZXJib3QvLi9zcmMvZGIuanM/MGNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSB7XG4gICAgLy8gSWYgYSBjb25uZWN0aW9uIGlzIGFscmVhZHkgZXN0YWJsaXNoZWQsIHJldXNlIGl0XG4gICAgY29uc29sZS5sb2coJ2V4aXN0aW5nIGNvbm5lY3Rpb24gYXZhaWxhYmxlJylcbiAgICByZXR1cm47XG4gIH1cblxuXHRjb25zdCBNT05HT19VUkkgPSBgbW9uZ29kYitzcnY6Ly9hZGl0eWFzdXJ5YXdhbnNoaTIxOnFPYkhHRUs0SHVFUmhPWlBAaW50ZWxsaWRvY3MuY2dsY2x1bC5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuXG4gIHRyeSB7XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkksIHtcbiAgICAgIC8vIFJlcGxhY2UgJ215ZGF0YWJhc2UnIHdpdGggeW91ciBhY3R1YWwgZGF0YWJhc2UgbmFtZVxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7IC8vIEV4aXQgdGhlIE5vZGUuanMgcHJvY2VzcyBvbiBjb25uZWN0aW9uIGVycm9yXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdERCKCkge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcbiAgICBjb25zb2xlLmxvZygnRGlzY29ubmVjdGVkIGZyb20gTW9uZ29EQicpO1xuICB9XG59XG5cbmV4cG9ydCB7IGNvbm5lY3REQiwgZGlzY29ubmVjdERCIH07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiTU9OR09fVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImVycm9yIiwibWVzc2FnZSIsInByb2Nlc3MiLCJleGl0IiwiZGlzY29ubmVjdERCIiwiZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/db.js\n");

/***/ }),

/***/ "(api)/./src/models/MyFile.js":
/*!******************************!*\
  !*** ./src/models/MyFile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Schema = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema);\nconst MyFileSchema = new Schema({\n    fileName: {\n        type: String,\n        required: [\n            true,\n            \"Filename is a required field.\"\n        ],\n        trim: true,\n        maxLength: 100,\n        unique: true\n    },\n    fileUrl: {\n        type: String,\n        required: [\n            true,\n            \"File Url is a required field.\"\n        ],\n        trim: true,\n        maxLength: 100,\n        unique: true\n    },\n    isProcessed: {\n        type: Boolean,\n        default: false\n    },\n    vectorIndex: {\n        type: String,\n        maxLength: 100,\n        unique: true,\n        required: false\n    }\n}, {\n    timestamps: true\n});\nconst MyFileModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.myFile) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"myFile\", MyFileSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyFileModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL015RmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsU0FBU0Qsd0RBQWU7QUFFOUIsTUFBTUUsZUFBZSxJQUFJRCxPQUFPO0lBQzlCRSxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBZ0M7UUFDakRDLE1BQU0sSUFBSTtRQUNWQyxXQUFXO1FBQ1hDLFFBQVEsSUFBSTtJQUNkO0lBQ0FDLFNBQVM7UUFDUE4sTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUFnQztRQUNqREMsTUFBTSxJQUFJO1FBQ1ZDLFdBQVc7UUFDWEMsUUFBUSxJQUFJO0lBQ2Q7SUFDQUUsYUFBYTtRQUNYUCxNQUFNUTtRQUNOQyxTQUFTLEtBQUs7SUFDaEI7SUFDQUMsYUFBYTtRQUNYVixNQUFNQztRQUNORyxXQUFXO1FBQ1hDLFFBQVEsSUFBSTtRQUNaSCxVQUFVLEtBQUs7SUFDakI7QUFDRixHQUFHO0lBQ0RTLFlBQVksSUFBSTtBQUNsQjtBQUVBLE1BQU1DLGNBQWNoQiwrREFBc0IsSUFBSUEscURBQWMsQ0FBQyxVQUFVRTtBQUd2RSxpRUFBZWMsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGVyYm90Ly4vc3JjL21vZGVscy9NeUZpbGUuanM/NmNjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxuY29uc3QgTXlGaWxlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGZpbGVOYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0ZpbGVuYW1lIGlzIGEgcmVxdWlyZWQgZmllbGQuJ10sXG4gICAgdHJpbTogdHJ1ZSxcbiAgICBtYXhMZW5ndGg6IDEwMCxcbiAgICB1bmlxdWU6IHRydWUsXG4gIH0sXG4gIGZpbGVVcmw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRmlsZSBVcmwgaXMgYSByZXF1aXJlZCBmaWVsZC4nXSxcbiAgICB0cmltOiB0cnVlLFxuICAgIG1heExlbmd0aDogMTAwLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgfSxcbiAgaXNQcm9jZXNzZWQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICB2ZWN0b3JJbmRleDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBtYXhMZW5ndGg6IDEwMCxcbiAgICB1bmlxdWU6IHRydWUsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICB9LFxufSwge1xuICB0aW1lc3RhbXBzOiB0cnVlLFxufSk7XG5cbmNvbnN0IE15RmlsZU1vZGVsID0gbW9uZ29vc2UubW9kZWxzLm15RmlsZSB8fCBtb25nb29zZS5tb2RlbCgnbXlGaWxlJywgTXlGaWxlU2NoZW1hKTtcblxuXG5leHBvcnQgZGVmYXVsdCBNeUZpbGVNb2RlbDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJNeUZpbGVTY2hlbWEiLCJmaWxlTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhMZW5ndGgiLCJ1bmlxdWUiLCJmaWxlVXJsIiwiaXNQcm9jZXNzZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInZlY3RvckluZGV4IiwidGltZXN0YW1wcyIsIk15RmlsZU1vZGVsIiwibW9kZWxzIiwibXlGaWxlIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/models/MyFile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/my-files.js"));
module.exports = __webpack_exports__;

})();