import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown fields
      transform: true, // enables class-transformer (numbers)
    }),
  );

  app.enableCors({
    origin: ["http://localhost:5173",
      "http://192.168.0.102:5173",
      "http://192.168.0.101:5173"
    ],
    methods: ["GET", "POST"]
     // your React dev server
  });

  await app.listen(3000);
}
bootstrap();
