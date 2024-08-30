import { ClientComponent } from "./client-component";
import { ServerComponent } from "./server-component";

export default async function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 py-40">
      <ServerComponent />
      <ClientComponent />
    </main>
  );
}
