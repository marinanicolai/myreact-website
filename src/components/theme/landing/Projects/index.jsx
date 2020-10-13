import React from "react";
import { Card } from "../common/Card";
import { Wrapper, Grid, Item, Content } from "./style";
import { Project1 } from "../Projects/Project1/index";
import { Project2 } from "../Projects/Project2/index";
import { Project3 } from "../Projects/Project3/index";

export const Projects = () => {
  return (
    <Wrapper>
      <h2>Projects</h2>
      <Grid>
        <Item>
          <Card>
            <Content>
              <Project1 />
            </Content>
          </Card>
        </Item>
        <Item>
          <Card>
            <Content>
              <Project2 />
            </Content>
          </Card>
        </Item>
        <Item>
          <Card>
            <Content>
              <Project3 />
            </Content>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
