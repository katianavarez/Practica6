<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Preguntas Práctica 7.
**1. Responder: ¿por qué esta interfaz no menciona Express, NestJS ni memoria?**
Porque la interfaz solo es el contrato, no cómo se implementan, sirve para después poder cambiar el repositorio sin modificar la interfaz ni el service.

**2. Responder: ¿qué palabra de esa clase es la que promete cumplir la interfaz del paso anterior?**
Implements

**3. Responder: ¿por qué este archivo no sabe qué es una petición HTTP?**
Porque el service solo tiene lógica de negocio, usa datos de TypeScript, como number y dto, no de HTTP (rutas, body).

**4. Responder: ¿por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?**
Porque el service es una clase y si existe en tiempo de ejecución, y la interfaz no

**5. Responder: ¿qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?**
Que las rutas de lo que ya tenía antes, como inscripciones, sigue funcionando bien, igual que antes de agregar el módulo de miembros.



## Preguntas Práctica 6.
**1. Responder: ¿qué pasaría si el módulo no quedara registrado en la raíz?**
Si no metiera el módulo en el imports del AppModule, nest no sabría que existe, entonces las rutas de ese controller no funcionarían, ni se podría inyectar su service en otro lado.

**2. Responder: ¿por qué los métodos del repositorio devuelven promesas si los datos van a estar en memoria?**
Porque se hizo de manera que se pueda cambiar a una base de datos real, entonces si desde ahorita ponemos promesas, cuando cambiemos a una base de datos de verdad, no vamos a tener que cambiar cosas del service ni del controller.

**3. Responder: ¿qué error apareció al cambiar a la interfaz, y por qué la clase sí se había resuelto sola?**
Algo de "Nest cant resolve dependencies...", que es porque las interfaces de typescript, al pasar a javascript ya no existen, se borran al compilar, y con las clases no pasa eso porque esas si existen en javascript.

**4. Responder: ¿por qué el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?**
Porque el service depende de una interfaz y esa desaparece al compilar, por eso hay que inventarnos un token. Como el controller inyecta una clase, y eso si existe en tiempo real, no se necesita.

**6. Responder: ¿cuál es la diferencia entre un 400 y un 409?**
El 400 es cuando la petición viene mal armada, que le faltan datos; y el 409 es cuando la petición sí está bien pero se topa con una regla, como que el horario ya no tiene cupo.

**7. Responder: ¿por qué cambió el código de estado de esa última petición?**
Porque al cancelar la inscripción, su estado pasa a "cancelada" y las reglas de negocio ignoran las que están canceladas, entonces esa cancelación libera un lugar y deja libre a la persona, por eso la petición que lanzaba 409 ahora sí se puede hacer.



## Preguntas Práctica 5.
**1. Responder: ¿qué generó el comando nest new?**
La estructura base de un proyecto NestJS: package.json con dependencias, configuración TypeScript (tsconfig), y de Nest, la carpeta src con los archivos como main.ts, y la carpeta test con las pruebas.

**2. Responder: ¿qué hace el AppService que ya viene generado?**
Es una clase con @Injectable con un método que regresa un texto. El controller lo recibe por el constructor con inyección de dependencias y devuelve el texto cuando alguien entra a la ruta.

**3. Responder: ¿por qué la ruta funciona sin declarar nada en app.module.ts?**
Porque el controller ya está registrado en el módulo desdeque se creó el proyecto, entonces cualquier ruta nueva Nest la detecta sola.

**4. Responder: ¿qué pasaría si el cuerpo de la petición viniera vacío?**
La clase igual se agregaría al arreglo pero con undefined, porque aún no tenemos validaciones para revisar eso.

**5. Responder: ¿en qué archivo vive hoy toda la lógica de la práctica?**
En app.controller.ts

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observer](https://observer.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
