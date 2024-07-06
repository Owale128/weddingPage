import { HomePage } from "./pages/homePage";
import { RSVP } from "./pages/rsvp";
import { About } from "./pages/about";

export default function Home() {
  return (
    <main>
    <HomePage />
    <RSVP />
    <About />
    </main>
  );
}
