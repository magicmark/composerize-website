import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: relative;
  background: #848850;
  color: #fff;
  border-bottom: 2px solid #5f561b;
`;

const Title = styled.div`
  display: inline-block;
  margin: 14px 50px;
  font-family: "Ubuntu Mono", monospace;
  font-size: 40px;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 7px;
  right: 50px;
`;

const Link = styled.a`margin-left: 7px;`;

export default () => (
  <Container>
    <Title>$ composerize</Title>
    <Buttons>
      <Link href="https://github.com/magicmark/composerize">
        <img
          src="https://img.shields.io/github/stars/magicmark/composerize.svg?style=social&label=Star"
          alt="github"
        />
      </Link>
      <Link href="https://twitter.com/intent/tweet?text=https%3A%2F%2Fcomposerize.com%2F+-+A+nifty+tool+for+converting+docker+run+commands+into+docker-compose+files%21">
        <img
          src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"
          alt="twitter"
        />
      </Link>
      <Link href="https://travis-ci.org/magicmark/composerize">
        <img
          src="https://img.shields.io/travis/magicmark/composerize/master.svg"
          alt="travis"
        />
      </Link>
    </Buttons>
  </Container>
);
