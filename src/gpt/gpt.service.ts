import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase, prosConsDicusserUseCase } from './use-cases';
import { OrthographyDto, ProsConsDiscusserDto } from './dtos';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  // Solo va a llamar casos de uso

  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  async prosConsDicusser(orthographyDto: ProsConsDiscusserDto) {
    return await prosConsDicusserUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
