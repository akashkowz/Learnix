module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/Learnix/LearnixFinal/models/course-model.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Downloads/Learnix/LearnixFinal/node_modules/mongoose)");
;
const CourseSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    cid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    user: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].models.Course || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].model("Course", CourseSchema);
}),
"[project]/Downloads/Learnix/LearnixFinal/dbConnect/dbConnect.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>connect
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Downloads/Learnix/LearnixFinal/node_modules/mongoose)");
;
async function connect() {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in .env");
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].connect(uri);
        const connection = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].connection;
        connection.on("connected", ()=>{
            console.log("MongoDB connected successfully");
        });
        connection.on("error", (err)=>{
            console.error("MongoDB connection error:", err);
            process.exit(1);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error("DB connection failed:", error.message);
        } else {
            console.error("DB connection failed:", error);
        }
    }
}
}),
"[project]/Downloads/Learnix/LearnixFinal/app/api/courses/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Learnix/LearnixFinal/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$course$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Learnix/LearnixFinal/models/course-model.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$dbConnect$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Learnix/LearnixFinal/dbConnect/dbConnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Downloads/Learnix/LearnixFinal/node_modules/mongoose)");
;
;
;
;
async function GET(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$dbConnect$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId")?.trim();
        if (!userId || !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(userId)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Valid userId is required"
            }, {
                status: 400
            });
        }
        const courses = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$course$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            user: userId
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(courses);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch courses"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$dbConnect$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        const { cid, name, faculty, user } = await req.json();
        if (!cid || !name || !user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "cid, name and user are required"
            }, {
                status: 400
            });
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(user)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid userId"
            }, {
                status: 400
            });
        }
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$course$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            cid
        });
        if (existing) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Course already exists"
            }, {
                status: 409
            });
        }
        const course = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$course$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            cid,
            name,
            faculty,
            user
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Course added successfully",
            course
        }, {
            status: 201
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to add course"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11cc54e8._.js.map