import React from "react";
import { Card } from "../common/Card";
import { Wrapper, Grid, Item, Content, Wrappertext } from "./style";
import { Tline1 } from "../Tline/Tline16";
import { Tline2 } from "../Tline/Tline17";
import { Tline3 } from "../Tline/Tline18";
import { Tline4 } from "../Tline/Tline19";
import { Tline5 } from "../Tline/Tline20";

export const Tline = () => {
  return (
    <div>
      <Wrapper>
        <h1>Timeline</h1>
        <p>
          I enjoy keeping a personal timeline, it helps me be motivated looking
          from where I've started.
        </p>
        <Grid>
          <Item>
            <Card>
              <Content>
                <Tline5 />
              </Content>
            </Card>
          </Item>
          <Item>
            <Card>
              <Content>
                <Tline4 />
              </Content>
            </Card>
          </Item>
          <Item>
            <Card>
              <Content>
                <Tline3 />
              </Content>
            </Card>
          </Item>
          <Item>
            <Card>
              <Content>
                <Tline2 />
              </Content>
            </Card>
          </Item>
          <Item>
            <Card>
              <Content>
                <Tline1 />
              </Content>
            </Card>
          </Item>
        </Grid>
      </Wrapper>
    </div>
  );
};
