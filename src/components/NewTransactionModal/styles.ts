import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: var(--input-background);
    border: 1px solid var(--input-border);
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    background: var(--green);
    border-radius: 0.25rem;
    border: none;
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 0.5rem;
`;

interface RadialBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadialBox = styled.button<RadialBoxProps>`
  flex: 1;
  height: 4rem;
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  span {
    font-size: 1rem;
    color: var(--text-title);
  }

  img {
    height: 24px;
    width: 24px;
  }
`;
