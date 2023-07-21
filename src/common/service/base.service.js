import md5 from "md5";
import {Types, startSession} from "mongoose";

export const BaseService = class BaseService {
    constructor(model){
        this.model = model
    }

    async create(data, options = {}){
        data.createdAt = new Date()
        data.updatedAt = new Date()
        const document = await this.model.create(data)
        return document?._id
    }

    async updateOne(id, data, options = {}){
        try {
            id = new Types.ObjectId(id)
            data.updatedAt = new Date()
            return await this.model.updateOne({_id: id},{$set: data}, options)
        } catch (error) {
            console.log(error.message);
        }
    }

    async updateMany(query, data){
        try {
            data.updatedAt = new Date()
            return await this.model.updateMany(query, {$set: data})
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteOne(id){
        try {
            id = new Types.ObjectId(id)
            return await this.model.updateOne({_id: id}, {$set: {deletedAt: new Date()}})
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteMany(query){
        try {
            data.deletedAt = new Date()
            return await this.model.updateMany(query, {$set: {deletedAt: new Date()}})
        } catch (error) {
            console.log(error.message)
        }
    }

    async findOne(query){
        try {
            query.deletedAt = 0
            return await this.model.findOne(query)
        } catch (error) {
            console.log(error.message);
        }
    }

    async findById(id, options = {}){
        console.log(id, options);
        id = new Types.ObjectId(id)
        const doc = await this.model.findById(id, options)
        if(!doc || doc.deletedAt) throw new Error('document not found')
        return doc

    }

    async findByQuery(query, options = {}){
        try {
            query.deletedAt = 0
            
            return await this.model.find(query, options)
        } catch (error) {
            console.log(error.message);
        }
    }
}