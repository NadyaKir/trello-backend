import { PomodoroService } from './pomodoro.service'
import { Module } from '@nestjs/common'
import { PomodoroController } from './pomodoro.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [PomodoroController],
	providers: [PomodoroService, PrismaService],
	exports: [PomodoroService]
})
export class PomodoroModule {}
