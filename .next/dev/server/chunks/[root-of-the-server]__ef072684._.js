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
"[project]/Downloads/Learnix/LearnixFinal/models/quiz-model.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Downloads/Learnix/LearnixFinal/node_modules/mongoose)");
;
const QuizSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    maxMarks: {
        type: Number,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    },
    isLive: {
        type: Boolean,
        default: false
    },
    isMarksLive: {
        type: Boolean,
        default: false
    },
    course: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    user: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].models.Quiz || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].model("Quiz", QuizSchema);
}),
"[project]/Downloads/Learnix/LearnixFinal/app/api/quiz/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Learnix/LearnixFinal/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$dbConnect$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Learnix/LearnixFinal/dbConnect/dbConnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$quiz$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Learnix/LearnixFinal/models/quiz-model.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Downloads/Learnix/LearnixFinal/node_modules/mongoose)");
;
;
;
;
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$dbConnect$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        const { title, maxMarks, pdfUrl, user, course } = await req.json();
        if (!title || !maxMarks || !pdfUrl || !user || !course) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required fields"
            }, {
                status: 400
            });
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(user) || !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(course)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid user or course ID"
            }, {
                status: 400
            });
        }
        const quiz = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$quiz$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            title,
            maxMarks,
            pdfUrl,
            user,
            course
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Quiz uploaded",
            quiz
        }, {
            status: 201
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to upload quiz"
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$dbConnect$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        const { searchParams } = new URL(req.url);
        const courseId = searchParams.get("courseId")?.trim();
        if (!courseId || !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$mongoose$29$__["default"].Types.ObjectId.isValid(courseId)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Valid courseId required"
            }, {
                status: 400
            });
        }
        const quizzes = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$quiz$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            course: courseId
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(quizzes);
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch quizzes"
        }, {
            status: 500
        });
    }
}
async function PATCH(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$dbConnect$2f$dbConnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])();
        const { quizId, action } = await req.json();
        if (!quizId || !action) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "quizId and action required"
            }, {
                status: 400
            });
        }
        const update = action === "LIVE_QUIZ" ? {
            isLive: true
        } : action === "LIVE_MARKS" ? {
            isMarksLive: true
        } : null;
        if (!update) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid action"
            }, {
                status: 400
            });
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$models$2f$quiz$2d$model$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(quizId, update);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Quiz updated"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Learnix$2f$LearnixFinal$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update quiz"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef072684._.js.map