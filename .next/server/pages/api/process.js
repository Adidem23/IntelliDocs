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
exports.id = "pages/api/process";
exports.ids = ["pages/api/process"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "pdfjs-dist/legacy/build/pdf":
/*!**********************************************!*\
  !*** external "pdfjs-dist/legacy/build/pdf" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("pdfjs-dist/legacy/build/pdf");

/***/ }),

/***/ "(api)/./pages/api/process.js":
/*!******************************!*\
  !*** ./pages/api/process.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist/legacy/build/pdf */ \"pdfjs-dist/legacy/build/pdf\");\n/* harmony import */ var pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_models_MyFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/models/MyFile */ \"(api)/./src/models/MyFile.js\");\n/* harmony import */ var _src_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/db */ \"(api)/./src/db.js\");\n/* harmony import */ var _src_openaiServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/openaiServices */ \"(api)/./src/openaiServices.js\");\n/* harmony import */ var _src_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/src/pinecone */ \"(api)/./src/pinecone.js\");\n\n\n\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(400).json({\n            message: \"http method not allowed\"\n        });\n    }\n    try {\n        // 2. connect to mongodb\n        await (0,_src_db__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n        // 3. query the file by id\n        const { id  } = req.body;\n        const myFile = await _src_models_MyFile__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n        if (!myFile) {\n            return res.status(400).json({\n                message: \"file not found\"\n            });\n        }\n        if (myFile.isProcessed) {\n            return res.status(400).json({\n                message: \"file is already processed\"\n            });\n        }\n        // 4. Read PDF and iterate through pages\n        let vectors = [];\n        console.log(myFile.fileUrl);\n        let myFiledata = await fetch(myFile.fileUrl);\n        if (myFiledata.ok) {\n            console.log(\"It is Going Inside This Function above PDF\");\n            let pdfDoc = await pdfjs_dist_legacy_build_pdf__WEBPACK_IMPORTED_MODULE_0__.getDocument(await myFiledata.arrayBuffer()).promise;\n            console.log(\"PDF is : \" + pdfDoc._pdfInfo);\n            const numPages = pdfDoc.numPages;\n            for(let i = 0; i < numPages; i++){\n                let page = await pdfDoc.getPage(i + 1);\n                // console.log(\"Single Page is : \" + page);\n                let textContent = await page.getTextContent();\n                // console.log(\"TextContent is : \" + textContent);\n                const text = textContent.items.map((item)=>item.str).join(\"\");\n                // console.log(\"Text is: \" + text);\n                // 5. Get embeddings for each page\n                const embedding = await (0,_src_openaiServices__WEBPACK_IMPORTED_MODULE_3__.getEmbeddings)(text);\n                console.log(\"Embeddings are : \" + embedding);\n                // 6. push to vector array\n                vectors.push({\n                    id: `page${i + 1}`,\n                    values: embedding,\n                    metadata: {\n                        pageNum: i + 1,\n                        text\n                    }\n                });\n            }\n            // 7. initialize pinecone\n            // await initialize() // initialize pinecone\n            // 8. connect to the index\n            const index = _src_pinecone__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Index(myFile.vectorIndex);\n            console.log(\"Index created are :  : \" + index);\n            // await index.upsert({\n            // \tupsertRequest: {\n            // \t\tvectors,\n            // \t}\n            // });\n            await index.upsert(vectors);\n            // 10. update mongodb with isProcessed to true\n            myFile.isProcessed = true;\n            await myFile.save();\n            // await disconnectDB()\n            // 11. return the response\n            return res.status(200).json({\n                message: \"File processed successfully\"\n            });\n        } else {\n            // await disconnectDB()\n            return res.status(500).json({\n                message: \"error getting file contents\"\n            });\n        }\n    } catch (e) {\n        console.log(\"Error is Occured : \" + e.message);\n        // await disconnectDB()\n        return res.status(500).json({\n            message: e.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0RSxDQUFDO0lBQ0YsRUFBRSxPQUFPd0MsR0FBRztRQUNYakMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QmdDLEVBQUV4QyxPQUFPO1FBQzdDLHVCQUF1QjtRQUN2QixPQUFPSixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVN3QyxFQUFFeEMsT0FBTztRQUFDO0lBQ2xEO0FBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhcGVyYm90Ly4vcGFnZXMvYXBpL3Byb2Nlc3MuanM/YTBkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQREZKUyBmcm9tICdwZGZqcy1kaXN0L2xlZ2FjeS9idWlsZC9wZGYnO1xuaW1wb3J0IE15RmlsZU1vZGVsIGZyb20gXCJAL3NyYy9tb2RlbHMvTXlGaWxlXCI7XG5pbXBvcnQgeyBjb25uZWN0REIsIGRpc2Nvbm5lY3REQiB9IGZyb20gXCJAL3NyYy9kYlwiO1xuaW1wb3J0IHsgZ2V0RW1iZWRkaW5ncyB9IGZyb20gXCJAL3NyYy9vcGVuYWlTZXJ2aWNlc1wiO1xuaW1wb3J0IHBpbmVjb25lLCB7IGluaXRpYWxpemUgfSBmcm9tIFwiQC9zcmMvcGluZWNvbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG5cdGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcblx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnaHR0cCBtZXRob2Qgbm90IGFsbG93ZWQnIH0pXG5cdH1cblxuXHR0cnkge1xuXHRcdC8vIDIuIGNvbm5lY3QgdG8gbW9uZ29kYlxuXHRcdGF3YWl0IGNvbm5lY3REQigpXG5cblx0XHQvLyAzLiBxdWVyeSB0aGUgZmlsZSBieSBpZFxuXHRcdGNvbnN0IHsgaWQgfSA9IHJlcS5ib2R5XG5cblx0XHRjb25zdCBteUZpbGUgPSBhd2FpdCBNeUZpbGVNb2RlbC5maW5kQnlJZChpZClcblxuXHRcdGlmICghbXlGaWxlKSB7XG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnZmlsZSBub3QgZm91bmQnIH0pXG5cdFx0fVxuXG5cdFx0aWYgKG15RmlsZS5pc1Byb2Nlc3NlZCkge1xuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ2ZpbGUgaXMgYWxyZWFkeSBwcm9jZXNzZWQnIH0pXG5cdFx0fVxuXG5cdFx0Ly8gNC4gUmVhZCBQREYgYW5kIGl0ZXJhdGUgdGhyb3VnaCBwYWdlc1xuXHRcdGxldCB2ZWN0b3JzID0gW11cblxuXHRcdGNvbnNvbGUubG9nKG15RmlsZS5maWxlVXJsKTtcblx0XHRsZXQgbXlGaWxlZGF0YSA9IGF3YWl0IGZldGNoKG15RmlsZS5maWxlVXJsKVxuXG5cdFx0aWYgKG15RmlsZWRhdGEub2spIHtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJJdCBpcyBHb2luZyBJbnNpZGUgVGhpcyBGdW5jdGlvbiBhYm92ZSBQREZcIilcblxuXHRcdFx0bGV0IHBkZkRvYyA9IGF3YWl0IFBERkpTLmdldERvY3VtZW50KGF3YWl0IG15RmlsZWRhdGEuYXJyYXlCdWZmZXIoKSkucHJvbWlzZTtcblx0XHRcdGNvbnNvbGUubG9nKFwiUERGIGlzIDogXCIgKyBwZGZEb2MuX3BkZkluZm8pO1xuXG5cdFx0XHRjb25zdCBudW1QYWdlcyA9IHBkZkRvYy5udW1QYWdlcztcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1QYWdlczsgaSsrKSB7XG5cblx0XHRcdFx0bGV0IHBhZ2UgPSBhd2FpdCBwZGZEb2MuZ2V0UGFnZShpICsgMSlcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJTaW5nbGUgUGFnZSBpcyA6IFwiICsgcGFnZSk7XG5cblx0XHRcdFx0bGV0IHRleHRDb250ZW50ID0gYXdhaXQgcGFnZS5nZXRUZXh0Q29udGVudCgpXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiVGV4dENvbnRlbnQgaXMgOiBcIiArIHRleHRDb250ZW50KTtcblxuXHRcdFx0XHRjb25zdCB0ZXh0ID0gdGV4dENvbnRlbnQuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5zdHIpLmpvaW4oJycpO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIlRleHQgaXM6IFwiICsgdGV4dCk7XG5cblx0XHRcdFx0Ly8gNS4gR2V0IGVtYmVkZGluZ3MgZm9yIGVhY2ggcGFnZVxuXHRcdFx0XHRjb25zdCBlbWJlZGRpbmcgPSBhd2FpdCBnZXRFbWJlZGRpbmdzKHRleHQpXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRW1iZWRkaW5ncyBhcmUgOiBcIiArIGVtYmVkZGluZyk7XG5cblx0XHRcdFx0Ly8gNi4gcHVzaCB0byB2ZWN0b3IgYXJyYXlcblx0XHRcdFx0dmVjdG9ycy5wdXNoKHtcblx0XHRcdFx0XHRpZDogYHBhZ2Uke2kgKyAxfWAsXG5cdFx0XHRcdFx0dmFsdWVzOiBlbWJlZGRpbmcsXG5cdFx0XHRcdFx0bWV0YWRhdGE6IHtcblx0XHRcdFx0XHRcdHBhZ2VOdW06IGkgKyAxLFxuXHRcdFx0XHRcdFx0dGV4dCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXG5cdFx0XHR9XG5cblxuXHRcdFx0Ly8gNy4gaW5pdGlhbGl6ZSBwaW5lY29uZVxuXHRcdFx0Ly8gYXdhaXQgaW5pdGlhbGl6ZSgpIC8vIGluaXRpYWxpemUgcGluZWNvbmVcblxuXHRcdFx0Ly8gOC4gY29ubmVjdCB0byB0aGUgaW5kZXhcblx0XHRcdGNvbnN0IGluZGV4ID0gcGluZWNvbmUuSW5kZXgobXlGaWxlLnZlY3RvckluZGV4KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRleCBjcmVhdGVkIGFyZSA6ICA6IFwiK2luZGV4KTtcblxuXHRcdFx0Ly8gYXdhaXQgaW5kZXgudXBzZXJ0KHtcblx0XHRcdC8vIFx0dXBzZXJ0UmVxdWVzdDoge1xuXHRcdFx0Ly8gXHRcdHZlY3RvcnMsXG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIH0pO1xuXG5cdFx0XHRhd2FpdCBpbmRleC51cHNlcnQodmVjdG9ycyk7XG5cblx0XHRcdC8vIDEwLiB1cGRhdGUgbW9uZ29kYiB3aXRoIGlzUHJvY2Vzc2VkIHRvIHRydWVcblx0XHRcdG15RmlsZS5pc1Byb2Nlc3NlZCA9IHRydWVcblx0XHRcdGF3YWl0IG15RmlsZS5zYXZlKClcblx0XHRcdC8vIGF3YWl0IGRpc2Nvbm5lY3REQigpXG5cblx0XHRcdC8vIDExLiByZXR1cm4gdGhlIHJlc3BvbnNlXG5cdFx0XHRyZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRmlsZSBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5JyB9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBhd2FpdCBkaXNjb25uZWN0REIoKVxuXHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ2Vycm9yIGdldHRpbmcgZmlsZSBjb250ZW50cycgfSlcblx0XHR9XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmxvZyhcIkVycm9yIGlzIE9jY3VyZWQgOiBcIiArIGUubWVzc2FnZSk7XG5cdFx0Ly8gYXdhaXQgZGlzY29ubmVjdERCKClcblx0XHRyZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBlLm1lc3NhZ2UgfSlcblx0fVxufSJdLCJuYW1lcyI6WyJQREZKUyIsIk15RmlsZU1vZGVsIiwiY29ubmVjdERCIiwiZGlzY29ubmVjdERCIiwiZ2V0RW1iZWRkaW5ncyIsInBpbmVjb25lIiwiaW5pdGlhbGl6ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImlkIiwiYm9keSIsIm15RmlsZSIsImZpbmRCeUlkIiwiaXNQcm9jZXNzZWQiLCJ2ZWN0b3JzIiwiY29uc29sZSIsImxvZyIsImZpbGVVcmwiLCJteUZpbGVkYXRhIiwiZmV0Y2giLCJvayIsInBkZkRvYyIsImdldERvY3VtZW50IiwiYXJyYXlCdWZmZXIiLCJwcm9taXNlIiwiX3BkZkluZm8iLCJudW1QYWdlcyIsImkiLCJwYWdlIiwiZ2V0UGFnZSIsInRleHRDb250ZW50IiwiZ2V0VGV4dENvbnRlbnQiLCJ0ZXh0IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwic3RyIiwiam9pbiIsImVtYmVkZGluZyIsInB1c2giLCJ2YWx1ZXMiLCJtZXRhZGF0YSIsInBhZ2VOdW0iLCJpbmRleCIsIkluZGV4IiwidmVjdG9ySW5kZXgiLCJ1cHNlcnQiLCJzYXZlIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/process.js\n");

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

/***/ }),

/***/ "(api)/./src/openaiServices.js":
/*!*******************************!*\
  !*** ./src/openaiServices.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCompletion\": () => (/* binding */ getCompletion),\n/* harmony export */   \"getEmbeddings\": () => (/* binding */ getEmbeddings)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: \"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\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\nconst OPEN_AI_EMBEDDING_MODEL = \"text-embedding-ada-002\";\nconst OPEN_AI_COMPLETION_MODEL = \"gpt-3.5-turbo-instruct\";\nconst getEmbeddings = async (text)=>{\n    const response = await openai.createEmbedding({\n        model: OPEN_AI_EMBEDDING_MODEL,\n        input: text\n    });\n    return response.data.data[0].embedding;\n};\nconst getCompletion = async (prompt)=>{\n    try {\n        const completion = await openai.createCompletion({\n            model: OPEN_AI_COMPLETION_MODEL,\n            prompt: prompt,\n            max_tokens: 500,\n            temperature: 0\n        });\n        console.log(completion.data.choices);\n        return completion.data.choices[0].text;\n    } catch (e) {\n        console.log(\"Error while completion : \" + e);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvb3BlbmFpU2VydmljZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUUvQyxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdkNHLFFBQVE7QUFDVDtBQUVBLE1BQU1DLFNBQVMsSUFBSUgsNkNBQVNBLENBQUNDO0FBRTdCLE1BQU1HLDBCQUEwQjtBQUNoQyxNQUFNQywyQkFBMkI7QUFHMUIsTUFBTUMsZ0JBQWdCLE9BQU9DLE9BQVM7SUFFNUMsTUFBTUMsV0FBVyxNQUFNTCxPQUFPTSxlQUFlLENBQUM7UUFDN0NDLE9BQU9OO1FBQ1BPLE9BQU9KO0lBQ1I7SUFFQSxPQUFPQyxTQUFTSSxJQUFJLENBQUNBLElBQUksQ0FBQyxFQUFFLENBQUNDLFNBQVM7QUFDdkMsRUFBQztBQUVNLE1BQU1DLGdCQUFnQixPQUFPQyxTQUFXO0lBQzlDLElBQUc7UUFDRixNQUFNQyxhQUFhLE1BQU1iLE9BQU9jLGdCQUFnQixDQUFDO1lBQ2hEUCxPQUFPTDtZQUNQVSxRQUFRQTtZQUNSRyxZQUFZO1lBQ1pDLGFBQWE7UUFDZDtRQUVEQyxRQUFRQyxHQUFHLENBQUNMLFdBQVdKLElBQUksQ0FBQ1UsT0FBTztRQUVuQyxPQUFPTixXQUFXSixJQUFJLENBQUNVLE9BQU8sQ0FBQyxFQUFFLENBQUNmLElBQUk7SUFFdEMsRUFBQyxPQUFNZ0IsR0FBRTtRQUNSSCxRQUFRQyxHQUFHLENBQUMsOEJBQTRCRTtJQUN6QztBQUdELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlcmJvdC8uL3NyYy9vcGVuYWlTZXJ2aWNlcy5qcz9jN2FiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29uZmlndXJhdGlvbiwgT3BlbkFJQXBpfSBmcm9tIFwib3BlbmFpXCJcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcblx0YXBpS2V5OiAnc2stSmtwZ0lWT2RsYVc1TDJwdThFWUVUM0JsYmtGSkhhYkZ0dzUzc3hNeU1YVkgxdXlSJyxcbn0pO1xuXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5jb25zdCBPUEVOX0FJX0VNQkVERElOR19NT0RFTCA9IFwidGV4dC1lbWJlZGRpbmctYWRhLTAwMlwiXG5jb25zdCBPUEVOX0FJX0NPTVBMRVRJT05fTU9ERUwgPSBcImdwdC0zLjUtdHVyYm8taW5zdHJ1Y3RcIlxuXG5cbmV4cG9ydCBjb25zdCBnZXRFbWJlZGRpbmdzID0gYXN5bmMgKHRleHQpID0+IHtcblx0XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUVtYmVkZGluZyh7XG5cdFx0bW9kZWw6IE9QRU5fQUlfRU1CRURESU5HX01PREVMLFxuXHRcdGlucHV0OiB0ZXh0LFxuXHR9KTtcblx0XG5cdHJldHVybiByZXNwb25zZS5kYXRhLmRhdGFbMF0uZW1iZWRkaW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb21wbGV0aW9uID0gYXN5bmMgKHByb21wdCkgPT4ge1xuXHR0cnl7XG5cdFx0Y29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcblx0XHRcdG1vZGVsOiBPUEVOX0FJX0NPTVBMRVRJT05fTU9ERUwsXG5cdFx0XHRwcm9tcHQ6IHByb21wdCxcblx0XHRcdG1heF90b2tlbnM6IDUwMCxcblx0XHRcdHRlbXBlcmF0dXJlOiAwXG5cdFx0fSk7XG5cblx0Y29uc29sZS5sb2coY29tcGxldGlvbi5kYXRhLmNob2ljZXMpXG5cblx0cmV0dXJuIGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHRcblxuXHR9Y2F0Y2goZSl7XG5cdFx0Y29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBjb21wbGV0aW9uIDogXCIrZSk7XG5cdH1cblx0XG5cbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJvcGVuYWkiLCJPUEVOX0FJX0VNQkVERElOR19NT0RFTCIsIk9QRU5fQUlfQ09NUExFVElPTl9NT0RFTCIsImdldEVtYmVkZGluZ3MiLCJ0ZXh0IiwicmVzcG9uc2UiLCJjcmVhdGVFbWJlZGRpbmciLCJtb2RlbCIsImlucHV0IiwiZGF0YSIsImVtYmVkZGluZyIsImdldENvbXBsZXRpb24iLCJwcm9tcHQiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1heF90b2tlbnMiLCJ0ZW1wZXJhdHVyZSIsImNvbnNvbGUiLCJsb2ciLCJjaG9pY2VzIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/openaiServices.js\n");

/***/ }),

/***/ "(api)/./src/pinecone.js":
/*!*************************!*\
  !*** ./src/pinecone.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.Pinecone({\n    apiKey: \"ce68792c-9c25-466b-998d-acbd26b2b015\"\n});\nconsole.log(\"pinecone initialized\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pinecone);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGluZWNvbmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRXZELE1BQU1DLFdBQVUsSUFBSUQsaUVBQVFBLENBQUM7SUFBQ0UsUUFBTztBQUFzQztBQUUzRUMsUUFBUUMsR0FBRyxDQUFDO0FBRVosaUVBQWVILFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXBlcmJvdC8uL3NyYy9waW5lY29uZS5qcz9hODkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpbmVjb25lIH0gZnJvbSBcIkBwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZVwiO1xuXG5jb25zdCBwaW5lY29uZT0gbmV3IFBpbmVjb25lKHthcGlLZXk6J2NlNjg3OTJjLTljMjUtNDY2Yi05OThkLWFjYmQyNmIyYjAxNSd9KVxuXG5jb25zb2xlLmxvZygncGluZWNvbmUgaW5pdGlhbGl6ZWQnKVxuXG5leHBvcnQgZGVmYXVsdCBwaW5lY29uZSJdLCJuYW1lcyI6WyJQaW5lY29uZSIsInBpbmVjb25lIiwiYXBpS2V5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pinecone.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/process.js"));
module.exports = __webpack_exports__;

})();