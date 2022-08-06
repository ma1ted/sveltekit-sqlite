# sveltekit-sqlite
A minimal pastebin-like SvelteKit example app that uses a local SQLite database via the Prisma ORM through a SvelteKit endpoint.

### Deploying this project to Vercel or similar will not work due to the fact that the instances serving the project are ephemeral. When more instances are spun up to accommodate for increased load, they will not share the same filesystem, ahd hence will not share the same database.

The database and its required files are included in this repository for demonstration purposes, though it is empty.

To generate it from scratch;
* Make sure you have everything installed; run `pnpm install`
* Delete everything inside `/prisma` except for `/prisma/schema.prisma`.
* Run `pnpx prisma migrate dev --name init`.
* Run `pnpx prisma generate`.

I'm using `pnpx` here, which is `pnpm`'s equivalent to `npm`'s `npx`.

### Index page
![image](https://user-images.githubusercontent.com/59726149/183265859-ee94814e-f167-41db-8f63-474f488aee0a.png)

### Inputting text into the fields
![image](https://user-images.githubusercontent.com/59726149/183265921-cd8d7ed7-82ff-498c-883f-706812ecbcea.png)

### The generated post, located at `/:title` (this page would be at `/Doggo ipsum`)
![image](https://user-images.githubusercontent.com/59726149/183265886-fa1cee19-a993-47e9-9f60-32691db61b31.png)
