/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Card, Grid } from "semantic-ui-react";

export function People({ Data }) {
  return (
    <>
      <h1>People</h1>
      <Grid columns={3}>
        {Data.map.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{people.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{people.height}</p>
                  </Card.Description>
                  <strong>Height</strong>
                  <p>{people.height}</p>
                  <strong>Mass</strong>
                  <P>{people.mass}</P>
                  <strong>Hair Color</strong>
                  <P>{people.hair_color}</P>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
