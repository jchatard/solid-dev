import { Title } from "solid-start";
import Counter from "~/components/Counter";
import {DEV, Show} from "solid-js";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>

      <Show when={DEV} fallback={<h2>I'm in PROD mode</h2>}>
        <h2>I'm in DEV mode</h2>
      </Show>

      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
