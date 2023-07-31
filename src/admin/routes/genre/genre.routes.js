import express from "express";
import {createGenreHandler, deleteGenreHandler, getGenresHandler, updateGenreHandler} from "../../handler/genre/genres.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {authorization} from "../../../common/middleware/auth.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";
import {genresSchema} from "../../../common/joi-schemas/genres.schema.js";
import {checkRole} from "../../../common/middleware/auth-role.js";

const routes = express.Router()

routes.route('/')
    .post(authorization,checkRole, validateIt(genresSchema.createGenre, 'body'),createGenreHandler)
    .put(authorization,checkRole, validateIt(genresSchema.updateGenre, 'body'), updateGenreHandler)
    .get(authorization,checkRole, getGenresHandler)

routes.delete('/:_id',authorization, validateIt(baseSchemas.byId, 'params'), deleteGenreHandler)

export default routes