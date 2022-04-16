import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "src/question/dto/create-question.dto";
import { UpdateQuestionDto } from "src/question/dto/update-question.dto";
import DbBase from "./dbBase";

export default class QuestionDatabase extends DbBase {
    async create(createQuestionDto: CreateQuestionDto) {
        try {
            var res = await this.prismaClient.question.create({ data: createQuestionDto });
            return res;
        } catch (e) {
            return false;
        }
    }

    async findAll() {
        return `This action returns all question`;
    }

    async findOne(id: number) {
        return `This action returns a #${id} question`;
    }

    async update(id: number, updateQuestionDto: UpdateQuestionDto) {
        return `This action updates a #${id} question`;
    }

    async remove(id: number) {
        return `This action removes a #${id} question`;
    }
}