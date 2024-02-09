# To-Do

##### predefined

- [x] Project structure
- [x] TDD
- [x] Task class
- [x] In-Memory repository
- [x] Unit tests
- [x] E2E tests - addressing the factory to in-memory repository.
- [x] Swagger API Docs.
- [x] User class (not integrated yet)
    - [x] User Entity
    - [x] User Interface
    - [x] Mocked Users
    - [x] TDD ManagerUserTestFile
    - [x] TDD User Repository In-Memory (Start with the methods signature only)
    - [x] TDD Services - UserService
    - [x] Setting up switch mode for e2e tests using .env
    - [x] TDD add cryptography sequence for passwords
    - [x] TDD Router - UserService
    - [x] TDD Controller - UserService
    - [x] Swagger update - add User process

##### This phase

> ⭐️ Save the UUID keys in database as binary type

- [ ] Persist data with MySQL
    - Knex migrations;
    - Factory following the new persist repository;
    - Create the persistent repository only with the methods signature;
    - TDD is already done since I made it for in-memory repository;
- [ ] Integrate with JWT to manage tasks only if logged in

##### Next phase

- [ ] Integrate Users authentication (JWT) for Tasks management;