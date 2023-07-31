import express from "express";
import {createMovieHandler, deleteMovieHandler, getMoviesHandler, updateMovieHandler} from "../../handler/movie/movie.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {movieSchemas} from "../../../common/joi-schemas/movie.schema.js";
import {authorization} from "../../../common/middleware/auth.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";
import {checkRole} from "../../../common/middleware/auth-role.js";

const routes = express.Router()

routes.route('/')
    .post(authorization, checkRole,validateIt(movieSchemas.createMovie, 'body'),createMovieHandler)
    .put(authorization, checkRole,validateIt(movieSchemas.updateMovie, 'body'), updateMovieHandler)

routes.delete('/:_id',authorization,checkRole, validateIt(baseSchemas.byId, 'params'), deleteMovieHandler)
routes.post('/all', validateIt(movieSchemas.findPagin, 'body'), authorization, getMoviesHandler)

export default routes