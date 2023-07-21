import express from "express";
import {createGenreHandler, deleteGenreHandler, getGenresHandler, updateGenreHandler} from "../../handler/genre/genres.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {genreSchemas} from "../../../common/joi-schemas/genres.schema.js";
import {authorization} from "../../../common/middleware/auth.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";

const routes = express.Router()

routes.route('/')
    .post(authorization, validateIt(genreSchemas.createGenre, 'body'),createGenreHandler)
    .put(authorization, validateIt(genreSchemas.updateGenre, 'body'), updateGenreHandler)
    .get(authorization, getGenresHandler)

routes.delete('/:_id',authorization, validateIt(baseSchemas.byId, 'params'), deleteGenreHandler)

export default routes