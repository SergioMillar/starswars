/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Card, Grid } from "semantic-ui-react";

export function Planets({ Data }) {
  return (
    <>
      <h1>Planets</h1>
      <Grid columns={3}>
        {Data.map.map((Planets, i) => {
          return (
            <Grid.Column key={i}>
              <Card>
                <Card.Content>
                  <Card.Header>{Planets.name}</Card.Header>
                  <Card.Description>
                    <strong>Climate</strong>
                    <p>{Planets.Climate}</p>
                    <strong>Diameter</strong>
                    <p>{Planets.diameter}</p>
                    <strong>Population</strong>
                    <P>{Planets.population}</P>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}
