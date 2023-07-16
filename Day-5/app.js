import createError from "http-errors";
import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import "dotenv/config.js";

import path from "path";
const __dirname = path.resolve();

import employeesRouter from "./src/routes/employees.js";
import departmentsRouter from "./src/routes/department.js";

var app = express();

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(join(__dirname, 'public'));

app.use("/employees/", employeesRouter);
app.use("/departments/", departmentsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
});

export default app;
