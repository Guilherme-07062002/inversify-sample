# Inversify Sample

This is a sample project to demonstrate how Inversify can be used with Express and TypeScript.

## How to run

Clone the repository

```bash
git clone https://github.com/Guilherme-07062002/inversify-sample.git
```

Install the dependencies

```bash
npm install
```

Run the server

```bash
npm run dev
```

After that, the server will be running on `http://localhost:3000`

## How to use

To test the server, you can use the create user endpoint:
`(POST) /users`

Example:

```json
{
  "name": "user",
  "email": "email@email.com",
  "password": "1234"
}
```

When you explore the code, you will see that the `CreateUserController` is using a implementation of `UserRepository` to create the user. All of these classes are being injected using Inversify.

## Advantages

Using Inversify, you can easily change the implementation of a class without changing the code that uses it. This is very useful when you are writing tests, for example.

By the way, only binding the interfaces to the implementations, you can easily mock the classes and test the code.

Example:

```typescript
container.bind<UserRepository>(REPOSITORY_TYPES.UserRepository).to(FakeUserRepository);
```

With this line, you are binding the `UserRepository` interface to the `FakeUserRepository` implementation. Now, every time that the `UserRepository` is injected, the `FakeUserRepository` will be used, discarting the need of create a 'factory' or something like that.
