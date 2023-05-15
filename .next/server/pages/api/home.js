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
exports.id = "pages/api/home";
exports.ids = ["pages/api/home"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./libs/db.ts":
/*!********************!*\
  !*** ./libs/db.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(`${process.env.MONGO_URL}`);\n        return handler(req, res);\n    }\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUUvQixNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsT0FBWSxHQUFLLE9BQU1DLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7UUFDdEYsSUFBSUosMkVBQWtDLEVBQUU7WUFDdEMsT0FBT0UsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztTQUN6QjtRQUVELE1BQU1KLHVEQUFnQixDQUFDLENBQUMsRUFBRVEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBT1IsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztLQUN6QjtBQUFBO0FBRUQsaUVBQWVILFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qb2Itc2VhcmNoLy4vbGlicy9kYi50cz9iYzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBjb25uZWN0REIgPSAoaGFuZGxlcjogYW55KSA9PiBhc3luYyhyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKVxuICB9XG5cbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChgJHtwcm9jZXNzLmVudi5NT05HT19VUkx9YClcbiAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./libs/db.ts\n");

/***/ }),

/***/ "(api)/./models/Job.ts":
/*!***********************!*\
  !*** ./models/Job.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst jobSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    organization: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"organization\",\n        required: true\n    },\n    position: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"category\",\n        required: true\n    },\n    jobLevel: {\n        type: String,\n        required: true\n    },\n    employmentType: {\n        type: String,\n        required: true\n    },\n    skills: {\n        type: Array,\n        required: true\n    },\n    salary: {\n        type: Number,\n        required: true\n    },\n    overview: {\n        type: String,\n        required: true,\n        minlength: 100\n    },\n    requirements: {\n        type: String,\n        required: true\n    },\n    keywords: {\n        type: Array,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Job = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.job) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"job\", jobSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Job);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvSm9iLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixNQUFNQyxTQUFTLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUNwQ0csWUFBWSxFQUFFO1FBQ1pDLElBQUksRUFBRUosZ0VBQXVCO1FBQzdCTyxHQUFHLEVBQUUsY0FBYztRQUNuQkMsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNEQyxRQUFRLEVBQUU7UUFDUkwsSUFBSSxFQUFFTSxNQUFNO1FBQ1pGLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDREcsUUFBUSxFQUFFO1FBQ1JQLElBQUksRUFBRUosZ0VBQXVCO1FBQzdCTyxHQUFHLEVBQUUsVUFBVTtRQUNmQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RJLFFBQVEsRUFBRTtRQUNSUixJQUFJLEVBQUVNLE1BQU07UUFDWkYsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNESyxjQUFjLEVBQUU7UUFDZFQsSUFBSSxFQUFFTSxNQUFNO1FBQ1pGLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRE0sTUFBTSxFQUFFO1FBQ05WLElBQUksRUFBRVcsS0FBSztRQUNYUCxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0RRLE1BQU0sRUFBRTtRQUNOWixJQUFJLEVBQUVhLE1BQU07UUFDWlQsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNEVSxRQUFRLEVBQUU7UUFDUmQsSUFBSSxFQUFFTSxNQUFNO1FBQ1pGLFFBQVEsRUFBRSxJQUFJO1FBQ2RXLFNBQVMsRUFBRSxHQUFHO0tBQ2Y7SUFDREMsWUFBWSxFQUFFO1FBQ1poQixJQUFJLEVBQUVNLE1BQU07UUFDWkYsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNEYSxRQUFRLEVBQUU7UUFDUmpCLElBQUksRUFBRVcsS0FBSztRQUNYUCxRQUFRLEVBQUUsSUFBSTtLQUNmO0NBQ0YsRUFBRTtJQUNEYyxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUFDO0FBRUYsTUFBTUMsR0FBRyxHQUFHdkIsNERBQW1CLElBQUlBLHFEQUFjLENBQUMsS0FBSyxFQUFFQyxTQUFTLENBQUM7QUFDbkUsaUVBQWVzQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXNlYXJjaC8uL21vZGVscy9Kb2IudHM/MDU4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGpvYlNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBvcmdhbml6YXRpb246IHtcbiAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcbiAgICByZWY6ICdvcmdhbml6YXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHBvc2l0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGNhdGVnb3J5OiB7XG4gICAgdHlwZTogbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQsXG4gICAgcmVmOiAnY2F0ZWdvcnknLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGpvYkxldmVsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGVtcGxveW1lbnRUeXBlOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHNraWxsczoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIHNhbGFyeToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxuICBvdmVydmlldzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDEwMFxuICB9LFxuICByZXF1aXJlbWVudHM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAga2V5d29yZHM6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9XG59LCB7XG4gIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmNvbnN0IEpvYiA9IG1vbmdvb3NlLm1vZGVscy5qb2IgfHwgbW9uZ29vc2UubW9kZWwoJ2pvYicsIGpvYlNjaGVtYSlcbmV4cG9ydCBkZWZhdWx0IEpvYiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImpvYlNjaGVtYSIsIlNjaGVtYSIsIm9yZ2FuaXphdGlvbiIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJwb3NpdGlvbiIsIlN0cmluZyIsImNhdGVnb3J5Iiwiam9iTGV2ZWwiLCJlbXBsb3ltZW50VHlwZSIsInNraWxscyIsIkFycmF5Iiwic2FsYXJ5IiwiTnVtYmVyIiwib3ZlcnZpZXciLCJtaW5sZW5ndGgiLCJyZXF1aXJlbWVudHMiLCJrZXl3b3JkcyIsInRpbWVzdGFtcHMiLCJKb2IiLCJtb2RlbHMiLCJqb2IiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Job.ts\n");

/***/ }),

/***/ "(api)/./pages/api/home/index.ts":
/*!*********************************!*\
  !*** ./pages/api/home/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/Job */ \"(api)/./models/Job.ts\");\n/* harmony import */ var _libs_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../libs/db */ \"(api)/./libs/db.ts\");\n\n\nconst handler = async (req, res)=>{\n    if (req.method !== \"GET\") return res.status(405).json({\n        msg: `${req.method} method is not allowed for this endpoint.`\n    });\n    const latestJob = await _models_Job__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([\n        {\n            $lookup: {\n                from: \"organizations\",\n                let: {\n                    org_id: \"$organization\"\n                },\n                pipeline: [\n                    {\n                        $match: {\n                            $expr: {\n                                $eq: [\n                                    \"$_id\",\n                                    \"$$org_id\"\n                                ]\n                            }\n                        }\n                    },\n                    {\n                        $lookup: {\n                            from: \"users\",\n                            let: {\n                                user_id: \"$user\"\n                            },\n                            pipeline: [\n                                {\n                                    $match: {\n                                        $expr: {\n                                            $eq: [\n                                                \"$_id\",\n                                                \"$$user_id\"\n                                            ]\n                                        }\n                                    }\n                                }\n                            ],\n                            as: \"user\"\n                        }\n                    },\n                    {\n                        $unwind: \"$user\"\n                    }\n                ],\n                as: \"organization\"\n            }\n        },\n        {\n            $unwind: \"$organization\"\n        },\n        {\n            $sort: {\n                createdAt: -1\n            }\n        },\n        {\n            $limit: 8\n        }\n    ]);\n    const categoryDisplay = await _models_Job__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([\n        {\n            $lookup: {\n                from: \"categories\",\n                localField: \"category\",\n                foreignField: \"_id\",\n                as: \"category\"\n            }\n        },\n        {\n            $unwind: \"$category\"\n        },\n        {\n            $group: {\n                _id: \"$category._id\",\n                name: {\n                    $first: \"$category.name\"\n                },\n                image: {\n                    $first: \"$category.image\"\n                },\n                count: {\n                    $sum: 1\n                }\n            }\n        },\n        {\n            $project: {\n                count: 1,\n                image: 1,\n                name: 1\n            }\n        },\n        {\n            $limit: 8\n        }\n    ]);\n    return res.status(200).json({\n        latestJob,\n        categoryDisplay\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaG9tZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDdUM7QUFDRztBQUUxQyxNQUFNRSxPQUFPLEdBQUcsT0FBTUMsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNsRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQ3RCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsR0FBRyxFQUFFLENBQUMsRUFBRUwsR0FBRyxDQUFDRSxNQUFNLENBQUMseUNBQXlDLENBQUM7S0FBRSxDQUFDO0lBRWhHLE1BQU1JLFNBQVMsR0FBRyxNQUFNVCw2REFBYSxDQUFDO1FBQ3BDO1lBQ0VXLE9BQU8sRUFBRTtnQkFDUEMsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCQyxHQUFHLEVBQUU7b0JBQUVDLE1BQU0sRUFBRSxlQUFlO2lCQUFFO2dCQUNoQ0MsUUFBUSxFQUFFO29CQUNSO3dCQUFFQyxNQUFNLEVBQUU7NEJBQUVDLEtBQUssRUFBRTtnQ0FBRUMsR0FBRyxFQUFFO29DQUFDLE1BQU07b0NBQUUsVUFBVTtpQ0FBQzs2QkFBRTt5QkFBRTtxQkFBRTtvQkFDcEQ7d0JBQ0VQLE9BQU8sRUFBRTs0QkFDUEMsSUFBSSxFQUFFLE9BQU87NEJBQ2JDLEdBQUcsRUFBRTtnQ0FBRU0sT0FBTyxFQUFFLE9BQU87NkJBQUU7NEJBQ3pCSixRQUFRLEVBQUU7Z0NBQ1I7b0NBQUVDLE1BQU0sRUFBRTt3Q0FBRUMsS0FBSyxFQUFFOzRDQUFFQyxHQUFHLEVBQUU7Z0RBQUMsTUFBTTtnREFBRSxXQUFXOzZDQUFDO3lDQUFFO3FDQUFFO2lDQUFFOzZCQUN0RDs0QkFDREUsRUFBRSxFQUFFLE1BQU07eUJBQ1g7cUJBQ0Y7b0JBQ0Q7d0JBQUVDLE9BQU8sRUFBRSxPQUFPO3FCQUFFO2lCQUNyQjtnQkFDREQsRUFBRSxFQUFFLGNBQWM7YUFDbkI7U0FDRjtRQUNEO1lBQUVDLE9BQU8sRUFBRSxlQUFlO1NBQUU7UUFDNUI7WUFBRUMsS0FBSyxFQUFFO2dCQUFFQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQUU7U0FBRTtRQUM1QjtZQUFFQyxNQUFNLEVBQUUsQ0FBQztTQUFFO0tBQ2QsQ0FBQztJQUVGLE1BQU1DLGVBQWUsR0FBRyxNQUFNekIsNkRBQWEsQ0FBQztRQUMxQztZQUNFVyxPQUFPLEVBQUU7Z0JBQ1BDLElBQUksRUFBRSxZQUFZO2dCQUNsQmMsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCQyxZQUFZLEVBQUUsS0FBSztnQkFDbkJQLEVBQUUsRUFBRSxVQUFVO2FBQ2Y7U0FDRjtRQUNEO1lBQUVDLE9BQU8sRUFBRSxXQUFXO1NBQUU7UUFDeEI7WUFDRU8sTUFBTSxFQUFFO2dCQUNOQyxHQUFHLEVBQUUsZUFBZTtnQkFDcEJDLElBQUksRUFBRTtvQkFBRUMsTUFBTSxFQUFFLGdCQUFnQjtpQkFBRTtnQkFDbENDLEtBQUssRUFBRTtvQkFBRUQsTUFBTSxFQUFFLGlCQUFpQjtpQkFBRTtnQkFDcENFLEtBQUssRUFBRTtvQkFBRUMsSUFBSSxFQUFFLENBQUM7aUJBQUU7YUFDbkI7U0FDRjtRQUNEO1lBQ0VDLFFBQVEsRUFBRTtnQkFDUkYsS0FBSyxFQUFFLENBQUM7Z0JBQ1JELEtBQUssRUFBRSxDQUFDO2dCQUNSRixJQUFJLEVBQUUsQ0FBQzthQUNSO1NBQ0Y7UUFDRDtZQUFFTixNQUFNLEVBQUUsQ0FBQztTQUFFO0tBQ2QsQ0FBQztJQUVGLE9BQU9wQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQzFCRSxTQUFTO1FBQ1RnQixlQUFlO0tBQ2hCLENBQUM7Q0FDSDtBQUVELGlFQUFleEIsb0RBQVMsQ0FBQ0MsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vam9iLXNlYXJjaC8uL3BhZ2VzL2FwaS9ob21lL2luZGV4LnRzPzA4YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSm9iIGZyb20gJy4vLi4vLi4vLi4vbW9kZWxzL0pvYidcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi8uLi8uLi8uLi9saWJzL2RiJ1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1zZzogYCR7cmVxLm1ldGhvZH0gbWV0aG9kIGlzIG5vdCBhbGxvd2VkIGZvciB0aGlzIGVuZHBvaW50LmAgfSlcblxuICBjb25zdCBsYXRlc3RKb2IgPSBhd2FpdCBKb2IuYWdncmVnYXRlKFtcbiAgICB7XG4gICAgICAkbG9va3VwOiB7XG4gICAgICAgIGZyb206ICdvcmdhbml6YXRpb25zJyxcbiAgICAgICAgbGV0OiB7IG9yZ19pZDogJyRvcmdhbml6YXRpb24nIH0sXG4gICAgICAgIHBpcGVsaW5lOiBbXG4gICAgICAgICAgeyAkbWF0Y2g6IHsgJGV4cHI6IHsgJGVxOiBbJyRfaWQnLCAnJCRvcmdfaWQnXSB9IH0gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgICAgIGZyb206ICd1c2VycycsXG4gICAgICAgICAgICAgIGxldDogeyB1c2VyX2lkOiAnJHVzZXInIH0sXG4gICAgICAgICAgICAgIHBpcGVsaW5lOiBbXG4gICAgICAgICAgICAgICAgeyAkbWF0Y2g6IHsgJGV4cHI6IHsgJGVxOiBbJyRfaWQnLCAnJCR1c2VyX2lkJ10gfSB9IH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXM6ICd1c2VyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyAkdW53aW5kOiAnJHVzZXInIH1cbiAgICAgICAgXSxcbiAgICAgICAgYXM6ICdvcmdhbml6YXRpb24nXG4gICAgICB9XG4gICAgfSxcbiAgICB7ICR1bndpbmQ6ICckb3JnYW5pemF0aW9uJyB9LFxuICAgIHsgJHNvcnQ6IHsgY3JlYXRlZEF0OiAtMSB9IH0sXG4gICAgeyAkbGltaXQ6IDggfVxuICBdKVxuXG4gIGNvbnN0IGNhdGVnb3J5RGlzcGxheSA9IGF3YWl0IEpvYi5hZ2dyZWdhdGUoW1xuICAgIHtcbiAgICAgICRsb29rdXA6IHtcbiAgICAgICAgZnJvbTogJ2NhdGVnb3JpZXMnLFxuICAgICAgICBsb2NhbEZpZWxkOiAnY2F0ZWdvcnknLFxuICAgICAgICBmb3JlaWduRmllbGQ6ICdfaWQnLFxuICAgICAgICBhczogJ2NhdGVnb3J5J1xuICAgICAgfVxuICAgIH0sXG4gICAgeyAkdW53aW5kOiAnJGNhdGVnb3J5JyB9LFxuICAgIHtcbiAgICAgICRncm91cDoge1xuICAgICAgICBfaWQ6ICckY2F0ZWdvcnkuX2lkJyxcbiAgICAgICAgbmFtZTogeyAkZmlyc3Q6ICckY2F0ZWdvcnkubmFtZScgfSxcbiAgICAgICAgaW1hZ2U6IHsgJGZpcnN0OiAnJGNhdGVnb3J5LmltYWdlJyB9LFxuICAgICAgICBjb3VudDogeyAkc3VtOiAxIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICRwcm9qZWN0OiB7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBpbWFnZTogMSxcbiAgICAgICAgbmFtZTogMVxuICAgICAgfVxuICAgIH0sXG4gICAgeyAkbGltaXQ6IDggfVxuICBdKVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgbGF0ZXN0Sm9iLFxuICAgIGNhdGVnb3J5RGlzcGxheVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIoaGFuZGxlcikiXSwibmFtZXMiOlsiSm9iIiwiY29ubmVjdERCIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJsYXRlc3RKb2IiLCJhZ2dyZWdhdGUiLCIkbG9va3VwIiwiZnJvbSIsImxldCIsIm9yZ19pZCIsInBpcGVsaW5lIiwiJG1hdGNoIiwiJGV4cHIiLCIkZXEiLCJ1c2VyX2lkIiwiYXMiLCIkdW53aW5kIiwiJHNvcnQiLCJjcmVhdGVkQXQiLCIkbGltaXQiLCJjYXRlZ29yeURpc3BsYXkiLCJsb2NhbEZpZWxkIiwiZm9yZWlnbkZpZWxkIiwiJGdyb3VwIiwiX2lkIiwibmFtZSIsIiRmaXJzdCIsImltYWdlIiwiY291bnQiLCIkc3VtIiwiJHByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/home/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/home/index.ts"));
module.exports = __webpack_exports__;

})();