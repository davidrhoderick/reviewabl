import { useMutation, useQuery } from "@apollo/client/react";
import type { Route } from "./+types/home";
import { graphql } from "../gql";
import { Button, Container, Typography } from "@mantine/core";

const HELLO_WORLD_QUERY = graphql(`
  query HelloWorld($name: String) {
    helloWorld(name: $name)
  }
`);

const GOODBYE_WORLD_MUTATION = graphql(`
  mutation GoodbyeWorld($name: String) {
    goodbyeWorld(name: $name)
  }
`);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { data } = useQuery(HELLO_WORLD_QUERY);

  const [sayGoodbye, { data: goodbyeData }] = useMutation(GOODBYE_WORLD_MUTATION);

  return (
    <Container>
      <Typography>{data?.helloWorld ?? "loadng..."}</Typography>

      <Button onClick={() => sayGoodbye()}>Say Goodbye!</Button>

      {goodbyeData && <Typography>{goodbyeData.goodbyeWorld}</Typography>}
    </Container>
  );
}
